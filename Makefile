APP_DIR := projet-react

.PHONY: install dev test test-coverage lint build docker-build up down logs clean

install:
	cd $(APP_DIR) && npm ci

# node_modules dépend de package-lock.json : s'il manque ou est périmé,
# les cibles ci-dessous relancent npm ci toutes seules avant de continuer.
$(APP_DIR)/node_modules: $(APP_DIR)/package-lock.json
	cd $(APP_DIR) && npm ci
	@touch $(APP_DIR)/node_modules

dev: $(APP_DIR)/node_modules
	cd $(APP_DIR) && npm run dev

test: $(APP_DIR)/node_modules
	cd $(APP_DIR) && npm test

test-coverage: $(APP_DIR)/node_modules
	cd $(APP_DIR) && npm run test:coverage

lint: $(APP_DIR)/node_modules
	cd $(APP_DIR) && npm run lint

build: $(APP_DIR)/node_modules
	cd $(APP_DIR) && npm run build

docker-build:
	docker compose build

up:
	docker compose up -d --build

down:
	docker compose down

logs:
	docker compose logs -f

clean:
	rm -rf $(APP_DIR)/node_modules $(APP_DIR)/dist $(APP_DIR)/coverage
