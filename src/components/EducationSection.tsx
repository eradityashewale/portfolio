import FadeIn from "./FadeIn";

const EDUCATION = [
  {
    num: "01",
    degree: "MBA — Accounting & Finance",
    school: "Savitribai Phule Pune University",
  },
  {
    num: "02",
    degree: "BE — Mechanical Engineering",
    school: "Savitribai Phule Pune University",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {EDUCATION.map((e, i) => (
          <FadeIn key={e.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: "1px solid rgba(215,226,234,0.15)",
                borderBottom: i === EDUCATION.length - 1 ? "1px solid rgba(215,226,234,0.15)" : "none",
              }}
            >
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)", color: "#D7E2EA" }}
              >
                {e.num}
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <span
                  className="font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", color: "#D7E2EA" }}
                >
                  {e.degree}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", color: "#D7E2EA", opacity: 0.6 }}
                >
                  {e.school}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
