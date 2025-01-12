'use client'

// 导入必要的组件和类型
import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import { Typography, Container, Box, Card, CardContent, Grid } from '@mui/material'
import GradientBackground from '../common/GradientBackground'

// 定义照片数据类型
type Photo = {
  id: number        // 照片唯一ID
  image: string     // 照片路径
  date: string      // 拍摄日期
  location: string  // 拍摄地点
  description: string // 照片描述
}

// 示例照片数据 - 请替换为你自己的照片信息
const photos: Photo[] = [
  {
    id: 1,
    image: "/gallery/Claudia.JPG", // 图片需放在public/gallery目录下
    date: "2024.12",
    location: "with Claudia Goldin",
    description: "Claudia Goldin, Nobel Prize-winning economist, is renowned for her work on gender economics and labor markets."
  },
  {
    id: 2,
    image: "/gallery/John.jpg",
    date: "2024.12", 
    location: "with John Friedman (center) and Mengying Peng (left).",
    description: "John Friedman is an economist and professor at Brown University, known for his research on social mobility, education, and public policy. Mengying is an educational economist at Hitotsubashi University"
  },
  {
    id: 3,
    image: "/gallery/Jacob.jpg",
    date: "2024.12", 
    location: "with Jacob L. Vigdor",
    description: "Jacob L. Vigdor is an economist and professor at the University of Washington, known for his research on immigration, education policy, and housing economics."
  },
  {
    id: 4,
    image: "/gallery/Annemarie.jpg",
    date: "2024.12", 
    location: "with Annemarie Schweinert",
    description: "Annemarie Schweinert is a Ph.D. student at the University of Wisconsin-Madison, focusing on topics related to economics and public policy."
  },
  {
    id: 5,
    image: "/gallery/Jane.jpg",
    date: "2024.12", 
    location: "with Xuechao(Jane) Qian",
    description: "Jane is a Postdoctoral Scholar at UC Irvine and a former Lazear-Liang Postdoctoral Scholar at Stanford GSB (2022-2024), specializing in labor and health economics with a focus on diversity, innovation, and human capital formation."
  }

]

export default function Gallery() {
  return (
    // 使用Container组件作为最外层容器,设置最大宽度为xl
    <Container id="gallery" maxWidth="xl" component="section">
      {/* Box组件用于布局和样式设置 */}
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 4 },     // 垂直内边距:移动端4,md以上4
        px: { xs: 2, sm: 4, md: 8 }, // 水平内边距:移动端2,sm4,md8
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* 添加渐变背景 */}
        <GradientBackground 
          sectionId="gallery"
          gradientColors={{
            start: '#60A5FA',  // 浅蓝色
            end: '#3B82F6'     // 深蓝色
          }}
        />

        {/* 标题部分 */}
        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center relative z-10">Gallery</h1>
        </AnimatedText>
        
        {/* 照片网格布局 */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ position: 'relative', zIndex: 1, maxWidth: 'xl' }}>
          {/* 遍历照片数组生成卡片 */}
          {photos.map((photo, index) => (
            <Grid item xs={6} sm={4} md={4} key={photo.id} sx={{ 
              // 偶数索引的卡片向下偏移40px
              transform: index % 2 === 0 ? 'translateY(40px)' : 'translateY(0)'
            }}>
              <AnimatedText>
                {/* 照片卡片 */}
                <Card 
                  elevation={0}
                  sx={{
                    height: '100%',
                    // 根据暗/亮主题设置背景
                    background: theme => theme.palette.mode === 'dark' 
                      ? 'rgba(0, 0, 0, 0.2)' 
                      : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    // 根据主题设置边框
                    border: theme => `1px solid ${
                      theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)' 
                        : 'rgba(255, 255, 255, 0.2)'
                    }`,
                    transition: 'all 0.3s ease',
                    // 悬停效果
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      background: theme => theme.palette.mode === 'dark'
                        ? 'rgba(0, 0, 0, 0.3)'
                        : 'rgba(255, 255, 255, 0.15)',
                      boxShadow: theme => theme.palette.mode === 'dark'
                        ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                        : '0 20px 40px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  {/* 卡片内容 */}
                  <CardContent sx={{ 
                    p: { xs: 1.5, sm: 2, md: 3 }  // 内边距:移动端1.5,sm2,md3
                  }}>
                    {/* 照片容器 */}
                    <Box sx={{ mb: { xs: 1, sm: 1.5, md: 2 } }}>
                      <Image
                        src={photo.image}
                        alt={photo.description}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover w-full"
                      />
                    </Box>
                    {/* 地点文本 */}
                    <Typography variant="body1" sx={{ 
                      fontWeight: 500,
                      mb: { xs: 0.5, sm: 0.75, md: 1 },
                      fontSize: { 
                        xs: '0.875rem',  // 14px
                        sm: '1rem',      // 16px
                        md: '1.125rem'   // 18px
                      }
                    }}>
                      {photo.location}
                    </Typography>
                    {/* 日期文本 */}
                    <Typography variant="body2" sx={{ 
                      opacity: 0.7,
                      fontSize: { 
                        xs: '0.75rem',   // 12px
                        sm: '0.875rem',  // 14px
                        md: '1rem'       // 16px
                      }
                    }}>
                      {photo.date}
                    </Typography>
                    {/* 描述文本 */}
                    <Typography variant="body2" sx={{ 
                      opacity: 0.7,
                      mt: { xs: 0.5, sm: 0.75, md: 1 },
                      fontSize: { 
                        xs: '0.75rem',   // 12px
                        sm: '0.875rem',  // 14px
                        md: '1rem'       // 16px
                      }
                    }}>
                      {photo.description}
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedText>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
} 