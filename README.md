# E-commerce com Next.JS com Stripe

## Informa ao prisma que vamos usar o PostgreSQL como banco de dados

- npx prisma init --datasource-provider postgresql

## Criando uma migration

- npx prisma migrate dev --name init

## Criar o seed

- 1º npm install --save-dev ts-node
- 2º npx prisma db seed

# Database password: @Store576986

## 1 - yarn add prisma

## 2 - yarn add @prisma/client

## 3 - npx prisma init --datasource-provider postgresql

## Criando migrations

- npx prisma migrate dev --name name_migration
