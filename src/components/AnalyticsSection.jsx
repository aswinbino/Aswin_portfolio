import { FaGithub, FaTerminal, FaCode } from "react-icons/fa"
import { Activity, Clock, Flame, GitCommit, Users, BookOpen } from "lucide-react"

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="relative py-24 border-b border-border/20 overflow-hidden select-none">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase">
            <Activity className="w-3.5 h-3.5" />
            ENGINEERING METRICS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-shiny">
            Open Source & Development Analytics
          </h2>
        </div>

        {/* 2 Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* GitHub Ecosystem Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white border border-zinc-800 shadow-2xl flex flex-col justify-between gap-8 relative overflow-hidden group">
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                  <FaGithub size={14} /> GITHUB ECOSYSTEM
                </span>
                <span className="text-xs font-mono text-zinc-400">@aswinbino</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
                Creative Engineering, now Open Source.
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                A verified dashboard of technical milestones, total contributions, and real-time project activity.
              </p>
            </div>

            {/* GitHub Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-zinc-800 pt-6 relative z-10">
              <div className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-black text-emerald-400">1,211</span>
                <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                  <GitCommit size={10} /> CONTRIBUTIONS
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-black text-white">52</span>
                <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                  <Users size={10} /> FOLLOWERS
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-black text-sky-400">46</span>
                <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                  <BookOpen size={10} /> REPOSITORIES
                </span>
              </div>
            </div>

            <a
              href="https://github.com/aswinbino/Aswin_portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors relative z-10 flex items-center justify-center gap-2"
            >
              Explore GitHub Repositories ↗
            </a>
          </div>

          {/* Kaggle & WakaTime Intelligence Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white border border-zinc-800 shadow-2xl flex flex-col justify-between gap-8 relative overflow-hidden group">
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 flex items-center gap-1.5">
                  <Clock size={12} /> WAKATIME & KAGGLE
                </span>
                <span className="text-xs font-mono text-zinc-400">LIVE SYNC</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-sky-400 transition-colors">
                Code Runtime Activity & Velocity.
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Automated telemetry tracking coding hours, active languages, and daily development velocity.
              </p>
            </div>

            {/* Runtime Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-zinc-800 pt-6 relative z-10">
              <div className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-black text-sky-400">419 hrs</span>
                <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">TOTAL LOGGED</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-black text-white">4.8 hrs</span>
                <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">DAILY AVG</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-black text-amber-400">98.4%</span>
                <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">UPTIME</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400 relative z-10">
              <span>Top Stack: <strong className="text-white">React, Python, Node, Tailwind</strong></span>
              <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
