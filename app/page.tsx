"use client";

import { useEffect } from "react";

const NEW_APP_URL = "https://dgen-books-new.vercel.app/";

/* ─── Premium SVG Icons ─────────────────────────────────────── */

function IconExternalLink({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function IconDownload({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

function IconTrash({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
    </svg>
  );
}

function IconPowerOff({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
      <line x1="12" y1="2" x2="12" y2="12"/>
    </svg>
  );
}

function IconChevronRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

/* ─── App Icon (green brand style) ─────────────────────────── */
function AppIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="brand" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C4E030"/>
          <stop offset="50%"  stopColor="#4CAF50"/>
          <stop offset="100%" stopColor="#1A6B30"/>
        </linearGradient>
        <linearGradient id="badge-red" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FF6B6B"/>
          <stop offset="100%" stopColor="#C0392B"/>
        </linearGradient>
      </defs>
      {/* Rounded square app icon */}
      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#brand)"/>
      {/* Open-book silhouette */}
      <path d="M20 22 C20 20 22 19 24 19 L32 19 L32 45 L24 45 C22 45 20 44 20 42 Z"
        fill="white" opacity="0.92"/>
      <path d="M44 22 C44 20 42 19 40 19 L32 19 L32 45 L40 45 C42 45 44 44 44 42 Z"
        fill="white" opacity="0.68"/>
      <line x1="32" y1="19" x2="32" y2="45" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5"/>
      <path d="M22 27 L30 27" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 31 L30 31" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 35 L28 35" stroke="rgba(0,0,0,0.10)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Red "X" badge */}
      <circle cx="58" cy="22" r="13" fill="url(#badge-red)" stroke="white" strokeWidth="2.5"/>
      <line x1="53" y1="17" x2="63" y2="27" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="63" y1="17" x2="53" y2="27" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ─── Decorative background blobs ───────────────────────────── */
function BackgroundDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* top-right green blob */}
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full animate-pulse-slow"
        style={{ background: "radial-gradient(circle, rgba(76,175,80,0.12) 0%, transparent 70%)" }}/>
      {/* bottom-left blob */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full animate-pulse-slow delay-500"
        style={{ background: "radial-gradient(circle, rgba(196,224,48,0.10) 0%, transparent 70%)" }}/>
      {/* center faint circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(26,107,48,0.04) 0%, transparent 70%)" }}/>
      {/* subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #4CAF50 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}/>
    </div>
  );
}

/* ─── Step Card ─────────────────────────────────────────────── */
function StepCard({
  step,
  icon,
  label,
  sublabel,
  accent,
}: {
  step: string;
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  accent: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl p-4 sm:p-5 text-center transition-transform hover:-translate-y-0.5 duration-200"
      style={{ background: "#ffffff", border: `1px solid ${accent}22`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: `${accent}18`, color: accent }}>
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase mb-0.5" style={{ color: accent }}>
          Step {step}
        </p>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-xs text-gray-400 mt-0.5 leading-snug">{sublabel}</p>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function Home() {
  /* subtle parallax on pointer move — desktop only */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) return;
    const card = document.getElementById("main-card");
    const onMove = (e: MouseEvent) => {
      if (!card) return;
      const rx = (e.clientX / window.innerWidth - 0.5) * 8;
      const ry = (e.clientY / window.innerHeight - 0.5) * 5;
      card.style.transform = `perspective(900px) rotateY(${rx}deg) rotateX(${-ry}deg)`;
    };
    const onLeave = () => {
      if (card) card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 relative"
      style={{ background: "linear-gradient(145deg, #F3FAF0 0%, #FAFFF8 40%, #F0F8EC 100%)" }}>

      <BackgroundDecor />

      {/* ── Main card ── */}
      <div id="main-card"
        className="relative z-10 w-full max-w-md opacity-0-init animate-card-in"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.18s ease-out" }}>

        {/* Top brand stripe */}
        <div className="h-1 w-full rounded-t-3xl"
          style={{ background: "linear-gradient(90deg, #C4E030, #4CAF50, #1A6B30)" }}/>

        {/* Card body */}
        <div className="rounded-b-3xl rounded-tr-3xl bg-white px-6 py-8 sm:px-8 sm:py-10 flex flex-col items-center gap-7"
          style={{ boxShadow: "0 8px 40px rgba(26,107,48,0.10), 0 2px 12px rgba(0,0,0,0.06)", border: "1px solid rgba(76,175,80,0.18)", borderTop: "none" }}>

          {/* ── Icon ── */}
          <div className="relative opacity-0-init animate-scale-in flex items-center justify-center">
            <div className="absolute w-32 h-32 rounded-full border-2 border-dashed animate-spin-slow"
              style={{ borderColor: "rgba(76,175,80,0.25)" }}/>
            <div className="absolute w-24 h-24 rounded-full animate-pulse-slow"
              style={{ background: "radial-gradient(circle, rgba(76,175,80,0.12) 0%, transparent 70%)" }}/>
            <div className="animate-float">
              <AppIcon />
            </div>
          </div>

          {/* ── Badge ── */}
          <div className="opacity-0-init animate-badge-pop delay-200">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.25)", color: "#C0392B" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"/>
              App Discontinued
            </span>
          </div>

          {/* ── Headline ── */}
          <div className="opacity-0-init animate-fade-in-up delay-300 text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
              <span className="brand-shimmer">Dgen-Books</span>
              <br/>
              <span className="text-gray-800">has been </span>
              <span style={{ color: "#C0392B" }}>shut&nbsp;down</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-normal max-w-xs mx-auto leading-relaxed">
              This PWA is no longer active.
            </p>
          </div>

          {/* ── Divider ── */}
          <div className="opacity-0-init animate-fade-in-up delay-400 w-full">
            <div className="h-px w-full rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, rgba(76,175,80,0.25), transparent)" }}/>
          </div>

          {/* ── Body copy ── */}
          <div className="opacity-0-init animate-fade-in-up delay-500 text-center space-y-2 text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm">
            <p>
              We&apos;ve moved to a brand-new, faster experience. Click or tap the button below to open the
              new site and&nbsp;<span className="font-semibold text-green-700">download the updated app</span>.
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Once installed, you can safely&nbsp;
              <span className="font-semibold text-red-600">uninstall this app forever</span>.
            </p>
          </div>

          {/* ── Steps ── */}
          <div className="opacity-0-init animate-fade-in-up delay-600 grid grid-cols-3 gap-3 w-full">
            <StepCard step="1" icon={<IconExternalLink size={20}/>} label="Open new site"
              sublabel="In Chrome browser" accent="#4CAF50"/>
            <StepCard step="2" icon={<IconDownload size={20}/>} label="Install app"
              sublabel="Add to Home Screen" accent="#2E7D32"/>
            <StepCard step="3" icon={<IconTrash size={20}/>} label="Remove old"
              sublabel="Uninstall this app" accent="#C0392B"/>
          </div>

          {/* ── CTA Button ── */}
          <div className="opacity-0-init animate-fade-in-up delay-700 w-full">
            <a href={NEW_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 w-full rounded-2xl px-6 py-4 text-white font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] animate-btn-glow"
              style={{ background: "linear-gradient(135deg, #8DC63F 0%, #4CAF50 45%, #1A6B30 100%)" }}>
              {/* shine sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}/>
              <span className="relative z-10 flex-shrink-0">
                <IconExternalLink size={22}/>
              </span>
              <span className="relative z-10">Open New Dgen-Books App</span>
              <span className="relative z-10 flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-200">
                <IconChevronRight size={18}/>
              </span>
            </a>
            <p className="mt-2.5 text-xs text-gray-400 text-center">
              Opens in Chrome &bull; Free &bull; No account required
            </p>
          </div>

          {/* ── Progress bar ── */}
          <div className="opacity-0-init animate-fade-in-up delay-900 w-full">
            <div className="h-1 w-full rounded-full overflow-hidden bg-gray-100">
              <div className="progress-bar-fill h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #C4E030, #4CAF50, #1A6B30)" }}/>
            </div>
            <p className="mt-2 text-[10px] tracking-widest uppercase text-gray-400 text-center font-medium">
              Migration complete — ready to move on
            </p>
          </div>

        </div>

        {/* Card drop-shadow glow */}
        <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-20 animate-pulse-slow"
          style={{ background: "linear-gradient(135deg, rgba(196,224,48,0.6), rgba(26,107,48,0.6))" }}/>
      </div>
    </div>
  );
}

