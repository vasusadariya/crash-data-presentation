"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Fault of Driver", value: 42.2, count: 972 },
  { name: "Overspeeding", value: 35.3, count: 813 },
  { name: "Drunken Driving", value: 9.0, count: 207 },
  { name: "Defect in Mechanical", value: 7.9, count: 182 },
  { name: "Vehicle Out of Control", value: 5.7, count: 131 },
]

const COLORS = ["#ff6b35", "#ff8c42", "#ffa94d", "#ffb366", "#ffcc99"]

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
  const RADIAN = Math.PI / 180
  let radius = outerRadius + 60
  
  if (value < 10) {
    radius = outerRadius + 75
  }
  
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" className="text-xs font-bold">
      {`${value}%`}
    </text>
  )
}

export default function AccidentCausesAnalysis() {
  return (
    <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-all duration-500 w-full">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Analysis of Accident Causes</h3>
          <p className="text-sm text-neutral-400">Prioritizing road safety interventions</p>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <PieChart margin={{ top: 20, right: 100, bottom: 20, left: 100 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={renderCustomLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="#1a1a1a" strokeWidth={2} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 pt-4 border-t border-cyan-500/20">
          {data.map((item, index) => (
            <div key={index} className="p-3 bg-neutral-700/50 rounded border border-cyan-500/20 hover:bg-neutral-600/50 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-xs text-neutral-400">{item.name}</span>
              </div>
              <div className="text-lg font-bold text-cyan-300">{item.value}%</div>
              <div className="text-xs text-neutral-500">{item.count} cases</div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-cyan-500/20">
          <h4 className="font-semibold text-cyan-300 mb-2">Key Insights</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Human Error Dominates (77.5%):</strong> Driver fault and overspeeding account for over 3/4 of all accidents.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Mechanical Issues Minor (7.9%):</strong> Vehicle defects play a relatively small role in crash causation.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Enforcement Priority:</strong> Focus on speed control and behavioral interventions for maximum impact.</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
