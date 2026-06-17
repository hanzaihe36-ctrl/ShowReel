# 技术规范

## 技术栈
- **HTML5**：语义化标签
- **CSS3**：CSS 变量 + Flexbox + Grid + 媒体查询
- **JavaScript**：原生 ES6+，无框架无依赖
- **部署**：GitHub Pages（静态文件托管）

## 浏览器兼容性
- Chrome 90+
- Edge 90+
- Firefox 90+
- Safari 14+
- 移动端浏览器（iOS Safari, Android Chrome）

## 项目结构
```
ShowReel/
├── index.html              # 首页
├── portfolio.html          # 作品集
├── skills.html             # 技能展示
├── about.html              # 关于我（含简历）
├── contact.html            # 联系我
├── CLAUDE.md               # AI 助手指引
├── README.md               # 项目说明
├── css/
│   └── style.css           # 全站统一样式
├── js/
│   └── main.js             # 全站通用脚本
├── assets/
│   ├── videos/             # 作品视频（用户提供）
│   ├── images/             # 图片素材（用户提供）
│   └── resume.pdf          # 简历文件（用户提供）
├── docs/                   # 项目标准文档
│   ├── requirements.md
│   ├── tech-specs.md       # 本文件
│   ├── design-specs.md
│   ├── execution-steps.md
│   └── content-checklist.md
└── dev-logs/               # 开发日志
    └── YYYY-MM-DD.md
```

## 命名规范
- **HTML 文件**：小写英文，语义化命名
- **CSS 类名**：kebab-case（如 `.nav-bar`、`.work-card`、`.skill-bar`）
- **JS 函数**：camelCase（如 `initNavbar()`、`openVideoModal()`）
- **CSS 变量**：`--primary`、`--bg-light`、`--text-color`
- **资源文件**：小写英文 + 下划线/连字符

## 页面模板规范
每个 HTML 页面遵循统一结构：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题 | 作品集名称</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- 导航栏 -->
    <header class="nav-bar">...</header>

    <!-- 页面主体内容 -->
    <main class="page-content">...</main>

    <!-- 页脚 -->
    <footer class="site-footer">...</footer>

    <script src="js/main.js"></script>
</body>
</html>
```

## 视频播放方案
- 使用 HTML5 `<video>` 标签
- 弹窗使用纯 JS 实现（创建/移除 DOM 元素）
- 点击卡片 → JS 动态创建遮罩层 + 视频播放器 → 点击关闭/按 ESC 关闭
- 不引入第三方视频播放器库
