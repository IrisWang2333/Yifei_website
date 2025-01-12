'use client'

import AnimatedText from '../common/AnimatedText'

type Course = {
  id: number
  code: string
  name: string
  level?: string
  professor: string
  term: string
  reviews?: string[]
}

// 示例课程数据
const courses: Course[] = [
  {
    id: 1,
    code: "ECON 124",
    name: "Machine Learning for Economists",
    professor: "Michael Pak-shing Leung",
    term: "2025.01-Current"
  },
  {
    id: 2,
    code: "ECON 1", 
    name: "Introductory Microeconomics ",
    professor: "Subhra Baran Saha",
    term: "2024.09-2024.12",
    reviews: [
      "She helped me encourage that I could succeed in the course by trying to put the answer and concept into simpler terms.",
      "My TA was very kind and friendly which was encouraging",
      "She would often have a whiteboard on her screen share showing us on how she would do the work and sometimes show other examples from classes she took herself.",
      "I appreciated when we went over problems step by step"
    ]
  },
  {
    id: 3,
    code: "ECON 1", 
    name: "Introductory Microeconomics ",
    professor: "Kwok-Chiu Fung",
    term: "2024.04-2024.06",
    reviews: [
      "She often giving all his student insightful teaching materiale letting me catch on the class and prepared for the exam",
      "Going over questions and really explaining them helped to fully understand a concept."
    ]
  },
  {
    id: 4,
    code: "ECON 1", 
    name: "Introductory Microeconomics ",
    professor: "Kwok-Chiu Fung",
    term: "2024.01-2024.03",
    reviews: [
      "The TA's responsiveness over email with issues I was having with the coursework was extremely helpful.",
      "The TA had people answer questions that she asked which was helpful in getting students to interact. She drew on the board which made it helpful to visualize the concepts.",
    ]
  }
]

export default function TeachingExperience() {
  return (
    <section id="teaching" className="
      min-h-screen w-full 
      flex items-center justify-center 
      py-16 px-4 sm:px-8 md:px-16
    ">
      <div className="container max-w-4xl mx-auto">
        <AnimatedText>
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-center">
              Teaching Experience
            </h1>
            <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              @ University of California, Santa Cruz
            </span>
          </div>
        </AnimatedText>

        <div className="space-y-12">
          {courses.map((course) => (
            <AnimatedText key={course.id}>
              <div className="space-y-4 pb-8 border-b border-black/10 dark:border-white/10">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {course.code}: {course.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {course.level}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-base sm:text-lg">
                  Teaching Assistant - {course.professor}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {course.term}
                  </p>
                </div>

                {course.reviews && course.reviews.length > 0 && (
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-bold">
                    Student Evaluation Highlights:
                    </h3>
                    {course.reviews.map((review, index) => (
                      <blockquote 
                        key={index}
                        className="
                          pl-4 
                          border-l-2 border-gray-300 dark:border-gray-700
                          italic
                          text-gray-600 dark:text-gray-400
                        "
                      >
                        "{review}"
                      </blockquote>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
} 