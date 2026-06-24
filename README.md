# Sales ERP (monorepo)

Setup:

1. Install dependencies

```bash
pnpm install
```

2. Start dev Postgres

```bash
docker compose -f docker-compose.dev.yml up -d
```

3. Copy env

```bash
cp .env.example .env
```

4. Prisma generate

```bash
pnpm -w prisma generate
```

5. Prisma migration (create initial migration)

```bash
pnpm -w prisma migrate dev --name init
```

6. Start dev

```bash
pnpm dev
```
