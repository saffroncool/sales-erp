dev:
	pnpm install
	docker compose -f docker-compose.dev.yml up -d
	cp .env.example .env
	pnpm -w prisma generate
	pnpm dev
