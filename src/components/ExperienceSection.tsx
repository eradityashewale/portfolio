import FadeIn from "./FadeIn";

const EXPERIENCE = [
  {
    num: "01",
    role: "AI Engineer / Software Developer",
    company: "Graybulls Advisors LLP",
    period: "Sept 2024 — Present",
    points: [
      "Architecting and deploying AI Agent systems using LangChain, LangGraph, and LangSmith for multi-step autonomous task execution and real-time observability.",
      "Building RAG pipelines integrating LLMs (OpenAI, Groq) with custom knowledge bases for intelligent Q&A and decision systems.",
      "Leading AI development for international clients across DeFi/Crypto, Finance, and social data intelligence domains.",
      "Awarded Excellent Performer for outstanding delivery and innovation in AI-driven projects.",
    ],
  },
  {
    num: "02",
    role: "Software Developer / ML Engineer",
    company: "ECGit, Pune",
    period: "Aug 2023 — Sept 2024",
    points: [
      "Delivered AI solutions for DIAGO Finance (Dubai) and Galaxy Sky Verse (Dubai), including social data intelligence and analytics systems.",
      "Built and tuned ML models (classification, regression, clustering) for predictive analytics using Scikit-Learn and PySpark.",
      "Developed ETL pipelines with Apache Airflow for automated large-scale data ingestion and transformation.",
      "Received a client award from Dubai for extraordinary performance on the X-Plannet project.",
    ],
  },
  {
    num: "03",
    role: "Software Engineer",
    company: "Nashik Merchant's Co-operative Bank",
    period: "June 2021 — June 2023",
    points: [
      "Built Python/Django backend systems for banking operations, CRUD APIs, and data reporting dashboards.",
      "Applied PySpark and SQL for large-scale data wrangling, imputation, and statistical analysis on banking datasets.",
      "Created Tableau dashboards for business intelligence and operational performance reporting.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {EXPERIENCE.map((e, i) => (
          <FadeIn key={e.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: "1px solid rgba(215,226,234,0.15)",
                borderBottom: i === EXPERIENCE.length - 1 ? "1px solid rgba(215,226,234,0.15)" : "none",
              }}
            >
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)", color: "#D7E2EA" }}
              >
                {e.num}
              </span>
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex flex-col gap-1">
                  <span
                    className="font-medium uppercase"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", color: "#D7E2EA" }}
                  >
                    {e.role}
                  </span>
                  <span
                    className="font-light uppercase tracking-wide"
                    style={{ fontSize: "clamp(0.75rem, 1.3vw, 1rem)", color: "#D7E2EA", opacity: 0.5 }}
                  >
                    {e.company} · {e.period}
                  </span>
                </div>
                <ul
                  className="list-disc pl-5 space-y-1.5 font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)", color: "#D7E2EA", opacity: 0.7 }}
                >
                  {e.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
