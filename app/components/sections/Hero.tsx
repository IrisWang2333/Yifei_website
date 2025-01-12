'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements" // 需要用户自己添加，主页背景动画

export default function Hero() {
  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingElements />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AnimatedText className="flex flex-col items-center sm:items-start gap-4">
          <Image
            className="rounded-full"
            src="/avatar2.jpg"
            alt="个人头像"
            width={120}
            height={120}
            priority
          />
          <h1 className="text-4xl font-bold">Yifei Wang</h1>
          <p className="text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)]">
          Economist
          </p>
        </AnimatedText>

        <AnimatedText 
          className="max-w-2xl text-center sm:text-left"
        >
          <p className="text-foreground/80 leading-relaxed">
            University of California, Santa Cruz |  2nd year Ph.D. Student
          </p>
        </AnimatedText>

        <AnimatedText 
          className="flex gap-4 items-center flex-row"
        >
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                    
              px-5                                   
              text-base                              
            "
            href="https://scholar.google.com/citations?user=Lk2Db9QAAAAJ&hl=zh-CN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert dark:invert-0 mr-2"
              src="/googlescholar.svg"
              alt="Google Scholar"
              width={20}                             
              height={20}
              sizes="20px"                          
            />
            Google Scholar
          </a>
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              hover:border-transparent 
              h-12                                   
              px-5                                   
              text-base                              
              min-w-44                              
            "
            href="/Ywresume.pdf"
            target="_blank"
          >
            CV
          </a>
        </AnimatedText>
      </main>

      <AnimatedText 
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
      >
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:ywan1226@ucsc.edu"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/mail.svg"
            alt="Email"
            width={16}
            height={16}
          />
          Email
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/yifei-wang-41308b185/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/linkedin.svg"
            alt="LinkedIn"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </AnimatedText>
    </section>
  )
} 