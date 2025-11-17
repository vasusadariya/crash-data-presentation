"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Rear End Collision", value: 26.7, count: 615 },
  { name: "Head on Collision", value: 24.3, count: 560 },
  { name: "Skidding", value: 14.5, count: 295 },
  { name: "Overturning", value: 12.8, count: 334 },
  { name: "Dash with Median/Crash Barrier", value: 12.6, count: 289 },
  { name: "Collision Brush / Side Wipe", value: 8.7, count: 200 },
  { name: "Left Turn Collision", value: 0.3, count: 8 },
  { name: "Not Specified", value: 0.2, count: 1 },
  { name: "Right Turn Collision", value: 0.0, count: 1 },
]

const COLORS = [
  "#5DADE2", // Rear End - Blue
  "#F8B88B", // Head on - Coral/Orange
  "#ABEBC6", // Skidding - Teal/Mint
  "#F1948A", // Overturning - Red/Salmon
  "#D7BDE2", // Dash - Purple
  "#85C1E9", // Side Wipe - Light Blue
  "#F9E79F", // Left Turn - Light Yellow
  "#B0B0B0", // Not Specified - Gray
  "#E0E0E0", // Right Turn - Light Gray
]

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  value: number
}) => {
  const RADIAN = Math.PI / 180
  let radius = outerRadius + 70
  
  // Increase radius for small slices to prevent overlap
  if (value < 1) {
    radius = outerRadius + 125
  } else if (value < 5) {
    radius = outerRadius + 100
  } else if (value < 10) {
    radius = outerRadius + 85
  }
  
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" className="text-xs font-bold">
      {`${value}%`}
    </text>
  )
}

export default function NatureOfAccidentAnalysis() {
  return (
    <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-all duration-500 w-full">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Nature of Accident Distribution</h3>
          <p className="text-sm text-neutral-400">Analysis of collision types on NH-53 corridor</p>
        </div>

        <div className="relative">
          <div className="absolute top-4 right-4 p-3 bg-neutral-800/80 border border-blue-500/30 rounded-lg backdrop-blur-sm z-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">2303</div>
              <div className="text-xs text-neutral-400">Total Cases</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={450}>
            <PieChart margin={{ top: 40, right: 140, bottom: 40, left: 140 }}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={115}
                innerRadius={65}
                fill="#8884d8"
                dataKey="value"
                animationDuration={800}
                stroke="#1a1a1a"
                strokeWidth={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend 
                layout="vertical"
                verticalAlign="middle"
                align="right"
                wrapperStyle={{ paddingLeft: '20px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-4 border-t border-cyan-500/20">
          {data.slice(0, 6).map((item, index) => (
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
              <span><strong>Rear-End Collisions Dominant (26.7%):</strong> Most common accident type, often preventable through better following distances and vehicle maintenance.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Head-On Collisions (24.3%):</strong> Second major category, typically high-severity incidents requiring lane discipline enforcement.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Combined Major Types (65%):</strong> Rear-end, head-on, and skidding accidents account for over 2/3 of all incidents.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Safety Focus:</strong> Enhanced driver awareness, speed control, and improved road design can significantly reduce these major accident categories.</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
