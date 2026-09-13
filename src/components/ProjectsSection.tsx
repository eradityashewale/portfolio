import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

const PROJECTS = [
  {
    num: "01",
    name: "Forex CRM",
    category: "Full-Stack CRM Backend",
    href: "https://github.com/eradityashewale",
    client: "Forex Brokerage (UAE / International)",
    system: "REST API Backend + Admin & Client Portal",
    tech: "Python, FastAPI, SQLAlchemy (PyMySQL), MySQL/PostgreSQL, JWT, bcrypt, pyotp, slowapi, python-json-logger, Pandas, openpyxl, MT5 SDK, Binance Pay, CoinsBuy, Git",
    roles: "Python Backend Developer / REST API Developer / Security Engineer / DevOps Support",
    description:
      "A CRM backend for a Forex brokerage that handles the full trader lifecycle — onboarding, KYC, live trading accounts, deposits/withdrawals, and broker commissions — across separate Client, Manager, and Admin portals.",
    responsibilities: [
      "Built the entire backend API (~90 modules) powering the client, manager, and admin portals.",
      "Set up secure login for all user roles, including two-factor authentication and role-based access control.",
      "Connected the platform to the live trading system (MT5) for real-time account and balance management.",
      "Automated deposits, withdrawals, and crypto payments (Binance Pay, CoinsBuy) with admin approval workflows.",
      "Built the broker commission (IB) system — payouts, referral tracking, and approvals.",
      "Added reporting with one-click Excel exports, plus KYC document handling and security hardening for production use.",
    ],
    col1img1: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=840&q=80",
    col1img2: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=840&q=80",
    col2img: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1280&q=80",
  },
  {
    num: "02",
    name: "SHMS",
    category: "Harbor Ops Backend + AI Face Recognition",
    href: "https://github.com/eradityashewale",
    client: "India (Fisheries / Harbor Authority)",
    system: "Harbor Operations Backend with AI-Powered Crew Face Recognition",
    tech: "Python, FastAPI, PostgreSQL (pgvector), Alembic, Docker, Railway, InsightFace, YOLO, PyTorch, JWT, Pydantic, Twilio/MSG91",
    roles: "Python Backend Developer / AI & ML Engineer / Data Engineer / DevOps Engineer",
    description:
      "A backend platform that digitizes fishing harbor operations — crew registration, boat departures/arrivals, and inventory — with AI face recognition so port officers can identify crew from a group photo instead of manual check-ins.",
    responsibilities: [
      "Built the core backend (FastAPI) serving admins, port officers, boat owners, agents, and buyers with secure, role-based logins.",
      "Built an AI face-recognition system (InsightFace + YOLO) that scans a group photo and instantly matches crew members.",
      "Tracked full boat trip lifecycle — departures, arrivals, and fuel/ice/net inventory per trip.",
      "Added OTP login via SMS (Twilio/MSG91) for boat owners, agents, and buyers.",
      "Built a bidding system for agents to place and track purchase offers on arrived boats.",
      "Deployed the app on Docker/Railway with automated database migrations and real-time alerts for key events.",
    ],
    col1img1: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=840&q=80",
    col1img2: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=840&q=80",
    col2img: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1280&q=80",
  },
  {
    num: "03",
    name: "G_AI",
    category: "Chrome Extension — Crypto Insights on Twitter",
    href: "https://github.com/eradityashewale",
    client: "Dubai",
    system: "Chrome Extension in Side Panel",
    tech: "Python, Django, PostgreSQL, AWS SQS, REST APIs, Pandas, ETL, Statistical Analysis",
    roles: "Python Data Analyst / Python Web Developer / Data Engineer / DevOps Engineer",
    description:
      "A Chrome extension that spots crypto tickers (like $BTC) in tweets and shows live price charts, sentiment, and one-click trading right inside Twitter — no need to switch apps.",
    responsibilities: [
      "Built the backend (Django + REST APIs) that powers the extension's real-time crypto data.",
      "Built a real-time pipeline (AWS SQS) that captures tweets, processes them, and stores structured data in PostgreSQL.",
      "Added live candlestick charts with tweet-mention overlays to show market sentiment over time.",
      "Built influencer detection to surface the top voices talking about a coin in the last hour, day, or week.",
      "Connected live price and market data from CoinGecko, DexScreener, CoinMarketCap, and other providers.",
      "Added one-click trading shortcuts to Binance and KuCoin, and scaled the system for concurrent use by hundreds of users.",
    ],
    col1img1: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=840&q=80",
    col1img2: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=840&q=80",
    col2img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1280&q=80",
  },
  {
    num: "04",
    name: "X-Plannet",
    category: "Telegram Crypto Game",
    href: "https://github.com/eradityashewale",
    client: "Capitfy, Dubai",
    system: "Cryptocurrency Game, Telegram",
    tech: "Python, FastAPI",
    roles: "Python Data Analyst / Python Web Developer",
    description:
      "A tap-to-earn game bot on Telegram — players tap to earn points, level up, unlock planets and avatars, and invite friends for referral bonuses, all inside the chat.",
    responsibilities: [
      "Built the tap-to-earn game logic, with points per tap increasing as players level up.",
      "Built a shop/inventory system so players can unlock planets and avatars with points earned.",
      "Added a referral system that rewards players with bonus points for inviting friends.",
      "Built real-time in-chat displays for scores, levels, avatars, and achievements.",
      "Optimized the bot with async programming for smooth, lag-free play.",
      "Set up persistent storage so every player's game progress is saved.",
    ],
    col1img1: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=840&q=80",
    col1img2: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=840&q=80",
    col2img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1280&q=80",
  },
  {
    num: "05",
    name: "AWS SQS Data Pipeline",
    category: "Data Engineering",
    href: "https://github.com/eradityashewale",
    col1img1: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=840&q=80",
    col1img2: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=840&q=80",
    col2img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1280&q=80",
  },
  {
    num: "06",
    name: "Blockchain & Crypto Platform",
    category: "Blockchain",
    href: "https://github.com/eradityashewale",
    col1img1: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=840&q=80",
    col1img2: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=840&q=80",
    col2img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1280&q=80",
  },
  {
    num: "07",
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
  const [open, setOpen] = useState(false);
  const hasDetails = Boolean(project.description);

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
        <div className="flex flex-wrap items-center justify-between gap-y-3 mb-4 sm:mb-6">
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
          <div className="flex items-center gap-3">
            {hasDetails && (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200"
              >
                {open ? "Hide Details" : "Details"}
              </button>
            )}
            <LiveProjectButton href={project.href} />
          </div>
        </div>

        {hasDetails && (
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div
                  className="rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 mb-4 sm:mb-6"
                  style={{ backgroundColor: "#161616", color: "#D7E2EA" }}
                >
                  <div className="grid gap-1 mb-4 text-xs sm:text-sm" style={{ opacity: 0.75 }}>
                    {project.client && <p><span className="font-medium" style={{ opacity: 1 }}>Client:</span> {project.client}</p>}
                    {project.system && <p><span className="font-medium" style={{ opacity: 1 }}>System/Component:</span> {project.system}</p>}
                    {project.tech && <p><span className="font-medium" style={{ opacity: 1 }}>Technology:</span> {project.tech}</p>}
                    {project.roles && <p><span className="font-medium" style={{ opacity: 1 }}>Roles:</span> {project.roles}</p>}
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.responsibilities && (
                    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed" style={{ opacity: 0.9 }}>
                      {project.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

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