"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function PresentationPage1() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            CRASH DATA PRESENTATION
          </h1>
          <Link href="/presentation/page2">
            <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 hover:from-cyan-500 hover:to-blue-500 border border-cyan-400/50 hover:border-cyan-300 rounded-lg text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </nav>

      {/* Section 1: Introduction & Problem Context */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full">
              <span className="text-cyan-300 text-sm font-semibold">INTRODUCTION & PROBLEM CONTEXT</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Road Safety Crisis in
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> India</span>
            </h2>

            <div className="space-y-4 text-neutral-300">
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <p className="text-lg">Every year, India records over <span className="text-cyan-300 font-semibold">1.5 lakh road fatalities</span>, with highways contributing nearly 37% (MoRTH, 2023).</p>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <p className="text-lg">Gujarat's NH corridors like <span className="text-cyan-300 font-semibold">NH-53 and NH-48</span> are high-risk zones due to increasing vehicular load.</p>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <p className="text-lg">Despite government programs, preventable causes like <span className="text-cyan-300 font-semibold">overspeeding and driver fatigue</span> still dominate.</p>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <p className="text-lg">Analyzing crash data provides <span className="text-cyan-300 font-semibold">data-driven direction</span> for enforcement, infrastructure design, and policy.</p>
              </div>
            </div>

            <p className="text-neutral-500 italic">As per MoRTH Annual Report 2023</p>
          </div>

          {/* Right Image - Highway Scene */}
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 z-10"></div>
            <img 
              src="/indian-highway-nh53-road.jpg"
              alt="Highway road scene"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-2xl"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </section>

      {/* Section 2: Need & Research Gaps */}
      <section className="min-h-screen flex items-center justify-center px-4 relative py-20">
        <div className="absolute top-40 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center mb-16 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-semibold">RESEARCH GAPS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              The <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Missing Pieces</span>
            </h2>
            <p className="text-neutral-400 text-xl max-w-3xl mx-auto">Existing studies lack critical depth in analysis and modern data science approaches</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "📊",
                title: "Limited Spatial Analysis",
                desc: "Existing studies highlight accident counts but lack spatial and causal correlation analysis."
              },
              {
                icon: "🔍",
                title: "Multi-Factor Gaps",
                desc: "Few works compare road features + weather + driver behavior in comprehensive studies."
              },
              {
                icon: "💾",
                title: "Data Science Underutilized",
                desc: "Few combine real police FIR-based crash datasets with Python/Excel analytics tools."
              },
              {
                icon: "🤖",
                title: "ML Prediction Untapped",
                desc: "Machine Learning and statistical modeling are underutilized in crash severity prediction."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-8 border border-blue-500/30 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 hover:border-blue-500/60 transition-all duration-300 transform hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">{item.title}</h3>
                <p className="text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Objectives */}
      <section className="min-h-screen flex items-center justify-center px-4 relative py-20">
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 relative z-10 items-center">
          {/* Left - Image */}
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden group order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 z-10"></div>
            <img 
              src="/car-crash-accident-damaged-vehicle.jpg"
              alt="Car crash"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-2xl"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 md:order-2 animate-fadeIn">
            <div>
              <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full mb-6">
                <span className="text-cyan-300 text-sm font-semibold">OBJECTIVES OF ANALYSIS</span>
              </div>
              <h2 className="text-5xl font-bold mb-8">
                Research <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Objectives</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "Study pattern and frequency of road crashes with respect to time",
                "Classify accidents by nature and severity (fatal, grievous, minor, non-injury)",
                "Identify major causes: overspeeding, vehicle control, driver negligence",
                "Analyze vehicle types and their contribution to crash statistics",
                "Compare trends across multiple datasets (NH-48 and NH-53)",
                "Suggest preventive measures and safety improvements based on findings"
              ].map((obj, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4 p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:bg-cyan-500/5 animate-fadeIn"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA to next page */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center space-y-8 animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-bold">
            Ready to explore the
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-4">Methodology?</span>
          </h2>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto">Discover our comprehensive approach to data collection, analysis, and insights generation.</p>
          
          <Link href="/presentation/page2">
            <button className="mt-8 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-bold text-white text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center gap-3 mx-auto group">
              View Methodology <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
