# 部署说明

## 步骤 1: 在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 创建新仓库（例如：`web-case-6` 或 `lumina-website`）
3. **不要**初始化 README、.gitignore 或 license（我们已经有了）

## 步骤 2: 推送代码到 GitHub

在终端中运行以下命令（将 `YOUR_USERNAME` 和 `YOUR_REPO_NAME` 替换为你的实际值）：

```bash
cd "/Users/jinyili/Desktop/web case 6"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 步骤 3: 配置 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分：
   - 选择 **GitHub Actions** 作为源
5. 保存设置

## 步骤 4: 更新 base 路径（如果需要）

如果你的仓库名不是 `web-case-6`，需要更新 `vite.config.js` 中的 base 路径：

```javascript
base: process.env.NODE_ENV === 'production' ? '/你的仓库名/' : '/'
```

或者设置环境变量：
```bash
export VITE_BASE_PATH=/你的仓库名/
```

## 步骤 5: 等待部署完成

- GitHub Actions 会自动构建和部署你的网站
- 在仓库的 **Actions** 标签页可以查看部署进度
- 部署完成后，网站将在以下地址可用：
  - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 本地测试

在推送之前，你可以本地测试：

```bash
npm install
npm run build
npm run preview
```

