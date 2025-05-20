# Dockerfile.dev
FROM node:20-alpine

# Установим рабочую директорию
WORKDIR /app

# Копируем только файлы зависимостей
COPY package*.json ./

RUN npm install --save --force

# Expose порт
EXPOSE 3000

# Команда для запуска в режиме разработки
CMD ["npm", "run", "dev"]
