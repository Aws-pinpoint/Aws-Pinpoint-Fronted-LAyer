# 🍅 Automato Dashboard
The dashboard of Automato, the market automation tool of 21th century.

[![App Status](https://argocd.automato.firas.cc/api/badge?name=dashboard)](https://argocd.automato.firas.cc/applications/dashboard)

## 🧑‍🎤 Get started

#### To run Automato in development you must:

1. **Install all dependencies**<br>
`yarn install`

2. **Set your environment variables inside `/.env.local`**
```bash
# *--- PUBLIC env variables (exposed in browser) *---
NEXT_PUBLIC_AUTOMATO_DOMAIN=http://localhost:3000

# *--- PRIVATE env variables (only available in backend) *---
# Automato
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432

# Supertokens
SUPERTOKENS_URL=http://localhost:3567

# AWS
AWS_REGION=SECRET
AWS_APPLICATION_ID=SECRET
AWS_ACCESS_KEY_ID=SECRET
AWS_SECRET_ACCESS_KEY=SECRET
```

3. **Run your Postgres and Supertokens servers using `docker-compose`**<br>
`docker-compose up -d`

4. **Initialize database** (this should be automated)
    1. First connect to DB<br>
`psql -h localhost -U postgres -W`
    2. Run these SQL queries (this should be automated)
```sql
CREATE DATABASE supertokens;
CREATE DATABASE automato;

CREATE TABLE IF NOT EXISTS users (
    id INT,
    "supertokensId" VARCHAR,
    "activeAccount" BOOLEAN,
    "createdAt" TIMESTAMP WITH TIME ZONE,
    "updatedAt" TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS verification_codes (
    id INT,
    code   VARCHAR,
    used   BOOLEAN,
    "userId" VARCHAR,
    "createdAt" TIMESTAMP WITH TIME ZONE,
    "updatedAt" TIMESTAMP WITH TIME ZONE
);
```

5. Restart `docker-compose` so that Supertokens can pickup on changes
```
docker-compose down
docker-compose up -d
```

6. Run Automato<br>
`yarn dev`

The dashboard will then be available at `http://localhost:3000`

## Documentation
[See the documentation](./docs/Documentation.md)

## 🧑‍💻 Stacks used

#### 🚀 Frameworks
- React
- NextJS

#### 💻 Components & Dashboard libraries
- Elastic UI

#### 📚 CSS Library
- Tailwind

#### 👻 State managment
- Jotai
