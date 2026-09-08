
import React from "react";
import {
  User,
  MapPin,
  GraduationCap,
  CircleCheck,
  ArrowRight,
  Brain,
  Workflow,
  Bot,
  ScanSearch,
  Cloud,
  Mail,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { assets } from "../assets/assets";

// -----------------------------------------------------------------------------
// GITHUB ACTIVITY DATA
// -----------------------------------------------------------------------------

const activity = Array.from({ length: 18 }, (_, index) => {
  const levels = [0, 1, 1, 2, 2, 3, 3, 4];

  return {
    id: index,
    level: levels[Math.floor(Math.random() * levels.length)],
  };
});

// -----------------------------------------------------------------------------
// EXPLORING DATA
// -----------------------------------------------------------------------------

const exploring = [
  {
    icon: Brain,
    title: "Large Language Models",
    color: "text-cyan-400",
  },
  {
    icon: Workflow,
    title: "Retrieval Augmented Generation",
    color: "text-violet-400",
  },
  {
    icon: Bot,
    title: "AI Agents & Tools",
    color: "text-purple-400",
  },
  {
    icon: ScanSearch,
    title: "Computer Vision",
    color: "text-violet-400",
  },
  {
    icon: Cloud,
    title: "Cloud & MLOps",
    color: "text-purple-400",
  },
];

// -----------------------------------------------------------------------------
// ACTIVITY BOX
// -----------------------------------------------------------------------------

function ActivityBox({ level }) {
  const colors = {
    0: "bg-green-950/60",
    1: "bg-green-900/70",
    2: "bg-green-700/70",
    3: "bg-green-500/80",
    4: "bg-green-400",
  };

  return (
    <div
      className={`
        h-[10px]
        w-[10px]
        rounded-[2px]
        ${colors[level]}
        transition-all
        duration-200
        hover:scale-125
        hover:ring-1
        hover:ring-green-300/60
      `}
    />
  );
}

// -----------------------------------------------------------------------------
// EXPLORING ITEM
// -----------------------------------------------------------------------------

function ExploringItem({ item }) {
  const Icon = item.icon;

  return (
    <div
      className=" group flex items-center gap-4 rounded-lg border  border-slate-800  bg-slate-800 px-4 py-3 transition-all duration-300 hover:-translate-y-[2px]  hover:border-violet-500/40  hover:bg-violet-950/20 hover:shadow-lg hover:shadow-violet-500/5">
      <Icon
        className={`
          h-6
          w-6
          shrink-0
          ${item.color}
          transition-transform
          duration-300
          group-hover:scale-110
        `}
        strokeWidth={1.5}
      />

      <span
        className="
          text-sm
          text-slate-300
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {item.title}
      </span>
    </div>
  );
}

// -----------------------------------------------------------------------------
// ABOUT SECTION
// -----------------------------------------------------------------------------

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#030712]
        px-6
        py-16
        lg:px-10
        lg:py-20
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[20%]
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/5
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          bottom-0
          h-[400px]
          w-[450px]
          rounded-full
          bg-violet-600/5
          blur-[140px]
        "
      />

      {/* Main container */}
      <div className="relative  mx-auto max-w-[1480px] ">

        {/* Top divider */}
        <div className="mb-5 h-px w-full bg-slate-800/10" />

        {/* ----------------------------------------------------------------- */}
        {/* TOP four COLUMNS */}
        {/* ----------------------------------------------------------------- */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-[1.25fr_1fr_1.1fr_1.1fr]
            lg:gap-5
          "
        >

          {/* =============================================================== */}
          {/* ABOUT ME */}
          {/* =============================================================== */}

          <div className="relative">

            <p
              className="
                text-[23px]
                font-semibold
                tracking-wide
                text-violet-500
              "
            >
              ABOUT ME
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                text-white
                lg:text-[29px]
              "
            >
              Engineering + AI + Product
            </h2>

            <p
              className="
                mt-3
                max-w-[430px]
                text-sm
                leading-[1.7]
                text-slate-400
              "
            >
              I'm a software engineer focused on building full-stack
              applications and intelligent systems. My work sits at the
              intersection of web engineering, machine learning and
              generative AI.
            </p>

            {/* Profile information */}
            <div className="mt-5 space-y-3">

              <div className="flex items-center gap-3">
                <User
                  className="h-[17px] w-[17px] text-blue-400"
                  strokeWidth={1.7}
                />

                <span className="text-sm text-slate-400">
                  Vimalanathan Thanushan
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  className="h-[17px] w-[17px] text-blue-400"
                  strokeWidth={1.7}
                />

                <span className="text-sm text-slate-400">
                  Colombo, Sri Lanka
                </span>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap
                  className="h-[17px] w-[17px] text-blue-400"
                  strokeWidth={1.7}
                />

                <span className="text-sm text-slate-400">
                  BSc (Hons) Information Technology
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CircleCheck
                  className="h-[17px] w-[17px] text-blue-400"
                  strokeWidth={1.7}
                />

                <span className="text-sm text-slate-400">
                  Open to opportunities
                </span>
              </div>

            </div>

            {/* Button */}
            <a
              href="https://www.linkedin.com/in/thanushanvimalanathan"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-4
                rounded-lg
                border
                border-violet-500/40
                bg-violet-500/5
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:border-violet-400
                hover:bg-violet-500/10
                hover:shadow-lg
                hover:shadow-violet-500/10
              "
            >
              Know More About Me

              <ArrowRight
                className="
                  h-4
                  w-4
                  text-violet-400
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>

          {/* =============================================================== */}
          {/* PROFILE IMAGE */}
          {/* =============================================================== */}

          <div
            className="
              relative
              flex
              min-h-[330px]
              items-center
              justify-center
            "
          >

            {/* Orbit */}
            <div
              className="
                absolute
                h-[350px]
                w-[300px]
                rotate-[35deg]
                rounded-[50%]
                border
                border-violet-500/50
              "
            />

            <div
              className="
                absolute
                h-[350px]
                w-[300px]
                -rotate-[35deg]
                rounded-[50%]
                border
                border-blue-500/30
              "
            />

            {/* Orbit dots */}
            <div
              className="
                absolute
                left-[8%]
                top-[53%]
                h-3
                w-3
                rounded-full
                bg-blue-400
                shadow-[0_0_15px_rgba(59,130,246,0.8)]
              "
            />

            <div
              className="
                absolute
                right-[13%]
                top-[26%]
                h-3
                w-3
                rounded-full
                bg-cyan-400
                shadow-[0_0_15px_rgba(34,211,238,0.8)]
              "
            />

            {/* Profile card */}
            <div
              className="
                relative
                z-10
                h-[350px]
                w-[280px]
                overflow-hidden
                rounded-xl
                border
                border-violet-500/30
              "
            >

              {/* Profile Image */}
              <img
                src={assets.profile_pic}
                alt="Vimalanathan Thanushan"
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-[280px]
                  w-full
                  object-cover
                  object-top
                "
              />

              {/* Image gradient */}


              {/* Bottom info */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  flex
                  items-center
                  gap-3
                  border-t
                  border-slate-800
                  bg-slate-950/90
                  px-4
                  py-3
                  backdrop-blur-md
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-violet-500/10
                    text-lg
                    font-semibold
                    text-violet-300
                  "
                >
                  4+
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Years Learning
                  </p>

                  <p className="text-xs text-slate-400">
                    & Building
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* =============================================================== */}
          {/* GITHUB ACTIVITY */}
          {/* =============================================================== */}

          <div
            className="
              border-l
              border-slate-800/70
              pl-0
              lg:pl-8
            "
          >

            <p
              className="
                text-[13px]
                font-semibold
                tracking-wide
                text-violet-400
              "
            >
              GITHUB ACTIVITY
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              Building in Public
            </h2>

            {/* Statistics */}
            <div className="mt-5 grid grid-cols-3 gap-5">

              <div>
                <p className="text-3xl font-semibold text-blue-500">
                  40+
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Repositories
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-blue-500">
                  10+
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Contributions
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-violet-500">
                  45+
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Projects
                </p>
              </div>

            </div>

            {/* Contribution graph */}
            <div className="mt-7 overflow-hidden">

              <div
                className="
                  mb-2
                  grid
                  grid-cols-8
                  text-center
                  text-[10px]
                  text-slate-500
                "
              >
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
              </div>

              <div className="flex gap-1">

                {/* Days */}
                <div
                  className="
                    flex
                    w-7
                    flex-col
                    justify-between
                    py-[1px]
                    text-[9px]
                    text-slate-500
                  "
                >
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* Grid */}
                <div
                  className="
                    grid
                    flex-1
                    grid-cols-18
                    gap-[10px]
                  "
                >

                  {activity.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-[3px]"
                    >
                      {[0, 1, 2, 3, 4].map((day) => (
                        <ActivityBox
                          key={day}
                          level={
                            (item.level + day) % 5 === 0
                              ? 0
                              : item.level
                          }
                        />
                      ))}
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* GitHub button */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="
                group
                mt-22
                inline-flex
                items-center
                gap-3
                rounded-lg
                border
                border-violet-500/50
                bg-violet-500/5
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:border-violet-400
                hover:bg-violet-500/10
                hover:shadow-lg
                hover:shadow-violet-500/10
              "
            >

              <FaGithub className="h-5 w-5" />

              View GitHub Profile

              <ArrowRight
                className="
                  h-4
                  w-4
                  text-violet-400
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </a>

          </div>

          {/* =============================================================== */}
          {/* CURRENTLY EXPLORING */}
          {/* =============================================================== */}

          <div
            className="
              lg:col-start-3
              lg:row-start-1
              border-l
              border-slate-800/70
              pl-0
              lg:pl-8
            "
          >

            <p
              className="
                text-[13px]
                font-semibold
                tracking-wide
                text-violet-400
              "
            >
              CURRENTLY EXPLORING
            </p>

            <div className="mt-5 space-y-2">

              {exploring.map((item) => (
                <ExploringItem
                  key={item.title}
                  item={item}
                />
              ))}

            </div>

          </div>

        </div>

        {/* ----------------------------------------------------------------- */}
        {/* CONTACT CTA */}
        {/* ----------------------------------------------------------------- */}

        <div
          className="
            relative
            mt-15
            min-h-[205px]
            overflow-hidden
            rounded-2xl
            border
            border-blue-900/40
            bg-gradient-to-r
            from-[#061010]
            via-[#0e0f35]
            to-[#050915]
          "
        >

          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-[25%]
              top-0
              h-full
              w-[45%]
              bg-violet-600/10
              blur-[90px]
            "
          />

          {/* Paper plane */}
          <div className=" absolute left-5  hidden lg:block">
            <img
              src={assets.neon_rocker}
              alt="Paper Plane"
              className="h-[200px] w-auto mt-auto "
            />
          </div>

          {/* CTA content */}
          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-center
              px-7
              py-8
              lg:ml-[17%]
              lg:px-0
            "
          >

            <p
              className="
                text-[13px]
                font-semibold
                tracking-wide
                text-violet-400
              "
            >
              LET'S BUILD SOMETHING INTELLIGENT
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-tight
                text-white
                lg:text-[34px]
              "
            >
              Have an idea or opportunity?
            </h2>

            <p
              className="
                mt-3
                max-w-[450px]
                text-sm
                leading-relaxed
                text-slate-400
              "
            >
              I'm always interested in building impactful products
              and solving interesting problems.
            </p>

          </div>

          {/* Contact details */}
          <div
            className="
              relative
              z-10
              mt-0
              flex
              flex-col
              gap-4
              px-7
              pb-8
              lg:absolute
              lg:right-[25%]
              lg:top-7
              lg:px-0
              lg:pb-0
            "
          >

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-4
                rounded-lg
                bg-violet-600
                px-7
                py-4
                text-base
                font-medium
                text-white
                shadow-lg
                shadow-violet-600/20
                transition-all
                duration-300
                hover:bg-violet-500
                hover:shadow-violet-500/30
              "
            >
              Get In Touch

              <ArrowRight className="h-5 w-5" />
            </a>

            <div className="mt-1 space-y-3">

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-violet-400" />

                <span className="text-sm text-slate-300">
                  thanushaan69@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-violet-400" />

                <span className="text-sm text-slate-300">
                  Colombo, Sri Lanka
                </span>
              </div>

            </div>

          </div>

          {/* Globe decoration */}
          <div className=" pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
            <img src={assets.neon_world} alt="Globe" className="h-[200px] w-auto" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

