# E-commerce com Next.JS com Stripe

## Informa ao prisma que vamos usar o PostgreSQL como banco de dados

- npx prisma init --datasource-provider postgresql

## Criando uma migration

- npx prisma migrate dev --name init

## Criar o seed

- 1º npm install --save-dev ts-node
- 2º npx prisma db seed
