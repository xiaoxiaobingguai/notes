#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
# cd docs/.vuepress/dist

#创建.nojekyll 防止Github Pages build错误
# touch .nojekyll

# git init
# git config user.name "xiaoxiaobingguai"
# git config user.email "laiblame@163.com"
# git add -A
# git commit -m 'deploy'
# git push -f "https://${access_token}@github.com/xiaoxiaobingguai/document.git" master:gh-pages

cd -
