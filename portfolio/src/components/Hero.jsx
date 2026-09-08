import React from "react";
import { motion } from "framer-motion";
import { User, Atom, Server, Leaf, Brain, Sparkles, ArrowDown, ArrowUpRight, ArrowRight, Code2 } from "lucide-react";

// ---- small building blocks ----------------------------------------------

const NodeBox = ({ icon, label, tone, index = 0 }) => {
  const tones = {
    violet: "border-violet-500/50 bg-violet-950/40 text-violet-200 hover:text-violet-400",
    sky: "border-sky-500/40 bg-sky-950/30 text-sky-200 hover:text-sky-400",
    emerald: "border-emerald-500/50 bg-emerald-950/40 text-emerald-200 hover:text-emerald-400",
    purple: "border-purple-500/50 bg-purple-950/40 text-purple-200 hover:text-purple-400",
  };

  const glowTones = {
    violet: "0 0 24px rgba(167,139,250,0.35)",
    sky: "0 0 24px rgba(56,189,248,0.35)",
    emerald: "0 0 24px rgba(52,211,153,0.35)",
    purple: "0 0 24px rgba(192,132,252,0.35)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{
        y: -3,
        scale: 1.03,
        boxShadow: glowTones[tone],
        transition: { duration: 0.25 },
      }}
      className={`flex items-center gap-3 rounded-xl border px-6 py-3.5 backdrop-blur-sm ${tones[tone]}`}
    >
      <span className="shrink-0">{icon}</span>
      <span className="text-[15px] font-medium text-slate-100 whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

const VArrow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="my-1.5 h-4 w-4 text-slate-600" strokeWidth={2.5} />
      </motion.div>
    </motion.div>
  );
}

const SideLabel = ({ eyebrow, lines, dotColor, index = 0 }) => {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.span
        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: dotColor }}
        animate={{
          boxShadow: [
            `0 0 6px ${dotColor}`,
            `0 0 14px ${dotColor}`,
            `0 0 6px ${dotColor}`,
          ],
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      />
      <div>
        <p
          className="text-[11px] font-semibold tracking-wide"
          style={{ color: dotColor }}
        >
          {eyebrow}
        </p>
        <div className="mt-1 text-[13px] leading-5 text-slate-400">
          {lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ---- the diagram on the right -------------------------------------------

const ArchitectureDiagram = () => {
  return (
    <div className="relative flex items-start gap-16">
      {/* flow column */}
      <div className="flex flex-col items-center">
        <NodeBox icon={<User className="h-4 w-4" />} label="USER" tone="violet" index={0} />
        <VArrow />
        <NodeBox icon={<Atom className="h-4 w-4" />} label="React" tone="sky" index={1} />
        <VArrow />
        <NodeBox icon={<Server className="h-4 w-4" />} label="Node / API" tone="sky" index={2} />

        {/* fork connector */}
        <motion.svg
          width="260"
          height="40"
          className="text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <line x1="130" y1="0" x2="130" y2="12" stroke="currentColor" strokeWidth="1.5" />
          <line x1="35" y1="12" x2="225" y2="12" stroke="currentColor" strokeWidth="1.5" />
          <line x1="35" y1="12" x2="35" y2="34" stroke="currentColor" strokeWidth="1.5" />
          <line x1="225" y1="12" x2="225" y2="34" stroke="currentColor" strokeWidth="1.5" />
          <polyline points="30,29 35,36 40,29" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <polyline points="220,29 225,36 230,29" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </motion.svg>

        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center">
            <NodeBox icon={<Leaf className="h-4 w-4" />} label="MongoDB" tone="emerald" index={3} />
          </div>
          <div className="flex flex-col items-center">
            <NodeBox icon={<Brain className="h-4 w-4" />} label="AI / ML" tone="purple" index={4} />
            <VArrow />
            <NodeBox icon={<Sparkles className="h-4 w-4" />} label="LLM / RAG" tone="purple" index={5} />
          </div>
        </div>
      </div>

      {/* dotted rail + side labels */}
      <div className="relative hidden lg:flex flex-col justify-between py-1" style={{ height: 430 }}>
        <motion.div
          className="absolute left-0 top-2 bottom-2 border-l border-dashed border-slate-700"
          style={{ left: "-2.5rem" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <SideLabel
          eyebrow="FRONTEND"
          lines={["React", "Tailwind CSS","HTML", "CSS", "JavaScript"]}
          dotColor="#a78bfa"
          index={0}
        />
        <SideLabel
          eyebrow="BACKEND"
          lines={["Node.js", "Express"]}
          dotColor="#38bdf8"
          index={1}
        />
        <SideLabel eyebrow="DATABASE" lines={["MongoDB","MySQL"]} dotColor="#34d399" index={2} />
        <SideLabel
          eyebrow="INTELLIGENCE"
          lines={["AI Models", "RAG Pipelines","ML Algorithms","Deep Learning","Natural Language Processing","Computer Vision"]}
          dotColor="#c084fc"
          index={3}
        />
      </div>
    </div>
  );
}

// ---- hero -----------------------------------------------------------------

const heroTextVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const chips = [
    { icon: <Leaf className="h-4 w-4 text-emerald-300 " />, label: "MERN" },
    { icon: <Brain className="h-4 w-4 text-violet-500" />, label: "AI / ML" },
    { icon: <Sparkles className="h-4 w-4 text-purple-500" />, label: "GEN-AI" },
    { icon: <Code2 className="h-4 w-4 text-slate-100" />, label: "APIs" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05050a] px-6 py-10 lg:px-16">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 translate-y-1/3 rounded-full bg-blue-600/10 blur-3xl"
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-3xl"
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* left: copy */}
        <motion.div
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-[23px] font-semibold tracking-wide text-violet-500"
          >
            &nbsp;•&nbsp;FULL-STACK DEVELOPER &nbsp;•&nbsp; AI/ML ENGINEER
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-5xl font-bold leading-[1.05] text-white sm:text-6xl"
          >
            I build
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(139,92,246,0.35)]">
              intelligent
            </span>
            <br />
            digital
            <br />
            experiences
            <span className="text-violet-600">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-300"
          >
             Applications, MERN-based solutions, machine learning systems, and Gen-AI solutions
            engineered from idea to deployment.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 30px rgba(139,92,246,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-2 rounded-lg bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-600"
            >
              <a href="#projects" className="text-white">
                Explore My Work
              </a>
              <ArrowUpRight className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.04,
                borderColor: "rgba(148,163,184,0.8)",
                boxShadow: "0 0 20px rgba(148,163,184,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500"
            >
              <a href="#contact" className="text-slate-200">
                Let&apos;s Connect
              </a>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            {chips.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 0 16px rgba(148,163,184,0.2)",
                  borderColor: "rgba(148,163,184,0.5)",
                }}
                className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-2 text-[13px] font-medium text-slate-300"
              >
                {c.icon}
                {c.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* right: architecture diagram */}
        <div className="flex justify-center lg:justify-start lg:pl-10">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}
export default Hero;
