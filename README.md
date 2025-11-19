# Lumina Website

一个使用 React 和 Tailwind CSS 构建的现代化响应式网站。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📦 部署到 GitHub Pages

### 方法 1: 使用部署脚本（推荐）

```bash
./deploy.sh
```

脚本会自动引导你完成：
1. 创建 GitHub 仓库
2. 推送代码
3. 配置 GitHub Pages

### 方法 2: 手动部署

#### 步骤 1: 在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 创建新仓库（例如：`web-case-6` 或 `lumina-website`）
3. **不要**初始化 README、.gitignore 或 license

#### 步骤 2: 推送代码

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

#### 步骤 3: 配置 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分选择 **GitHub Actions**
5. 保存设置

#### 步骤 4: 等待部署

- GitHub Actions 会自动构建和部署你的网站
- 在仓库的 **Actions** 标签页可以查看部署进度
- 部署完成后，网站将在以下地址可用：
  - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 🛠️ 技术栈

- **React** - UI 框架
- **Vite** - 构建工具
- **Tailwind CSS** - CSS 框架
- **Lucide React** - 图标库

## 📝 项目结构

```
.
├── src/
│   ├── App.jsx          # 主应用组件
│   ├── main.jsx         # 入口文件
│   └── index.css        # 全局样式
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions 部署配置
├── index.html            # HTML 模板
├── package.json          # 项目配置
└── vite.config.js        # Vite 配置
```

## 📄 许可证

MIT
