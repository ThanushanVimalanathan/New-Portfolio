
import React from "react";

import {
  Layers,
  Brain,
  Box,
  CheckCircle2,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";


// -----------------------------------------------------------------------------
// SKILL DATA
// -----------------------------------------------------------------------------

const SKILLS = [
  {
    number: "01",
    numberColor: "text-emerald-400",

    icon: (
      <Layers
        className="h-full w-full"
        strokeWidth={1.2}
      />
    ),

    iconColor: "text-emerald-400",

    glow:
      "drop-shadow-[0_0_18px_rgba(52,211,153,0.45)]",

    title: "Full-Stack Engineering",

    description:
      "Scalable web applications, RESTful APIs and modern frontend experiences.",

    items: [
      "MERN Stack",
      "REST APIs",
      "Authentication",
      "Database Design",
      "Deployment",
      "Cloud Integrations",
    ],
  },

  {
    number: "02",
    numberColor: "text-sky-400",

    icon: (
      <Brain
        className="h-full w-full"
        strokeWidth={1.2}
      />
    ),

    iconColor: "text-sky-400",

    glow:
      "drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]",

    title: "AI / Machine Learning",

    description:
      "Building machine learning and computer vision systems for real-world problems.",

    items: [
      "Computer Vision",
      "Deep Learning",
      "ML Models",
      "Data Analysis",
      "Model Training",
      "Deployment",
    ],
  },

  {
    number: "03",
    numberColor: "text-violet-400",

    icon: (
      <Box
        className="h-full w-full"
        strokeWidth={1.2}
      />
    ),

    iconColor: "text-violet-400",

    glow:
      "drop-shadow-[0_0_18px_rgba(167,139,250,0.5)]",

    title: "Generative AI",

    description:
      "LLM-powered applications, RAG pipelines and intelligent data retrieval systems.",

    items: [
      "LLMs & Prompts",
      "RAG Pipelines",
      "Embeddings",
      "LlamaIndex",
      "AI Agents",
      "Fine-tuning",
    ],
  },
];


// -----------------------------------------------------------------------------
// TECHNOLOGY STACK
// -----------------------------------------------------------------------------

const STACK = [
  {
    icon: SiReact,
    label: "React",
    color: "#61DAFB",
  },

  {
    icon: SiNextdotjs,
    label: "Next.js",
    color: "#FFFFFF",
  },

  {
    icon: SiNodedotjs,
    label: "Node.js",
    color: "#8CC84B",
  },

  {
    icon: SiExpress,
    label: "Express",
    color: "#FFFFFF",
  },

  {
    icon: SiMongodb,
    label: "MongoDB",
    color: "#47A248",
  },

  {
    icon: SiPython,
    label: "Python",
    color: "#3776AB",
  },

  {
    icon: SiFastapi,
    label: "FastAPI",
    color: "#009688",
  },

  {
    icon: SiPytorch,
    label: "PyTorch",
    color: "#EE4C2C",
  },

  {
    icon: SiTensorflow,
    label: "TensorFlow",
    color: "#FF6F00",
  },

  {
    icon: SiTailwindcss,
    label: "Tailwind",
    color: "#38BDF8",
  },

  {
    icon: SiDocker,
    label: "Docker",
    color: "#2496ED",
  },

  {
    icon: FaAws,
    label: "AWS",
    color: "#FF9900",
  },

  {
    icon: SiGit,
    label: "Git",
    color: "#F05032",
  },

  {
    icon: SiGithub,
    label: "GitHub",
    color: "#FFFFFF",
  },
];


// -----------------------------------------------------------------------------
// SKILL CARD
// -----------------------------------------------------------------------------

function SkillCard({ skill }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/40
        p-7
        m-auto
        backdrop-blur-sm

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:border-slate-700
        hover:bg-slate-900/60
        hover:shadow-2xl
      "
    >

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-blue-500/5
          blur-3xl

          opacity-0
          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Large background icon */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-6
          -top-2
          h-28
          w-28
          opacity-90
          transition-all
          duration-500

          group-hover:scale-110
          group-hover:opacity-100

          ${skill.iconColor}
          ${skill.glow}
        `}
      >
        {skill.icon}
      </div>


      {/* Number */}
      <span
        className={`
          text-sm
          font-bold
          ${skill.numberColor}
        `}
      >
        {skill.number}
      </span>


      {/* Title */}
      <h3
        className="
          mt-2
          text-xl
          font-semibold
          text-white
          transition-colors
          duration-300

          group-hover:text-blue-100
        "
      >
        {skill.title}
      </h3>


      {/* Description */}
      <p
        className="
          mt-2
          max-w-[85%]
          text-sm
          leading-relaxed
          text-slate-400
        "
      >
        {skill.description}
      </p>


      {/* Skills */}
      <ul
        className="
          mt-6
          grid
          grid-cols-2
          gap-x-4
          gap-y-2.5
        "
      >
        {skill.items.map((item) => (
          <li
            key={item}
            className="
              flex
              items-center
              gap-2
              text-[13px]
              text-slate-300
              transition-colors
              duration-300

              group-hover:text-slate-200
            "
          >
            <CheckCircle2
              className="
                h-3.5
                w-3.5
                shrink-0
                text-emerald-400
              "
            />

            {item}
          </li>
        ))}
      </ul>

    </div>
  );
}


// -----------------------------------------------------------------------------
// TECHNOLOGY STACK ICON
// -----------------------------------------------------------------------------

function StackIcon({
  icon: Icon,
  label,
  color,
}) {
  return (
    <div
      className="
        group
        flex
        flex-col
        items-center
        gap-2.5
      "
    >

      {/* Icon container */}
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-xl
          border
          border-slate-800
          bg-slate-900/60
          backdrop-blur-sm

          transition-all
          duration-300
          ease-out

          hover:-translate-y-1
          hover:scale-105
          hover:border-blue-500/50
          hover:bg-blue-950/40
          hover:shadow-lg
          hover:shadow-blue-500/10
        "
      >

        <Icon
          className="
            h-7
            w-7

            transition-all
            duration-300

            group-hover:scale-110
          "
          style={{
            color,
          }}
        />

      </div>


      {/* Label */}
      <span
        className="
          text-xs
          text-slate-400

          transition-colors
          duration-300

          group-hover:text-white
        "
      >
        {label}
      </span>

    </div>
  );
}


// -----------------------------------------------------------------------------
// TECH STACK SECTION
// -----------------------------------------------------------------------------

const TechStack = () => {
  return (
    <section
      id="skills"
      className="
        w-full
        bg-[#05050a]
        px-6
        py-16
        lg:px-16
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
        "
      >

        {/* Section heading */}
        <p
          className="
            text-[23px]
            font-semibold
            tracking-wide
            text-violet-500
          "
        >
          WHAT I BUILD
        </p>


        {/* Skill cards */}
        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-6
            md:grid-cols-3
          "
        >
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.number}
              skill={skill}
            />
          ))}
        </div>


        {/* Technology stack */}
        <div
          className="
            mt-16
            border-t
            border-slate-800
            pt-10
          "
        >

          <p
            className="
              text-[23px]
              font-semibold
              tracking-wide
              text-violet-500
            "
          >
            TECHNOLOGY STACK
          </p>


          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-between
              gap-x-6
              gap-y-8
            "
          >
            {STACK.map((tech) => (
              <StackIcon
                key={tech.label}
                {...tech}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};


export default TechStack;

