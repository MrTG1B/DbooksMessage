"use client";

import { useEffect, useRef } from "react";

const NEW_APP_URL = "https://dgen-books-new.vercel.app/";

function FloatingParticle({
  style,
}: {
  style: React.CSSProperties;
}) {
  return (
    <div
      className="absolute rounded-full particle pointer-events-none"
      style={style}
    />
  );
}

export default function Home() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  /* subtle parallax on mouse move */
  useEffect(() => {
    const hero = document.getElementById("hero-content");
    const handleMove = (e: MouseEvent) => {
      if (!hero) return;
      const rx = (e.clientX / window.innerWidth - 0.5) * 12;
      const ry = (e.clientY / window.innerHeight - 0.5) * 8;
      hero.style.transform = `perspective(800px) rotateY(${rx}deg) rotateX(${-ry}deg)`;
    };
    const handleLeave = () => {
      if (hero) hero.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const particles = [
    { width: 6,  height: 6,  top: "12%", left: "8%",  background: "rgba(239,68,68,0.6)",   "--duration": "7s",  "--delay": "0s"   },
    { width: 4,  height: 4,  top: "30%", left: "92%", background: "rgba(99,102,241,0.7)",  "--duration": "9s",  "--delay": "1s"   },
    { width: 8,  height: 8,  top: "65%", left: "5%",  background: "rgba(167,139,250,0.5)", "--duration": "8s",  "--delay": "2s"   },
    { width: 5,  height: 5,  top: "80%", left: "85%", background: "rgba(239,68,68,0.4)",   "--duration": "6s",  "--delay": "0.5s" },
    { width: 3,  height: 3,  top: "20%", left: "75%", background: "rgba(248,113,113,0.7)", "--duration": "10s", "--delay": "1.5s" },
    { width: 7,  height: 7,  top: "50%", left: "95%", background: "rgba(129,140,248,0.5)", "--duration": "7s",  "--delay": "3s"   },
    { width: 4,  height: 4,  top: "88%", left: "45%", background: "rgba(167,139,250,0.6)", "--duration": "11s", "--delay": "2.5s" },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #1a0a2e 0%, #04040a 55%, #0a0a10 100%)" }}>

      {/* ── ambient background blobs ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full animate-pulse-slow"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] rounded-full animate-pulse-slow delay-500"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 70%)" }} />

        {/* grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      {/* ── floating particles ── */}
      {particles.map((p, i) => (
        <FloatingParticle
          key={i}
          style={{
            width: p.width,
            height: p.height,
            top: p.top,
            left: p.left,
            background: p.background,
            ["--duration" as string]: p["--duration"],
            ["--delay" as string]: p["--delay"],
          }}
        />
      ))}

      {/* ── main card ── */}
      <div id="hero-content"
        className="relative z-10 max-w-2xl w-full mx-4 transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}>

        {/* card background */}
        <div className="relative rounded-3xl overflow-hidden animate-border-glow"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(239,68,68,0.3)",
            backdropFilter: "blur(24px)",
          }}>

          {/* top gradient bar */}
          <div className="h-1 w-full"
            style={{ background: "linear-gradient(90deg, #ef4444, #a78bfa, #6366f1)" }} />

          <div className="p-8 md:p-12 flex flex-col items-center text-center gap-8">

            {/* ── icon ── */}
            <div className="opacity-0-init animate-scale-in relative flex items-center justify-center">
              {/* outer spinning ring */}
              <div className="absolute w-28 h-28 rounded-full border-2 border-dashed border-red-500/30 animate-spin-slow" />
              {/* inner glow ring */}
              <div className="absolute w-20 h-20 rounded-full animate-pulse-slow"
                style={{ background: "radial-gradient(circle, rgba(239,68,68,0.2) 0%, transparent 70%)" }} />
              {/* icon circle */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center animate-float"
                style={{ background: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)", boxShadow: "0 0 30px rgba(239,68,68,0.4)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                </svg>
              </div>
            </div>

            {/* ── status badge ── */}
            <div className="opacity-0-init animate-fade-in-down delay-200">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.35)", color: "#fca5a5" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Service Discontinued
              </span>
            </div>

            {/* ── headline ── */}
            <div className="opacity-0-init animate-fade-in-up delay-300 space-y-3">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
                <span className="shimmer-text">DBooks</span>
                <span className="text-white/90"> has </span>
                <br />
                <span className="text-white/90">been </span>
                <span style={{ color: "#ef4444" }}>shut&nbsp;down</span>
              </h1>
              <p className="text-base md:text-lg text-white/50 font-light max-w-md mx-auto leading-relaxed">
                This PWA is no longer active.
              </p>
            </div>

            {/* ── divider ── */}
            <div className="opacity-0-init animate-fade-in-up delay-400 w-full">
              <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent)" }} />
            </div>

            {/* ── body message ── */}
            <div className="opacity-0-init animate-fade-in-up delay-500 text-white/70 text-sm md:text-base leading-relaxed max-w-lg space-y-3">
              <p>
                We&apos;ve moved to a brand-new, faster experience. Click the button below to open the new site and&nbsp;
                <span className="text-violet-300 font-medium">download the updated app</span>.
              </p>
              <p className="text-white/50 text-sm">
                Once you&apos;ve installed the new app, you can safely&nbsp;
                <span className="text-red-400 font-medium">uninstall this one forever</span>.
              </p>
            </div>

            {/* ── steps ── */}
            <div className="opacity-0-init animate-fade-in-up delay-700 grid grid-cols-3 gap-3 w-full">
              {[
                { icon: "↗", label: "Open new site",   color: "#6366f1", step: "1" },
                { icon: "⬇",  label: "Install new app", color: "#a78bfa", step: "2" },
                { icon: "🗑",  label: "Remove old app",  color: "#ef4444", step: "3" },
              ].map(({ icon, label, color, step }) => (
                <div key={step} className="flex flex-col items-center gap-2 rounded-2xl p-4"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
                    style={{ background: `${color}22`, border: `1px solid ${color}55` }}>
                    {icon}
                  </div>
                  <span className="text-xs text-white/60 font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* ── CTA button ── */}
            <div className="opacity-0-init animate-fade-in-up delay-900 w-full">
              <a
                ref={btnRef}
                href={NEW_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 w-full rounded-2xl px-8 py-4 text-white font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-btn-glow"
                style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)" }}>
                {/* shine sweep */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span className="relative z-10">Open New DBooks App</span>

                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="relative z-10 ml-1 group-hover:translate-x-1 transition-transform">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>

              {/* sub-label */}
              <p className="mt-3 text-xs text-white/30 text-center">
                Opens in Chrome &bull; Free &bull; No account required
              </p>
            </div>

            {/* ── progress bar ── */}
            <div className="opacity-0-init animate-fade-in-up delay-1100 w-full">
              <div className="h-0.5 w-full rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.07)" }}>
                <div className="progress-bar-fill h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #6366f1, #a78bfa, #ef4444)" }} />
              </div>
              <p className="mt-2 text-[11px] text-white/20 text-center tracking-wider uppercase">
                Migration complete — ready to move on
              </p>
            </div>

          </div>

          {/* bottom gradient bar */}
          <div className="h-0.5 w-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #a78bfa, transparent)" }} />
        </div>

        {/* card shadow glow */}
        <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-30"
          style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.3), rgba(99,102,241,0.3))" }} />
      </div>
    </div>
  );
}

