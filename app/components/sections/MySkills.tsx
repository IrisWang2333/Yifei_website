'use client'

import React from 'react'
import Image from "next/image"
import AnimatedText from "../common/AnimatedText"

type Technology = { name: string; icon?: string }

const technologies: { Tools: Technology[] } = {
  // 需要用户自己添加技能，图标需要自己添加到public/skills目录下，格式为：{ name: '技能名称', icon: '/skills/技能图标.svg' }
  Tools: [
    { name: 'Python', icon: '/skills/python.svg' },
    { name: 'R', icon: '/skills/r.svg' },
    { name: 'Stata', icon: '/skills/stata.svg' },
    { name: 'QGIS', icon: '/skills/qgis.svg' },
    { name: 'MATLAB', icon: '/skills/matlab.svg' },
    { name: 'SQL fundamentals' },
    { name: 'SAS', icon: '/skills/sas.svg' },
  ]
}

const categories = {
  Tools: 'Programming and Data Tools',
}

export default function MySkills() {
  return (
    <section id="skills" className="
      min-h-screen w-full flex items-center justify-center 
      p-4 sm:p-8 /* 移动端padding为4, sm(640px)以上为8 */
    ">
      <div className="container mx-auto">
        <AnimatedText>
          <h1 className="
            text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center
          ">
            Technical Skills {/* 可以修改标题 */}
          </h1>
        </AnimatedText>
        
        <div className="
          max-w-5xl mx-auto 
          space-y-8 sm:space-y-12 /* 移动端垂直间距8, sm(640px)以上为12 */
        ">
          {(Object.keys(technologies) as Array<keyof typeof technologies>).map((category) => (
            <AnimatedText key={category} className="
              space-y-4 sm:space-y-6 /* 移动端垂直间距4, sm(640px)以上为6 */
            ">
              <h2 className="
                text-xl sm:text-2xl /* 移动端字体大小xl(20px), sm(640px)以上为2xl(24px) */  
                font-semibold text-center
              ">
                {categories[category]}
              </h2>
              
              <div className="flex justify-center">
                <div className="
                  flex flex-wrap justify-center 
                  gap-4 sm:gap-8 md:gap-12 /* 移动端间距4, sm(640px)以上为8, md(768px)以上为12 */
                ">
                  {technologies[category].map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        flex flex-col items-center 
                        gap-2 sm:gap-3 /* 移动端间距2, sm(640px)以上为3 */
                        w-[80px] sm:w-[100px] /* 移动端宽度80px, sm(640px)以上为100px */
                        group
                      "
                    >
                      <div className="
                        relative 
                        w-16 sm:w-20 /* 移动端宽度4rem(64px), sm(640px)以上为5rem(80px) */           
                        h-16 sm:h-20 /* 移动端高度4rem(64px), sm(640px)以上为5rem(80px) */           
                        flex items-center justify-center 
                        transition-all duration-300 
                        group-hover:scale-110   
                        group-hover:-translate-y-1
                      ">
                        {tech.icon ? <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="
                            dark:invert          
                            sm:w-[56px] sm:h-[56px] /* sm(640px)以上图标尺寸为56px */
                          "
                        /> : <span className="text-2xl font-semibold">SQL</span>}
                      </div>
                      <span className="
                        text-sm sm:text-base
                        font-medium 
                        text-foreground/70 
                        group-hover:text-foreground/90 
                        transition-colors 
                        text-center
                      ">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>
          ))}
          <AnimatedText className="max-w-3xl mx-auto space-y-5 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">Research Methods</h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Experimental design and implementation, difference-in-differences, event studies,
              matched comparisons, and heterogeneous treatment effects.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Structural models of household choice, pricing, and entry; equilibrium computation
              and GMM; geospatial data integration; LLM-assisted information extraction,
              evidence provenance, and cross-source validation.
            </p>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
