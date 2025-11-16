"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { year: 2015, accidents: 120, fatal: 15, grievous: 20, minor: 18 },
  { year: 2016, accidents: 280, fatal: 38, grievous: 135, minor: 223 },
  { year: 2017, accidents: 260, fatal: 45, grievous: 120, minor: 215 },
  { year: 2018, accidents: 265, fatal: 48, grievous: 125, minor: 235 },
  { year: 2019, accidents: 245, fatal: 38, grievous: 100, minor: 205 },
  { year: 2020, accidents: 190, fatal: 30, grievous: 85, minor: 140 },
  { year: 2021, accidents: 188, fatal: 28, grievous: 95, minor: 165 },
  { year: 2022, accidents: 150, fatal: 22, grievous: 70, minor: 100 },
  { year: 2023, accidents: 220, fatal: 35, grievous: 95, minor: 150 },
  { year: 2024, accidents: 250, fatal: 45, grievous: 118, minor: 160 },
  { year: 2025, accidents: 155, fatal: 28, grievous: 55, minor: 80 },
]

export default function TrendAnalysis() {
  return (
    <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-all duration-500 w-full">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Road Accidents & Persons Affected with Injuries</h3>
          <p className="text-sm text-neutral-400">Trend analysis from 2015 to 2025</p>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
            <XAxis dataKey="year" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip 
              contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "8px" }}
              labelStyle={{ color: "#06b6d4" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="accidents"
              stroke="#06b6d4"
              name="No. of Accidents"
              dot={{ fill: "#06b6d4", r: 4 }}
              activeDot={{ r: 6 }}
              strokeWidth={2}
              animationDuration={800}
            />
            <Line
              type="monotone"
              dataKey="fatal"
              stroke="#ef4444"
              name="Fatal"
              dot={{ fill: "#ef4444", r: 3 }}
              activeDot={{ r: 5 }}
              strokeWidth={2}
              animationDuration={800}
            />
            <Line
              type="monotone"
              dataKey="grievous"
              stroke="#f59e0b"
              name="Grievous Injury"
              dot={{ fill: "#f59e0b", r: 3 }}
              activeDot={{ r: 5 }}
              strokeWidth={2}
              animationDuration={800}
            />
            <Line
              type="monotone"
              dataKey="minor"
              stroke="#10b981"
              name="Minor Injured"
              dot={{ fill: "#10b981", r: 3 }}
              activeDot={{ r: 5 }}
              strokeWidth={2}
              animationDuration={800}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="pt-4 border-t border-cyan-500/20">
          <h4 className="font-semibold text-cyan-300 mb-2">Key Insights</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>High Volatility (2015-2018):</strong> Accidents peaked in 2024 with 250 incidents, showing variable safety performance over the decade.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Fatalities Below 50:</strong> Fatal cases remained mostly under 50 throughout the period, indicating consistent emergency response effectiveness.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>2025 Trend:</strong> Current year shows 155 accidents with 28 fatalities, suggesting improved safety enforcement is working.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Need for Consistency:</strong> Targeted safety interventions and driver behavior programs must be maintained to sustain positive trends.</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
