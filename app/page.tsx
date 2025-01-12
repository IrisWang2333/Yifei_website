'use client'
//推荐顺序，用户可自行修改，导航条可以修改在components/common/Navbar.tsx中，根据所选排版更改
//科研人员模版hero，about，skills，research，teaching，education，gallery
//工作人员模版hero，about，skills，experience，project，education，gallery

import Hero from "./components/sections/Hero" //主页内容，用户在components/sections/Hero.tsx中修改
import About from "./components/sections/About" //关于我内容，用户在components/sections/About.tsx中修改
import CourseTimeline from "./components/education/CourseTimeline" //教育经历页面内容，用户在components/education/CourseTimeline.tsx中修改
import Navbar from "./components/common/Navbar" //导航栏，用户在components/common/Navbar.tsx中修改
import MySkills from './components/sections/MySkills' // 需要用户自己添加，技能图标需要自己添加到public/skills目录下
//import Experience from './components/sections/Experience' // 需要用户自己在components/sections/Experience.tsx中添加（工作人员模版）
import { Box } from '@mui/material'
//import Projects from './components/sections/Projects' // 需要用户自己在components/sections/Projects.tsx中添加（工作人员模版）
import Gallery from './components/sections/Gallery' //可以选择删除
import Research from './components/sections/Research' // 需要用户自己在components/sections/Research.tsx中添加（科研人员模版）
import TeachingExperience from './components/sections/TeachingExperience' // 需要用户自己在components/sections/TeachingExperience.tsx中添加（科研人员模版）
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />    
        <About />
        <MySkills />
        <Research />
        <TeachingExperience />
        <section id="education" className="relative">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            p: 4,
          }}>
            <h1 className="text-4xl font-bold mb-12 text-center">Education</h1>
            <CourseTimeline />
          </Box>
        </section>
        <Gallery />
      </main>
    </>
  )
}
