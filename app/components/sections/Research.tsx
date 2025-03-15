'use client'

import AnimatedText from '../common/AnimatedText'
import ResearchModal from './ResearchModal'
import { useState } from 'react'
import Image from 'next/image'

type Publication = {
  id: number
  title: string
  authors: string
  year?: string
  journal?: string
  type: 'publication' | 'working'
  pdf?: string
  ssrn?: string
  description?: string
  citations?: string[]
  bulletPoints?: string[]
  overview?: string
  publishDate?: string
  chartImage?: string
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Intelligent Test Paper Generation Based on Dynamic Programming Algorithm",
    authors: "YiFei Wang, SuRong Wang",
    year: "2020",
    journal: "Journal of Physics: Conference Series",
    type: "publication",
    pdf: "/research/Intelligent Test Paper Generation Based on Dynamic Programming Algorithm.pdf",
    ssrn: "https://iopscience.iop.org/article/10.1088/1742-6596/1682/1/012023/meta",
    description: "This paper describes the problem of intelligent paper grouping and its mathematical model.",
    overview: "This paper describes the problem of intelligent paper grouping and its mathematical model. By optimizing and improving the traditional dynamic programming algorithm, its space complexity is reduced from O (nb) to O (b). At the same time, the flexibility of dynamic programming algorithm is increased by using marker function and tracking algorithm, and the result composition is tracked to obtain the optimal solution. Finally, through several experiments, the improved dynamic programming algorithm is compared with the greedy algorithm and brute force algorithm, and it is found that the improved dynamic programming algorithm has a very good result and is with high efficiency when applied to the simple test paper. It is the most recommended algorithm among the two algorithms compared in this paper.",
    publishDate: "Nov 2020",
    chartImage: "/research/intelligent1.png",
  },
  {
    id: 2,
    title: "A Novel Method For Credit Scoring Based On Feature Transformation And Ensemble Model",
    authors: "Hongxiang Li, Ao Feng, Bin Lin, Houcheng Su, Zixi Liu, Xuliang Duan, Haibo Pu, Yifei Wang",
    year: "2021",
    journal: "PeerJ Computer Science",
    type: "publication",
    pdf: "/research/A novel method for credit scoring based on feature transformation and ensemble model.pdf",
    ssrn: "https://peerj.com/articles/cs-579/",
    description: "This paper designs a heterogeneous ensemble model by weighting the factorization machine (FM) and deep neural networks (DNN), which can efficiently extract low-order intersections and high-order intersections.",
    overview: "Credit scoring is a very critical task for banks and other financial institutions, and it has become an important evaluation metric to distinguish potential defaulting users. In this paper, we propose a credit score prediction method based on feature transformation and ensemble model, which is essentially a cascade approach. The feature transformation process consisting of boosting trees (BT) and auto-encoders (AE) is employed to replace manual feature engineering and to solve the data imbalance problem. For the classification process, this paper designs a heterogeneous ensemble model by weighting the factorization machine (FM) and deep neural networks (DNN), which can efficiently extract low-order intersections and high-order intersections. Comprehensive experiments were conducted on two standard datasets and the results demonstrate that the proposed approach outperforms existing credit scoring models in accuracy.",
    publishDate: "June 2021",
    chartImage: "/research/Credit1.png",
  },
  {
    id: 3,
    title: "Combined Spectral and Speech Features for Pig Speech Recognition",
    authors: "Xuan Wu, Silong Zhou, Mingwei Chen, Yihang Zhao, Yifei Wang, Xianmeng Zhao, Danyang Li, Haibo Pu",
    year: "2022",
    journal: "Plos one",
    type: "publication",
    pdf: "/research/Combined spectral and speech features for pig speech recognition.pdf",
    ssrn: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0276778",
    description: "The network model with the best results and the classifier were selected for combination. An accuracy of 93.39% was achieved on the pig speech classification task, while the AUC also reached 0.99163, demonstrating the superiority of the method. This study contributes to the direction of computer vision and acoustics by recognizing the sound of pigs.",
    overview: "The sound of the pig is one of its important signs, which can reflect various states such as hunger, pain or emotional state, and directly indicates the growth and health status of the pig. Existing speech recognition methods usually start with spectral features. The use of spectrograms to achieve classification of different speech sounds, while working well, may not be the best approach for solving such tasks with single-dimensional feature input. Based on the above assumptions, in order to more accurately grasp the situation of pigs and take timely measures to ensure the health status of pigs, this paper proposes a pig sound classification method based on the dual role of signal spectrum and speech. Spectrograms can visualize information about the characteristics of the sound under different time periods. The audio data are introduced, and the spectrogram features of the model input as well as the audio time-domain features are complemented with each other and passed into a pre-designed parallel network structure. The network model with the best results and the classifier were selected for combination. An accuracy of 93.39% was achieved on the pig speech classification task, while the AUC also reached 0.99163, demonstrating the superiority of the method. This study contributes to the direction of computer vision and acoustics by recognizing the sound of pigs. In addition, a total of 4,000 pig sound datasets in four categories are established in this paper to provide a research basis for later research scholars.",
    publishDate: "Dec 2022",
    chartImage: "/research/pig1.png",
  },
  {
    id: 4,
    title: "Application of a Maverick Stock Capturing Strategy in the Chinese Stock Market",
    authors: "Yifei Wang, Hong Lin, Shuo Yao, Jialin Zou.",
    year: "2022",
    journal: "International Conference on Mathematical Statistics and Economic Analysis",
    type: "publication",
    pdf: "/research/Application of a Maverick Stock Capturing Strategy in the Chinese Stock Market.pdf",
    ssrn: "https://www.atlantis-press.com/proceedings/msea-22/125982751",
    description: "We propose a maverick stock trading strategy and apply it to the Chinese stock market",
    overview: "In this paper, we propose a maverick stock trading strategy and apply it to the Chinese stock market. We use a high-frequency trade data of Chinese stock market in 2019 and apply the trading strategy every day. Data comes from the CSMAR database. Our trading strategy shows an amazingly high return. We further find that the strategy behaves better when trade in all the markets together. When trading in different markets respectively, the return is still much higher than the market index's return, where the highest return appears in the GEM market. This paper provides a new perspective of stock trading.",
    publishDate: "Dec 2022",
    chartImage: "/research/Stock1.png",
  },
  {
    id: 5,
    title: "The Impact of School Attendance Boundary Rezoning on Housing Prices and Students' Academic Performance",
    authors: "YiFei Wang, David Schönholzer",
    type: "working",
    description: "",
    overview: "This paper investigates the effects of school attendance boundary (SAB) rezoning on housing prices and Students' Academic Performance. Using geospatial data and machine learning techniques, we adjust and classify boundary changes to identify patterns in housing market responses and demographic shifts. By applying causal inference frameworks, the study evaluates whether SAB adjustments lead to increased economic and racial integration or exacerbate segregation. Preliminary findings suggest that rezoning significantly influences housing prices and community composition, providing critical insights for policymakers to design equitable and effective boundary policies. The research contributes to understanding the interplay between education policies and broader social dynamics.",
    publishDate: "",
    chartImage: "/research/2.png",
    bulletPoints: [
      "Evaluated the causal impact of boundary adjustments on student academic performance and housing prices.",
      "Utilized GIS and machine learning to analyze school attendance boundary changes.",
      "This study aims to provide actionable insights for policymakers on how to adjust the school attendance boundary."
    ]
  },
  {
    id: 6,
    title: "The Impact of the UK Postcode Lottery on Housing Prices",
    authors: "YiFei Wang, Jeremy West",
    type: "working",
    description: "",
    overview: "The UK Postcode Lottery, a national subscription-based lottery, allocates winnings based on postal codes, leading to unexpected wealth shocks for residents. This study examines its causal impact on housing prices, exploring whether sudden cash inflows affect local property values, housing demand, and neighborhood dynamics. Using a Difference-in-Differences (DID) approach, this research compares housing price trends in areas where residents win large versus small prizes before and after lottery payouts. By leveraging property transaction data and controlling for regional economic factors, the study aims to provide empirical insights into how localized wealth shocks influence the housing market.",
    publishDate: "",
    bulletPoints: [
      "The UK Postcode Lottery creates localized wealth shocks by awarding cash prizes based on postal codes, potentially influencing housing market dynamics.",
      "This study uses a Difference-in-Differences (DID) approach to compare housing price trends in areas where residents win large versus small prizes.",
      "By analyzing property transaction data and controlling for regional economic factors, the research aims to identify the causal impact of sudden wealth inflows on housing prices and demand."
    ]
  },
  {
    id: 7,
    title: "Impact of Education Savings Accounts (ESA) on Students' Academic Performance and School Choice",
    authors: "YiFei Wang",
    type: "working",
    description: "",
    overview: "This study examines the impact of Education Savings Accounts (ESAs) on K-12 education, focusing on their effects on student achievement and school choice. ESAs are publicly funded, government-authorized savings accounts that parents can use for various educational expenses, including tuition, tutoring, online education programs, special education therapies, textbooks, and, in some cases, college savings. Currently, there are 19 ESA programs across 17 states in the U.S., with variations in eligibility criteria and implementation.",
    publishDate: "",
    bulletPoints: [
      "Education Savings Accounts (ESAs) provide publicly funded, flexible spending options for K-12 education, allowing families to cover tuition, tutoring, online programs, and other educational expenses.",
      "This research examines the impact of ESAs on student achievement and school choice, focusing on policy differences across states such as Arizona, North Carolina, Florida, Utah, and Tennessee.",
      "Using a Difference-in-Differences (DID) approach with matching techniques, the study aims to provide empirical insights for policymakers to assess ESA effectiveness and optimize program design."
    ]
  },
]

const renderAuthorsWithLinks = (authors: string) => {
  const authorWithLinks = authors
    .replace(
      'David Schönholzer', 
      '<a href="https://www.davidschonholzer.com" class="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300" target="_blank" rel="noopener noreferrer">David Schönholzer</a>'
    )
    .replace(
      'Jeremy West', 
      '<a href="https://people.ucsc.edu/~jwest1/" class="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300" target="_blank" rel="noopener noreferrer">Jeremy West</a>'
    );
  
  return <span dangerouslySetInnerHTML={{ __html: authorWithLinks }} />;
};

export default function Research() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPaper, setSelectedPaper] = useState<Publication | null>(null)

  const handleOpenModal = (paper: Publication) => {
    setSelectedPaper(paper)
    setModalOpen(true)
  }

  return (
    <section id="research" className="
      min-h-screen w-full 
      flex items-center justify-center 
      py-16 px-4 sm:px-8 md:px-16
    ">

      <div className="container max-w-4xl mx-auto relative z-10">
        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Research
          </h1>
        </AnimatedText>

        <div className="space-y-16">
          {['publication', 'working'].map((type) => (
            <div key={type} className="space-y-8">
              <AnimatedText>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {type === 'working' ? 'Working Papers' : 'Publications'}
                </h2>
              </AnimatedText>

              {publications
                .filter(paper => paper.type === type)
                .map((paper) => (
                  <AnimatedText key={paper.id}>
                    <div className="
                      group
                      flex flex-col sm:flex-row sm:items-start sm:justify-between
                      pb-8 border-b border-black/10 dark:border-white/10
                      transition-all duration-300
                      -mx-4 px-4 py-2 rounded-lg
                    ">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-medium text-base sm:text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {paper.title}
                          </h3>
                          <span className="opacity-70 text-sm sm:text-base">{paper.year}</span>
                        </div>
                        
                        {paper.authors && (
                          <p className="opacity-70 text-sm sm:text-base">
                            {renderAuthorsWithLinks(paper.authors)}
                          </p>
                        )}

                        {paper.journal && (
                          <p className="opacity-80 text-sm sm:text-base italic font-semibold">
                            {paper.journal}
                          </p>
                        )}
                        
                        <div className="flex flex-wrap gap-3 text-base">
                          {paper.pdf && (
                            <a 
                              href={paper.pdf}
                              className="inline-flex items-center text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 group-hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                            >
                              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 18H17V16H7V18Z" fill="currentColor" />
                                <path d="M17 14H7V12H17V14Z" fill="currentColor" />
                                <path d="M7 10H11V8H7V10Z" fill="currentColor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" />
                              </svg>
                              PDF
                            </a>
                          )}
                          {paper.ssrn && (
                            <a 
                              href={paper.ssrn}
                              className="inline-flex items-center text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 group-hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                            >
                              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.982 19.61c.454-.7.909-1.6 1.236-2.5h.245c1.09 0 2.18-.218 3.271-.218 1.09 0 2.035.218 2.726.655.69.218.981.873.981 1.528 0 .873-.545 1.746-1.09 2.4-.546.655-1.309.873-2.181.873-1.309 0-2.617-.436-3.707-1.091-1.4-.437-2.29-.983-3.054-1.91-.218.437-.545.655-.981.655-.546 0-1.091-.218-1.637-.218-.545-.219-.981-.437-1.526-.874.981-.872 1.962-1.963 2.617-2.835H7.1c-.545.872-1.09 1.618-1.744 2.4-.764 0-1.527-.219-2.29-.219-1.309-.218-2.617-.436-3.926-.436-.655 1.527-2.29 2.4-3.926 2.4v-1.746c1.09 0 2.18.218 2.726 1.31-1.09 1.09-2.181 2.4-2.726 3.926-.545.219-1.09.437-1.635.437-.546 0-.982-.218-1.527-.218v-1.746c.545 0 1.09 0 1.636.218.545 0 .981.219 1.526.655.545-.655.981-1.528 1.417-2.4-1.09 0-2.18-.219-3.27-.219v-1.745c1.09 0 2.18.218 3.27.218.537 0 1.09-.218 1.627-.436-.545-.874-.981-1.746-1.626-2.619-.982.219-1.963.219-2.945.219V4.764c1.09 0 2.18 0 3.27-.219 1.1-.218 2.182-.218 3.272-.218.536-.873.763-1.964 1.09-2.836h1.963c-.327.872-.654 1.745-1.09 2.4h5.67c-.327-.655-.654-1.527-1.09-2.4h1.964c.436.873.872 1.745 1.09 2.618 1.09 0 2.18.219 3.27.219 1.091 0 2.182 0 3.272-.219v1.746c-.981 0-1.963 0-2.944-.219-.545.873-1.09 1.745-1.527 2.619.545.218 1.09.436 1.635.436s1.09-.218 3.272-.218v1.745c-1.09 0-2.181.219-3.271.219.436.872.981 1.745 1.417 2.4.545-.218.981-.437 1.526-.437.545-.218 1.09-.218 1.636-.218v1.746c-.545 0-.982 0-1.527.218-.545 0-1.09.219-1.526.437-.546 1.309-1.637 2.618-2.726 3.708.545.873 1.635 1.31 2.726 1.31v1.745c-1.636 0-3.27-.873-3.926-2.4-1.309 0-2.617.219-3.926.437-.763 0-1.526.218-2.29.218-.654-.654-1.09-1.527-1.745-2.4H9.39c.764.873 1.636 1.746 2.617 2.837-.545.436-.981.654-1.526.872-.546 0-1.09.22-1.636.22-.545 0-.872-.22-.981-.655-.764.872-1.636 1.527-3.053 1.963-1.09.655-2.4 1.09-3.708 1.09-.873 0-1.636-.218-2.18-.872-.546-.655-1.091-1.528-1.091-2.4 0-.655.327-1.31.981-1.528.8-.437 1.745-.655 2.726-.655 1.09 0 2.181.218 3.27.218h.246c.436.9.872 1.8 1.236 2.5.654-.218 1.526-.436 2.18-.654.328-.655.655-1.092.982-1.746h-3.38c-.546 0-.982-.218-1.4-.218-.418-.219-.672-.655-.672-1.091 0-.655.182-1.31 1.236-1.31h5.343c1.09 0 1.854.219 1.854 1.528 0 .436-.11.872-.328 1.309-.218.655-.545 1.309-.981 1.963.654.218 1.526.437 2.18.655zm-5.778-9.17c-.218-.437-.764-.874-1.309-.874h-2.18v.219c0 .218.436.436.981.436h2.617c-.109.219 0 .219-.109.219zm-.327 3.053c-.218-.437-.654-.655-1.09-.655h-2.617v.219c0 .218.327.218.654.218h3.162c-.109.219 0 .219-.109.219zm8.614 3.491h-7.197c.327.436.436.872.436 1.527 0 .437-.109.655-.218 1.091.981 0 1.962.219 2.944.219.981 0 1.963 0 2.944-.219-.218-.218-.218-.654-.218-1.09 0-.655.109-1.091.436-1.528h.873zm-3.816-3.491c-.109 0-.109 0-.109-.219h3.162c.327 0 .654 0 .654-.218v-.219h-2.616c-.437 0-.764.218-1.091.655zm-.873-1.528c-.109 0-.109 0-.109-.218h2.508c.545 0 .981-.22.981-.437v-.219h-2.18c-.545 0-.982.437-1.2.874zm4.47 1.964H9.608v.654h7.415v-.654h.328zm-.11-2.619h-7.96v.655h7.942v-.655h.018z" fill="currentColor" />
                              </svg>
                              HTML
                            </a>
                          )}
                        </div>

                        {paper.description && (
                          <p className="opacity-70 text-sm sm:text-base leading-relaxed mb-2">
                            {paper.description}
                          </p>
                        )}
                        
                        {paper.bulletPoints && (
                          <ul className="list-disc space-y-2 opacity-70 text-sm sm:text-base pl-5">
                            {paper.bulletPoints.map((point, index) => (
                              <li key={index} className="leading-relaxed">{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      
                      <button
                        onClick={() => handleOpenModal(paper)}
                        className="
                          rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
                          transition-all flex items-center justify-center 
                          hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
                          hover:border-transparent 
                          hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                          dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                          h-9 sm:h-10                                   
                          px-4                                   
                          text-sm sm:text-base
                          whitespace-nowrap                    
                          min-w-[120px] sm:min-w-[140px]      
                          mt-4 sm:mt-4 sm:ml-6                        
                          flex-shrink-0
                          group
                          self-start
                        "
                      >
                        <span className="
                          mr-2
                          group-hover:translate-x-0.5
                          transition-transform duration-300
                        ">
                          See Details
                        </span>
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="
                            group-hover:translate-x-0.5
                            transition-transform duration-300
                            stroke-black dark:stroke-white
                          "
                        >
                          <path 
                            d="M3 8H13M13 8L8 3M13 8L8 13" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </AnimatedText>
                ))}
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedPaper && (
        <ResearchModal
          paper={selectedPaper}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  )
} 