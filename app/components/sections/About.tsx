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
              I am a fourth-year Economics PhD student at the University of Southern California, with expected graduation in May 2030. I study how public policies and information interventions shape behavior, access to services, and local markets. My current research focuses on private-school subsidies, school attendance boundaries, and public-service delivery.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
              My work combines randomized field experiments, observational causal inference, structural modeling, and multi-source data construction. In a collaboration with the City of San Diego, I build workflows for sampling, treatment assignment, and field implementation. In education research, I develop geographic and LLM-assisted evidence-verification workflows to establish which policy changes occurred and when. My earlier publications cover dynamic programming, credit scoring, and speech recognition.
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
              <h2 className="text-2xl font-semibold">Research Approach</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              I connect economic questions to credible empirical designs and practical implementation. This means building and validating data, examining identification assumptions, and communicating what the evidence can support. I am interested in research collaborations where experiments, causal inference, and economic models can inform decisions about policy, services, and user behavior.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
