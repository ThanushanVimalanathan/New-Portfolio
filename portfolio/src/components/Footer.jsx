import React from "react";
import { assets } from "../assets/assets";


const iconProps = { className: "h-4 w-4", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24" };

const GithubIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...iconProps} {...props}>
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
    <path d="M10 9v12M10 13.5c0-2.5 2-4.5 4.5-4.5S19 11 19 13.5V21h-4v-6.5a1.5 1.5 0 0 0-3 0V21h-4" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.5 1 4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.7 4.6a4 4 0 0 0 1.2 5.3c-.6 0-1.3-.2-1.8-.5v.1a4 4 0 0 0 3.2 3.9c-.6.2-1.2.2-1.8.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 17.8a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6.1 11.3-11.3v-.5c.8-.6 1.4-1.3 1.9-2.1" />
  </svg>
);

const MailIcon = (props) => (
  <svg {...iconProps} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6 8.5 7 8.5-7" />
  </svg>
);

const MapPinIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M20 10.5c0 5.5-8 11.5-8 11.5S4 16 4 10.5a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10.5" r="2.5" />
  </svg>
);

const ArrowUpRightIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const SendIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="m22 2-9.5 20-3.5-8-8-3.5Z" />
    <path d="M22 2 10.5 13.5" />
  </svg>
);

const ArrowUpIcon = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

// Update these to match your real data / router links
const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const BUILD_LINKS = [
  { label: "Full-Stack Engineering", href: "#projects" },
  { label: "AI / Machine Learning", href: "#projects" },
  { label: "Generative AI", href: "#projects" },
  { label: "All Projects", href: "#projects" },
];

const SOCIALS = [
  { label: "GitHub", icon: GithubIcon, href: "https://github.com/ThanushanVimalanathan" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com/in/ThanushanVimalanathan" },
  { label: "Twitter", icon: TwitterIcon, href: "https://twitter.com/ThanushanVimalanathan" },
  { label: "Email", icon: MailIcon, href: "mailto:thanushaan69@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#05050a] pt-2  text-slate-400" id="contact">
      {/* ambient glow, matches hero background treatment */}
      <div className="pointer-events-none absolute -top-10 left-1/4 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-blue-500/15 blur-[120px]" />

      <div className="relative  mx-auto max-w-6xl px-6">
        
        {/* ---------- Link columns ---------- */}
        <div className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-4 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-5">
            <a href="#" className="flex items-center gap-2 text-white">
              
              <img src={assets.logo} alt="Logo" className="h-20 w-auto" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Full-stack engineer building MERN applications, machine learning
              systems, and Gen-AI solutions — engineered from idea to
              deployment.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-violet-500/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium text-white">Navigate</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What I build */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-medium text-white">What I build</h3>
            <ul className="mt-4 space-y-3">
              {BUILD_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-medium text-white">Availability</h3>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-300">
                Open to opportunities
              </span>
            </div>
            <a
              href="/resume.pdf"
              className="mt-4 flex items-center gap-1 text-sm text-slate-400 transition hover:text-white"
            >
              Download resume
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} Thanushan. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with <span className="text-rose-400">♥</span> using React &amp; Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-violet-500/40 hover:text-white"
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
