all: up

build:
	docker compose build

up:
	@docker compose up -d

down:
	docker compose down

start:
	socker compose start

stop:
	docker compose stop

logs:
	docker compose logs
	

fclean: down
	docker system prune -f -a

re: fclean all 

.PHONY: all build up down start stop logs prune re fclean