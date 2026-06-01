import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

const PROJECTS = [
  {
    num: "01",
    name: "AWS SQS Data Pipeline",
    category: "Data Engineering",
    href: "https://github.com/eradityashewale",
    col1img1: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=840&q=80",
    col1img2: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=840&q=80",
    col2img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1280&q=80",
  },
  {
    num: "02",
    name: "Blockchain & Crypto Platform",
    category: "Blockchain",
    href: "https://github.com/eradityashewale",
    col1img1: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=840&q=80",
    col1img2: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=840&q=80",
    col2img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1280&q=80",
  },
  {
    num: "03",
    name: "LangChain AI Chatbot",
    category: "AI / ML",
    href: "https://github.com/eradityashewale",
    col1img1: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=840&q=80",
    col1img2: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=840&q=80",
    col2img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1280&q=80",
  },
];

const TOTAL = PROJECTS.length;

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function ProjectCard({ project, index, scrollProgress }: ProjectCardProps) {
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(scrollProgress, [index / TOTAL, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start" style={{ position: "sticky", top: "6rem" }}>
      <motion.div
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
        style={{
          backgroundColor: "#0C0C0C",
          scale,
          top: `${index * 28}px`,
          originY: "top",
          transformOrigin: "top center",
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black leading-none"
              style={{ fontSize: "clamp(2rem, 6vw, 80px)", color: "#D7E2EA" }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span
                className="font-light uppercase tracking-widest"
                style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.9rem)", color: "#D7E2EA", opacity: 0.6 }}
              >
                {project.category}
              </span>
              <span
                className="font-medium uppercase"
                style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)", color: "#D7E2EA" }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left col 40% */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "40%" }}>
            <img
              src={project.col1img1}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.col1img2}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          {/* Right col 60% */}
          <div style={{ width: "60%" }}>
            <img
              src={project.col2img}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "calc(clamp(130px, 16vw, 230px) + clamp(160px, 22vw, 340px) + 0.75rem)" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      {PROJECTS.map((project, i) => (
        <ProjectCard
          key={project.num}
          project={project}
          index={i}
          scrollProgress={scrollYProgress}
        />
      ))}
    </section>
  );
}