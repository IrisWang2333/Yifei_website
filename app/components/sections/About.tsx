'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
              I am currently a Ph.D. candidate in Economics with a strong focus on applied microeconomics and education policy. My research primarily explores the causal impacts of educational policies, such as school attendance boundary rezoning and targeted interventions like Comprehensive Support and Improvement (CSI) programs, on student outcomes, resource allocation, and housing markets. 
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
              Leveraging advanced econometric methods and machine learning techniques, my work aims to contribute to the development of more effective, equitable, and evidence-based policies. With a multidisciplinary background, I have published papers on dynamic optimization algorithms, credit scoring models, and speech recognition. I actively engage in collaborative projects and value the opportunity to contribute to meaningful societal impact through rigorous analysis and innovation.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interest</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              In my free time, I enjoy hiking and exploring national parks, finding inspiration in nature’s balance and systems. I am also an avid reader of science fiction, which fuels my imagination and innovative thinking. Additionally, I am passionate about photography, capturing everyday moments that tell stories of resilience and community. To relax, I experiment with cooking recipes from different cultures, believing food connects us across diverse backgrounds.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Professional Goal</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              My career goal is to become a professor in economics, where I can combine my passion for research and teaching. I aspire to contribute to the field of education economics by conducting innovative, data-driven research that informs policies promoting educational equity and social mobility. As a professor, I aim to mentor and inspire the next generation of economists, fostering their intellectual growth while building a collaborative academic community. Through both research and teaching, I hope to make a lasting impact on the academic and policy-making landscape.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}