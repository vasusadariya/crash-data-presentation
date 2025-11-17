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
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CRASH DATA PRESENTATION
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-1 flex-wrap justify-center max-w-3xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-2 xl:px-3 py-1.5 text-xs font-medium rounded transition-all duration-300 whitespace-nowrap ${
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
            <div className="p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`px-2 sm:px-3 py-2 text-xs font-medium rounded transition-all whitespace-nowrap ${
                    activeSection === item.id
                      ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                      : "text-neutral-400 hover:text-cyan-300 border border-transparent hover:border-cyan-500/30"
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
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
          {/* Overview Section */}
          {activeSection === "overview" && (
            <div className="space-y-6 sm:space-y-8 animate-fadeIn">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent px-4">
                  Road Accident Analysis
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base lg:text-lg px-4">
                  Comprehensive crash data visualization and insights for NH-53 corridor safety
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <SeverityAnalysis />
                <WeatherAnalysis />
              </div>
            </div>
          )}

          {activeSection === "severity" && <SeverityAnalysis />}
          {activeSection === "weather" && <WeatherAnalysis />}
          {activeSection === "road" && (
            <div className="space-y-6 sm:space-y-8">
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
