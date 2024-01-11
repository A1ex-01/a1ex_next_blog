# 使用官方 Node.js 镜像作为基础镜像
FROM node:20.10.0

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
# COPY package.json ./
# 复制项目文件到工作目录
COPY . .

# 安装项目依赖
RUN yarn --registry=https://registry.npm.taobao.org


# RUN yarn run build
# 
# COPY .next ./.next
# 启动应用程序
# CMD ["yarn", "run", "build"]
CMD ["yarn", "run", "start"]