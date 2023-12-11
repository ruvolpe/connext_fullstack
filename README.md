# Antes de tudo:
1. Efetuar o git clone

## Para o Front:


1. cd frontend
2. npm install
3. npm run dev

## Para o Back:

1. cd backend
2. npm install
3. Duplicar o arquivo .env.example e completar com as informações do seu ambiente no novo arquivo renomeado .env 
4. npm run typeorm migration:run -- -d ./src/data-source
5. npm run dev

Encontre a documentação em "/api-documentation"
