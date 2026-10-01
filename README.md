# MtX.wiki (newmtxwiki)

MtX.wiki 是一个面向 MtX（Male-to-X，男性向非二元跨性别者）群体的知识库网站，提供 HRT（激素替代治疗）科普、药物信息、手术资讯、生活指南与救助资源。本仓库为其 React 重构版本。

MtX.wiki is a knowledge base for the MtX (Male-to-X, trans-masculine non-binary) community, covering HRT education, medication info, surgery, life guides, and help resources. This repository is its React rewrite.

## 功能特性 / Features

- **Wiki 风格布局 / Wiki-style layout**：左侧分组导航（三层树）+ 文章目录（TOC）自动生成，滚动高亮当前章节
- **中英双语 / Bilingual (中文 / English)**：跟随系统语言，可手动切换并记忆选择
- **暗色模式 / Dark mode**：跟随系统偏好，可手动切换并记忆选择
- **Hash 路由 / Hash routing**：支持浏览器前进/后退、直接访问链接、复制链接与新标签页打开
- **响应式 / Responsive**：移动端抽屉式导航、可横向滚动的数据表格、滚动进度「回到顶部」
- **无障碍 / Accessibility**：跳转到正文、`aria-current` 当前页标记、Esc 关闭抽屉、焦点样式、`prefers-reduced-motion` 支持
- **单一导航数据源 / Single source of truth**：`src/routes.ts` 同时驱动顶栏、侧边栏与文档标题

## 技术栈 / Tech Stack

- React 18 + Vite 5 + TypeScript 5
- 纯 CSS（CSS 变量实现主题切换，无 UI 框架）
- 运行时依赖仅 `react` 与 `react-dom`

## 目录结构 / Structure

```
├── index.html                 # 入口 HTML（含 SEO / Open Graph meta）
├── public/
│   ├── CNAME                  # GitHub Pages 自定义域名
│   └── favicon.svg
├── docs/
│   └── architecture.html      # 架构图（浏览器直接打开）
├── src/
│   ├── App.tsx                # 路由与布局，页面分发
│   ├── routes.ts              # ★ 导航 / 路由 / 标题的唯一数据源
│   ├── main.tsx               # 入口，注入 Theme/Language Provider
│   ├── i18n.ts                # 界面文案（中/英）
│   ├── types.ts               # 共享类型
│   ├── style.css              # 样式与暗色主题变量
│   ├── components/            # Header / Sidebar / MobileTopbar / Footer
│   │                          # WikiArticle / SubNav / Placeholder / BackToTop
│   ├── context/               # LanguageContext / ThemeContext
│   └── pages/                 # Home, Meds, HrtOverview, Surgery, Survey,
│       └── meds/              # Guide, Help, Disclaimer, Contact, Contributors, NotFound
│                              # Estrogens, EstrogenOverview
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
└── vite.config.js
```

## 新增一个页面 / Adding a page

1. 在 `src/pages/`（或 `src/pages/meds/`）新建组件，内部用 `<WikiArticle>` 包裹内容；
2. 在 `src/routes.ts` 的 `SITE_NAV` / `RESOURCE_NAV` 中登记节点，并在 `PAGE_TITLES` 里补上标题；
3. 在 `src/i18n.ts` 的 `Translations` 接口与 `UI.zh` / `UI.en` 中补齐中英文词条；
4. 在 `src/App.tsx` 的 `renderPage()` 中加上对应分支。

顶栏与侧边栏会自动同步，无需分别修改。

## 本地开发 / Local Development

```bash
npm install
npm run dev        # 开发服务器
npm run lint       # ESLint 检查（0 警告）
npm run typecheck  # TypeScript 类型检查
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

本站在「救助资源」页列出的热线号码可能随时间调整，请以官方渠道公布的最新信息为准。
