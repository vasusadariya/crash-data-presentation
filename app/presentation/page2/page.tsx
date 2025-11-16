"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function PresentationPage2() {
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
          <div className="flex gap-4">
            <Link href="/presentation">
              <button className="px-6 py-2.5 bg-gradient-to-r from-neutral-700/50 to-neutral-800/50 hover:from-neutral-600 hover:to-neutral-700 border border-neutral-500/50 hover:border-neutral-400 rounded-lg text-neutral-200 hover:text-white font-semibold shadow-lg shadow-neutral-900/50 hover:shadow-neutral-800/80 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 hover:from-cyan-500 hover:to-blue-500 border border-cyan-400/50 hover:border-cyan-300 rounded-lg text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 transition-all duration-300 transform hover:scale-105">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Section 1: Methodology Flowchart */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
          <div className="text-center animate-fadeIn">
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-semibold">RESEARCH METHODOLOGY</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Data Collection &
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Analysis Flow</span>
            </h2>
          </div>

          {/* Flowchart Image Card */}
          <div className="max-w-5xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="p-8 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-lg rounded-3xl border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:border-cyan-500/60 hover:shadow-cyan-500/40 transition-all duration-500">
                <div className="rounded-2xl overflow-hidden bg-white/5 p-4">
                  <img 
                    src="/FlowChart.png"
                    alt="Research Methodology Flowchart"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all -z-10"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </section>

      {/* Section 2: NH-53 Route */}
      <section className="min-h-screen flex items-center justify-center px-4 relative py-20">
        <div className="absolute top-40 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
          <div className="text-center animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              NH-53 Route
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Hazira to Uchchhal</span>
            </h2>
            <p className="text-neutral-400 text-lg">Critical highway corridor spanning Gujarat</p>
          </div>

          {/* Route Map */}
          <div className="rounded-2xl overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <img 
              src="/nh53-route-map-hazira-to-uchchhal-gujarat.jpg"
              alt="NH-53 Route map"
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>

          <p className="text-center text-neutral-400">Blue line indicates the NH-53 corridor from Hazira (Gujarat) to Uchchhal (Odisha)</p>
        </div>
      </section>

      {/* Section 3: Data Coding & Reference */}
      <section className="min-h-screen flex items-center justify-center px-4 relative py-20">
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center mb-12 animate-fadeIn">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full mb-6">
              <span className="text-cyan-300 text-sm font-semibold">DATA REFERENCE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Codes & Numbers for
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Mapping the Data</span>
            </h2>
          </div>

          {/* Reference Table */}
          <div className="overflow-x-auto rounded-2xl border border-cyan-500/30 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-cyan-500/30">
                  <th className="px-6 py-4 text-left font-bold text-cyan-300">NOTE</th>
                  <th className="px-6 py-4 text-left font-bold text-cyan-300">CODE</th>
                </tr>
              </thead>
              <tbody className="text-neutral-300 text-sm">
                <tr className="border-b border-neutral-800 hover:bg-cyan-500/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-blue-400">A</td>
                  <td colSpan={2} className="px-6 py-4">Urban/Rural and Details of Surrounding Land use.</td>
                </tr>
                <tr className="border-b border-neutral-800 hover:bg-cyan-500/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-blue-400">B</td>
                  <td colSpan={2} className="px-6 py-4">1- Overturning, 2- Head on collision, 3- Rear End Collision, 4- Collision Brush/Side Wipe, 5- Left Turn Collision, 6- Skidding, 7- Right Turn Collision, 8- Dash with Median/Crash barrier, 9- Not specified</td>
                </tr>
                <tr className="border-b border-neutral-800 hover:bg-cyan-500/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-blue-400">C</td>
                  <td colSpan={2} className="px-6 py-4">1- Fatal, 2- Grievous Injury, 3- Minor Injured, 4- Non Injury, 5- Not specified</td>
                </tr>
                <tr className="border-b border-neutral-800 hover:bg-cyan-500/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-blue-400">D</td>
                  <td colSpan={2} className="px-6 py-4">1- Drunken, 2- Overspeeding, 3- Vehicle out of control, 4- Fault of driver of motor vehicle/driver of other vehicle/cycle/pedestrian/passenger, 5- Defect in mechanical condition of motor vehicle/road condition, 6- Not specified</td>
                </tr>
                <tr className="border-b border-neutral-800 hover:bg-cyan-500/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-blue-400">E</td>
                  <td colSpan={2} className="px-6 py-4">1- Single lane, 2- Two Lanes, 3- Three Lanes or more without centre divider (median), 4- Four lanes or more with central divider, 5- Not specified</td>
                </tr>
                <tr className="border-b border-neutral-800 hover:bg-cyan-500/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-blue-400">F</td>
                  <td colSpan={2} className="px-6 py-4">1- Straight road, 2- Slight Curve, 3- Sharp Curve, 4- Flat Road, 5 - Not specified</td>
                </tr>
                <tr className="border-b border-neutral-800 hover:bg-cyan-500/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-blue-400">G</td>
                  <td colSpan={2} className="px-6 py-4">1- T-junction, 2-Y-junction, 3-Four arm junction, 4- Staggered junction, 5- Junction with more than 4 arms, 6- Not Specified</td>
                </tr>
                <tr className="border-b border-neutral-800 hover:bg-cyan-500/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-blue-400">H</td>
                  <td colSpan={2} className="px-6 py-4">1- Fine, 2- Mist/Fog, 3- Cloudy, 4- Light rain, 5- Heavy rain, 6-Not Specified</td>
                </tr>
                <tr className="hover:bg-cyan-500/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-blue-400">I</td>
                  <td colSpan={2} className="px-6 py-4">1-Car, 2-Suv, 3-Bus, 4-Minibus, 5-Truck, 6-2Wheeler, 7-3Wheeler, 8-cycle, 9-Pedestrian, 10- Not specified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Back to Dashboard */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center space-y-8 animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-bold">
            Ready to explore the
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-4">Dashboard?</span>
          </h2>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto">Return to the interactive dashboard to view comprehensive crash data analysis with visualizations and insights.</p>
          
          <Link href="/dashboard">
            <button className="mt-8 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-bold text-white text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              View Dashboard
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
