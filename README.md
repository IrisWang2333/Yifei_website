# 个人作品集网站模板

基于 Next.js 的响应式个人作品集网站模板，支持深色模式和双语言。

---

## 🚀 快速开始

### 1. 克隆模板

```bash
git clone https://github.com/your-username/portfolio-template.git
cd portfolio-template
```

### 2. 安装依赖

```bash
npm install
```

### 3. 创建并配置 `.gitignore`

```text
dependencies
/node_modules
/.pnp
.pnp.js
testing
/coverage
next.js
/.next/
/out/
production
/build
misc
.DS_Store
.pem
debug
npm-debug.log
yarn-debug.log
yarn-error.log
local env files
.env.local
vercel
.vercel
typescript
.tsbuildinfo
next-env.d.ts
```

### 4. 启动开发服务器

```bash
npm run dev
```

### 5. 目录结构

```plaintext
portfolio/
├── app/
│   ├── components/
│   │   ├── common/          # 通用组件
│   │   │   ├── AnimatedText.tsx
│   │   │   ├── FloatingElements.tsx
│   │   │   ├── GradientBackground.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections/        # 页面主要部分
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── MySkills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Research.tsx
│   │   │   ├── ResearchModal.tsx
│   │   │   └── TeachingExperience.tsx
│   │   └── education/       # 教育相关组件
│   │       └── CourseTimeline.tsx
│   ├── fonts/               # 字体文件
│   ├── types/               # TypeScript 类型定义
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 布局组件
│   └── page.tsx             # 主页面
├── public/                  # 静态资源
│   ├── avatar.jpg           # 个人头像
│   ├── skills/              # 技能图标 (.svg)
│   ├── projects/            # 项目截图
│   ├── research/            # 研究相关图片
│   ├── gallery/             # 个人照片
│   └── companyicon/         # 公司 logo
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 样式定制

### 1. 主题颜色

修改 `tailwind.config.ts` 文件。

### 2. 全局样式

修改 `app/globals.css` 文件。

### 3. 响应式设计

- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

---

## ✨ 组件配置

### 1. **Hero (app/components/sections/Hero.tsx)**

- 更换头像。
- 修改个人信息。
- 更新社交媒体链接。

### 2. **About (app/components/sections/About.tsx)**

- 编辑个人简介。
- 修改兴趣爱好。
- 更新职业目标。

### 3. **Skills (app/components/sections/MySkills.tsx)**

```typescript
const technologies = {
  frontend: [
    { name: "React", icon: "/skills/react.svg" },
    { name: "Vue", icon: "/skills/vue.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/skills/nodejs.svg" },
    { name: "Python", icon: "/skills/python.svg" },
  ],
};
```

### 4. **Research/Experience**

- **Research**: 配置发表论文和在研论文。
- **Experience**: 添加工作经历。

### 5. **Projects/Teaching (app/components/sections/Projects.tsx)(app/components/sections/teachingexperience)**

```typescript
const projects = [
  {
    id: 1,
    title: "项目名称",
    description: "项目描述",
    period: "2024.01 - 2024.03",
    image: "/projects/project-name/overview.png",
    skills: ["React", "Node.js", "MongoDB"],
    link: "项目链接",
  },
];
```

### 6. **Education (app/components/education/CourseTimeline.tsx)**

```typescript
const courses = [
  {
    date: "2024年春季",
    title: "课程名称",
    description: "课程描述",
  },
];
```

---

## 🎨 图片规范

### 1. **头像**

- 路径: `/public/avatar.jpg`
- 建议尺寸: 400x400px

### 2. **技能图标**

- 路径: `/public/skills/`
- 格式: SVG
- 命名: 小写无空格 (例: `react.svg`)

### 3. **项目图片**

- 路径: `/public/projects/项目名/`
- 建议文件:
  - `overview.png`: 项目概览。
  - `feature1.gif`: 功能演示。
  - `mobile.png`: 移动端展示。

### 4. **研究/工作图片**

- 路径: `/public/research/` 或 `/public/companyicon/`
- 建议尺寸: 公司 logo (200x200px)

### 5. **相册照片**

- 路径: `/public/gallery/`
- 命名: `YYYY-MM-location.jpg`
- 建议尺寸: 800x600px

---

## 🚀 部署

### 1. 创建 GitHub 仓库并推送代码

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

### 2. 使用 Vercel 部署

- 登录 [Vercel](https://vercel.com)。
- 导入 GitHub 仓库。
- 按提示完成配置。

---

## 📄 许可

MIT License
