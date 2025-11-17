"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Fine", value: 91.9, count: 2118 },
  { name: "Light Rain", value: 4.6, count: 107 },
  { name: "Cloudy", value: 2.4, count: 56 },
  { name: "Heavy Rain", value: 1.0, count: 24 },
]

const COLORS = ["#06b6d4", "#3b82f6", "#8b5cf6", "#a855f7"]

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }: { cx: number; cy: number; midAngle: number; innerRadius: number; outerRadius: number; value: number }) => {
  const RADIAN = Math.PI / 180
  let radius = outerRadius + 25
  
  if (value < 10) {
    radius = outerRadius + 35
  }
  if (value < 5) {
    radius = outerRadius + 45
  }
  
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" className="text-xs font-bold">
      {`${value}%`}
    </text>
  )
}

export default function WeatherAnalysis() {
  return (
    <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-cyan-500/30 p-3 sm:p-4 lg:p-6 hover:border-cyan-500/60 transition-all duration-500">
      <div className="space-y-3 sm:space-y-4">
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-cyan-300 mb-1 sm:mb-2">Accident Distribution by Weather</h3>
          <p className="text-xs sm:text-sm text-neutral-400">Environmental conditions during crash incidents</p>
        </div>
          <ResponsiveContainer width="100%" height={300} className="sm:!h-[350px]">
            <PieChart margin={{ top: 20, right: 100, bottom: 20, left: 100 }}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={110}
                innerRadius={60}
                fill="#8884d8"
                dataKey="value"
                animationDuration={800}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="#1a1a1a" strokeWidth={2} />
                ))}
              </Pie>
              <text x="50%" y="48%" textAnchor="middle" dominantBaseline="middle" className="fill-cyan-300 text-2xl font-bold">
                2305
              </text>
              <text x="50%" y="53%" textAnchor="middle" dominantBaseline="middle" className="fill-neutral-400 text-sm">
                Total Cases
              </text>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-cyan-500/20">
          {data.map((item, index) => (
            <div key={index} className="p-2 sm:p-3 bg-neutral-700/50 rounded border border-cyan-500/20 hover:bg-neutral-600/50 transition-colors">
              <div className="flex items-center gap-1 sm:gap-2 mb-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-xs text-neutral-400 truncate">{item.name}</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-cyan-300">{item.value}%</div>
              <div className="text-xs text-neutral-500">{item.count} cases</div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-cyan-500/20">
          <h4 className="font-semibold text-cyan-300 mb-2">Key Insights</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Clear Weather Dominance (91.9%):</strong> Most accidents occur in fine weather, indicating human error is the primary factor.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Minimal Weather Impact (8.1%):</strong> Only 8% of accidents occur in adverse weather conditions.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Safety Focus:</strong> Prevention efforts should emphasize driver behavior over weather-related infrastructure.</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
