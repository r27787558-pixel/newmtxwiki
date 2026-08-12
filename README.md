# MtX.wiki (newmtxwiki)

MtX.wiki 是一个面向 MtX（Male-to-X，男性向非二元跨性别者）群体的知识库网站，提供 HRT（激素替代治疗）科普、药物信息、手术资讯、生活指南与救助资源。本仓库为其 React 重构版本。

MtX.wiki is a knowledge base for the MtX (Male-to-X, trans-masculine non-binary) community, covering HRT education, medication info, surgery, life guides, and help resources. This repository is its React rewrite.

## 功能特性 / Features

- **Wiki 风格布局 / Wiki-style layout**：左侧分组导航 + 文章目录（TOC）自动生成，滚动高亮当前章节
- **中英双语 / Bilingual (中文 / English)**：跟随系统语言，可手动切换并记忆选择
- **暗色模式 / Dark mode**：跟随系统偏好，可手动切换并记忆选择
- **Hash 路由 / Hash routing**：支持浏览器前进/后退与直接访问链接
- **响应式 / Responsive**：移动端自动隐藏侧边栏，适配小屏

## 技术栈 / Tech Stack

- React 18 + Vite 5
- 纯 CSS（CSS 变量实现主题切换，无 UI 框架）

## 目录结构 / Structure

```
├── index.html                 # 入口 HTML
├── public/
│   ├── CNAME                  # GitHub Pages 自定义域名
│   └── favicon.svg
├── src/
│   ├── App.jsx                # 路由与布局
│   ├── main.jsx               # 入口，注入 Theme/Language Provider
│   ├── i18n.js                # 界面文案（中/英）
│   ├── style.css              # 样式与暗色主题变量
│   ├── components/            # Header / Sidebar / Footer / WikiArticle
│   ├── context/               # LanguageContext / ThemeContext
│   └── pages/                 # Home, Meds, HrtOverview, Surgery, Survey,
│                              # Guide, Help, Disclaimer, Contact
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
└── vite.config.js
```

## 本地开发 / Local Development

```bash
npm install
npm run dev        # 开发服务器
npm run lint       # ESLint 检查（0 警告）
npm run build      # 生产构建到 dist/
npm run preview    # 预览构建产物
```

## 部署 / Deployment

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）会自动构建并部署到 GitHub Pages。站点使用 `public/CNAME` 中的自定义域名。

## 参与贡献 / Contributing

- 有意共建本站，欢迎通过 QQ `2132248873` 联系站长
- 或通过 GitHub [Issues](https://github.com/r27787558-pixel/newmtxwiki/issues) 提交建议与反馈
- 欢迎提交 Pull Request 补充各页面内容

## 医学免责声明 / Medical Disclaimer

本站内容仅供参考，不构成医疗建议。任何用药或治疗决策请务必咨询合格的医生。详见站点内「医学免责声明」页面。
