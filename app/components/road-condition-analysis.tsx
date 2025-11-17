"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Straight Road", value: 94.1, count: 2168 },
  { name: "Slight Curve", value: 5, count: 115 },
  { name: "Flat Road", value: 0.8, count: 18 },
  { name: "Sharp Curve", value: 0.1, count: 3 },
]

const COLORS = ["#06b6d4", "#0891b2", "#0e7490", "#155e75"]

const renderCustomLabel = ({
  cx = 0,
  cy = 0,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  value = 0,
}: {
  cx?: number
  cy?: number
  midAngle?: number
  innerRadius?: number
  outerRadius?: number
  value?: number | string
}): JSX.Element => {
  const RADIAN = Math.PI / 180

  // coerce numbers safely (Recharts props can be undefined)
  const numericOuter = outerRadius ?? 0
  const numericMid = midAngle ?? 0
  const numericValue = typeof value === "number" ? value : parseFloat(String(value)) || 0

  let radius = numericOuter + 60

  if (numericValue < 10) {
    radius = numericOuter + 80
  }
  if (numericValue < 1) {
    radius = numericOuter + 100
  }

  const x = cx + radius * Math.cos(-numericMid * RADIAN)
  const y = cy + radius * Math.sin(-numericMid * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" className="text-xs font-bold">
      {`${numericValue}%`}
    </text>
  )
}

export default function RoadConditionAnalysis() {
  return (
    <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-all duration-500">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Analysis of Road Condition (NH-53)</h3>
          <p className="text-sm text-neutral-400">Road geometry and alignment at crash locations</p>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-cyan-500/20">
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
              <span><strong>Majority on Straight Roads (94.1%):</strong> Most crashes occur on straight sections despite better visibility.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Curves Less Critical (5.9%):</strong> Road curvature plays a minimal role in accident causation.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Driver Behavior is Key:</strong> Findings emphasize that driver actions matter more than road geometry.</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
