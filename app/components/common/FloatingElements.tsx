'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

// 将项目分类并定义样式
const items: { text: string, type: 'tech' | 'project' | 'interest' }[] = [
  // 技术关键词
  { text: "Stata", type: "interest" },
  { text: "SAS", type: "interest" },
  { text: "Python", type: "interest" },
  { text: "R", type: "interest" },
  { text: "QGIS", type: "interest" },
  // 项目关键词
  { text: "Housing Price", type: "tech" },
  { text: "Student Performance", type: "tech" },
  { text: "Boundary Rezone", type: "tech" },
  { text: "School Funding", type: "tech" },
  // 兴趣关键词
  { text: "Education Policy", type: "project" },
  { text: "Public Policy", type: "project" },
  { text: "Applied Micro", type: "project" },
  { text: "Causal inference", type: "project" },
  { text: "Natural Experiment", type: "project" },
]

interface FloatingItem {
  id: number
  text: string
  type: 'tech' | 'project' | 'interest'
  x: number
  y: number
  side: 'left' | 'right'
  direction: { x: number, y: number }
  rotation: number
}

function checkOverlap(
  newItem: { x: number, y: number }, 
  existingItems: { x: number, y: number }[], 
  minDistance = 15
) {
  return existingItems.some(item => {
    const dx = Math.abs(newItem.x - item.x)
    const dy = Math.abs(newItem.y - item.y)
    return Math.sqrt(dx * dx + dy * dy) < minDistance
  })
}

function generatePosition(side: 'left' | 'right', existingItems: { x: number, y: number }[]) {
  let x: number, y: number
  let attempts = 0
  const maxAttempts = 50

  do {
    y = Math.random() * 90 + 10
    if (y < 15) {
      x = Math.random() * 100
    } else {
      x = side === 'left' ? Math.random() * 13 : 82 + Math.random() * 18
    }
    attempts++
  } while (checkOverlap({ x, y }, existingItems) && attempts < maxAttempts)

  return { x, y }
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingItem[]>([])
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    const newElements: FloatingItem[] = []
    
    items.forEach((item, index) => {
      const side = index % 2 === 0 ? 'left' : 'right'
      const pos = generatePosition(side, newElements)
      
      const direction = {
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 8
      }

      newElements.push({
        id: index,
        ...item,
        ...pos,
        side,
        direction,
        rotation: (Math.random() - 0.5) * 15 // 随机旋转角度
      })
    })
    
    setElements(newElements)
  }, [])

  return (
    <motion.div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ opacity }}
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)",
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }
      }}
    >
      {elements.map((item) => (
        <motion.div
          key={item.id}
          className={`
            absolute font-mono
            ${item.type === 'tech' && 'text-blue-400/60 text-base sm:text-lg'}
            ${item.type === 'project' && 'text-amber-400/60 text-lg sm:text-xl font-bold'}
            ${item.type === 'interest' && 'text-emerald-400/60 text-sm'}
          `}
          initial={{ x: `${item.x}vw`, y: `${item.y}vh`, rotate: item.rotation }}
          animate={{
            x: [
              `${item.x}vw`,
              `${item.x + item.direction.x}vw`,
              `${item.x}vw`
            ],
            y: [
              `${item.y}vh`,
              `${item.y + item.direction.y}vh`,
              `${item.y}vh`
            ],
            rotate: [
              item.rotation,
              item.rotation + 5,
              item.rotation
            ]
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {item.text}
        </motion.div>
      ))}
    </motion.div>
  )
} 