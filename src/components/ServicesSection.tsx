import FadeIn from "./FadeIn";

const SERVICES = [
  {
    num: "01",
    name: "AI Agents & RAG",
    desc: "Architecting autonomous AI Agent systems and Retrieval-Augmented Generation pipelines using LangChain, LangGraph, and LangSmith for intelligent, multi-step task execution.",
  },
  {
    num: "02",
    name: "LLM Orchestration",
    desc: "Integrating OpenAI and Groq APIs for context-aware, production-grade LLM applications — with prompt engineering, multi-agent design, and end-to-end tracing.",
  },
  {
    num: "03",
    name: "Computer Vision & ML",
    desc: "Building face recognition, object detection, and predictive ML pipelines with YOLOv8, InsightFace (ArcFace), PyTorch, and Scikit-Learn.",
  },
  {
    num: "04",
    name: "Data Engineering",
    desc: "Designing end-to-end ETL and streaming pipelines with PySpark, Apache Airflow, AWS SQS, and PostgreSQL for large-scale data ingestion and analysis.",
  },
  {
    num: "05",
    name: "Backend & Cloud",
    desc: "Building scalable REST APIs with FastAPI and Django REST Framework, deployed on AWS, Docker, and Railway with production-grade architecture.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)", color: "#0C0C0C", marginBottom: "clamp(3rem, 6vw, 7rem)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: "1px solid rgba(12,12,12,0.15)",
                borderBottom: i === SERVICES.length - 1 ? "1px solid rgba(12,12,12,0.15)" : "none",
              }}
            >
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)", color: "#0C0C0C" }}
              >
                {s.num}
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <span
                  className="font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", color: "#0C0C0C" }}
                >
                  {s.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", color: "#0C0C0C", opacity: 0.6 }}
                >
                  {s.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
