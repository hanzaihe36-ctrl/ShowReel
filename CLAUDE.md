# CLAUDE.md

## 项目简介
这是一个游戏特效师个人作品集展示网站，用户是求职中的大学生，不懂代码。网站为纯静态多页面站点（HTML + CSS + JS），部署到 GitHub Pages。

## 标准文档路径

| 文档 | 路径 | 说明 |
|------|------|------|
| 需求规格 | [docs/requirements.md](docs/requirements.md) | 页面功能、用户画像、非功能需求 |
| 技术规范 | [docs/tech-specs.md](docs/tech-specs.md) | 技术栈、项目结构、命名规范、视频方案 |
| 设计规范 | [docs/design-specs.md](docs/design-specs.md) | 色彩、字体、间距、响应式断点、组件样式 |
| 执行步骤 | [docs/execution-steps.md](docs/execution-steps.md) | 分阶段任务清单 + 验收标准 |
| 素材清单 | [docs/content-checklist.md](docs/content-checklist.md) | 用户需提供的内容，标注收集进度 |
| 开发日志 | [dev-logs/](dev-logs/) | 每日开发记录（按日期命名） |

## 工作规范

### 每次开发对话流程
1. **开始前**：读取 [docs/execution-steps.md](docs/execution-steps.md)，确认当前应执行的阶段
2. **开发中**：严格遵循 [docs/tech-specs.md](docs/tech-specs.md) 和 [docs/design-specs.md](docs/design-specs.md)
3. **完成后**：
   - 更新 `dev-logs/YYYY-MM-DD.md`，记录完成事项 + 待办事项
   - 更新 [docs/execution-steps.md](docs/execution-steps.md) 勾选完成的产出物

### 渐进式开发原则
- **一次只做一个阶段**，一个阶段验收通过后再进入下一阶段
- 每阶段产出物控制在 1-2 轮对话内完成
- 阶段 0（项目初始化）建好骨架后，后续阶段只填充内容
- 遇到不确定的设计决策时，向用户确认而不是自作主张

### 代码规范
- 所有页面使用统一的 HTML 模板结构（见 tech-specs.md）
- CSS 类名使用 kebab-case，JS 函数使用 camelCase
- 零外部依赖：不引入任何第三方 CSS/JS 库或框架
- 中文内容使用 `lang="zh-CN"`
- 提交信息使用中文描述

### 用户协作
- 用户不懂代码，解释时用通俗语言，避免技术术语
- 素材收集参考 [docs/content-checklist.md](docs/content-checklist.md)，适时提醒用户提供
- 重大设计选择给用户选项，小细节自行决定并告知

## 导航结构
```
首页 → 作品集 → 技能 → 关于我（含简历） → 联系我
```
5 个独立 HTML 页面，顶部固定导航栏，当前页高亮。

## 设计摘要
- **主色**：#5B9BD5（淡蓝）
- **风格**：简洁直观，大量留白，卡片式布局
- **字体**：PingFang SC / Microsoft YaHei
- **响应式**：移动优先，768px / 1024px 断点
