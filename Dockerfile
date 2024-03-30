# 使用官方 Node.js 镜像作为基础镜像
FROM node:20.10.0

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
# COPY package.json ./
# 复制项目文件到工作目录
COPY . .
RUN npm install pnpm -g
# 安装项目依赖
RUN pnpm install


# RUN yarn run build
# 
# COPY .next ./.next
# 启动应用程序
# CMD ["yarn", "run", "build"]
CMD ["pnpm", "run", "start"]