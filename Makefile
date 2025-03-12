PROJECT_NAME=app-hexa
APP_SERVICE=app

docker-start:
	docker compose -p $(PROJECT_NAME) up -d

docker-stop: 
	docker compose -p $(PROJECT_NAME) down --remove-orphans

docker-build:
	docker compose -p $(PROJECT_NAME) build

docker-restart:
	docker compose -p $(PROJECT_NAME) restart

docker-logs:
	docker compose -p $(PROJECT_NAME) logs -f $(APP_SERVICE)

docker-exec:
	docker exec -it $$(docker ps -q -f "name=$(PROJECT_NAME)_$(APP_SERVICE)_1") sh

docker-clean:
	docker compose -p $(PROJECT_NAME) down --volumes --remove-orphans
	docker system prune -f