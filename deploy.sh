#!/bin/bash

# GitHub Pages 部署脚本

echo "🚀 Lumina 网站部署助手"
echo ""

# 检查是否已设置远程仓库
if git remote -v | grep -q origin; then
    echo "✅ 已检测到远程仓库"
    git remote -v
    echo ""
    echo "正在推送代码到 GitHub..."
    git push -u origin main
    echo ""
    echo "✅ 代码已推送！"
    echo ""
    echo "📝 下一步："
    echo "1. 访问你的 GitHub 仓库"
    echo "2. 进入 Settings > Pages"
    echo "3. 在 Source 中选择 'GitHub Actions'"
    echo "4. 保存后等待自动部署完成"
    echo ""
    echo "🌐 部署完成后，你的网站将在以下地址可用："
    REPO_URL=$(git remote get-url origin 2>/dev/null | sed 's/.*github.com[:/]\([^.]*\).*/\1/' | sed 's/\.git$//')
    if [ ! -z "$REPO_URL" ]; then
        echo "   https://$(echo $REPO_URL | cut -d'/' -f1).github.io/$(echo $REPO_URL | cut -d'/' -f2)/"
    else
        echo "   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
    fi
else
    echo "❌ 未检测到远程仓库"
    echo ""
    read -p "请输入你的 GitHub 用户名: " GITHUB_USER
    read -p "请输入仓库名称 (例如: web-case-6): " REPO_NAME
    echo ""
    echo "正在添加远程仓库..."
    git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git
    echo ""
    echo "⚠️  请先在 GitHub 上创建仓库: https://github.com/new"
    echo "   仓库名: $REPO_NAME"
    echo "   不要初始化 README、.gitignore 或 license"
    echo ""
    read -p "创建完成后按 Enter 继续..."
    echo ""
    echo "正在推送代码..."
    git push -u origin main
    echo ""
    echo "✅ 代码已推送！"
    echo ""
    echo "📝 下一步："
    echo "1. 访问 https://github.com/$GITHUB_USER/$REPO_NAME"
    echo "2. 进入 Settings > Pages"
    echo "3. 在 Source 中选择 'GitHub Actions'"
    echo "4. 保存后等待自动部署完成"
    echo ""
    echo "🌐 部署完成后，你的网站将在以下地址可用："
    echo "   https://$GITHUB_USER.github.io/$REPO_NAME/"
fi

