"use client"

import { useState } from "react"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import SeverityAnalysis from "../components/severity-analysis"
import WeatherAnalysis from "../components/weather-analysis"
import RoadFeatureAnalysis from "../components/road-feature-analysis"
import RoadConditionAnalysis from "../components/road-condition-analysis"
import AccidentCausesAnalysis from "../components/accident-causes-analysis"
import VehicleTypeAnalysis from "../components/vehicle-type-analysis"
import IntersectionAnalysis from "../components/intersection-analysis"
import EmergencyAnalysis from "../components/emergency-analysis"
import AnimalFatalitiesAnalysis from "../components/animal-fatalities-analysis"
import TrendAnalysis from "../components/trend-analysis"
import NatureOfAccidentAnalysis from "../components/nature-of-accident-analysis"

export default function CrashDataDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "severity", label: "Severity Impact" },
    { id: "weather", label: "Weather Analysis" },
    { id: "road", label: "Road Conditions" },
    { id: "causes", label: "Accident Causes" },
    { id: "nature", label: "Accident Nature" },
    { id: "vehicles", label: "Vehicle Analysis" },
    { id: "intersection", label: "Intersections" },
    { id: "emergency", label: "Emergency Response" },
    { id: "animals", label: "Animal Impact" },
    { id: "trends", label: "Trends" },
  ]

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-neutral-900/80 backdrop-blur border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CRASH DATA PRESENTATION
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-1 flex-wrap justify-center max-w-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                    : "text-neutral-400 hover:text-cyan-300 border border-transparent hover:border-cyan-500/30"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-cyan-400 hover:text-cyan-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-cyan-500/20 bg-neutral-800/50 backdrop-blur animate-in slide-in-from-top-2">
            <div className="p-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`px-3 py-2 text-xs font-medium rounded transition-all ${
                    activeSection === item.id
                      ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                      : "text-neutral-400 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Overview Section */}
          {activeSection === "overview" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Road Accident Analysis
                </h2>
                <p className="text-neutral-400 text-lg">
                  Comprehensive crash data visualization and insights for NH-53 corridor safety
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <SeverityAnalysis />
                <WeatherAnalysis />
              </div>
            </div>
          )}

          {activeSection === "severity" && <SeverityAnalysis />}
          {activeSection === "weather" && <WeatherAnalysis />}
          {activeSection === "road" && (
            <div className="space-y-8">
              <RoadFeatureAnalysis />
              <RoadConditionAnalysis />
            </div>
          )}
          {activeSection === "causes" && <AccidentCausesAnalysis />}
          {activeSection === "nature" && <NatureOfAccidentAnalysis />}
          {activeSection === "vehicles" && <VehicleTypeAnalysis />}
          {activeSection === "intersection" && <IntersectionAnalysis />}
          {activeSection === "emergency" && <EmergencyAnalysis />}
          {activeSection === "animals" && <AnimalFatalitiesAnalysis />}
          {activeSection === "trends" && <TrendAnalysis />}
        </div>
      </div>
    </div>
  )
}
