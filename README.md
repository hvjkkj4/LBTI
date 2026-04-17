# LBTI

一个基于 Next.js 的娱乐向人格测试项目。

LBTI 不做心理诊断，重点是用更生活化的题目，观察你在社交、情绪、行动和自我管理里的决策倾向，并生成人格结果卡。

## 功能概览

- 首页展示：主视觉 + 人格轮播 + 信息卡片
- 问卷测试：多题单选、进度显示、上一题/下一题
- 结果页：
  - 人格类型代码与昵称
  - 人格标语与头像
  - 人格速写（多段文案）
  - 15 维度分布展示
  - 可分享文案
- 一键重测

## 技术栈

- Next.js 16（App Router）
- React 19
- TypeScript
- Sass/SCSS

## 本地运行

### 1. 安装依赖

npm install

### 2. 启动开发环境

npm run dev

默认端口为 3000。

### 3. 构建生产版本

npm run build

### 4. 启动生产服务

npm run start

## 可用脚本

- npm run dev：开发模式（端口 3000）
- npm run build：生产构建
- npm run start：生产模式启动（端口 3000）
- npm run lint：代码检查

## 项目结构

src/
app/
page.tsx # 首页
test/page.tsx # 测试页
result/page.tsx # 结果页
types/page.tsx # 类型总览页
components/ # 通用组件与首页组件
data/
questions.ts # 题库数据
types.ts # 人格类型定义
dimensions.ts # 维度说明
lib/
scoring.ts # 评分与结果计算
styles/ # SCSS 样式文件

## 数据与评分说明

- 题目数据在 src/data/questions.ts
- 每个选项包含对不同人格类型的投票权重
- 最终结果由 src/lib/scoring.ts 计算

## 常见问题

### 1) npm run dev 报错 EADDRINUSE:3000

说明 3000 端口已被占用。可以：

- 关闭占用 3000 的进程后重试
- 或临时改端口启动：

npx next dev -p 3001

### 2) tsconfig 中提示 baseUrl 弃用

当前项目已改为不依赖 baseUrl 的路径别名写法：

- "@/_": ["./src/_"]

如果编辑器仍显示旧提示，重启 TypeScript Server 或重开 VS Code 即可。

## 免责声明

本项目仅用于娱乐与自我观察，不提供医学、心理学或临床诊断建议。

## License

ISC
