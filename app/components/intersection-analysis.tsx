"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Unknown Code", value: 92.5, count: 962 },
  { name: "T-Junction", value: 6.5, count: 68 },
  { name: "Four-Arm Junction", value: 0.3, count: 3 },
  { name: "Not Specified", value: 0.3, count: 3 },
  { name: "Staggered Junction", value: 0.2, count: 2 },
  { name: "Y-Junction", value: 0.2, count: 2 },
]

const COLORS = ["#10b981", "#059669", "#047857", "#065f46", "#064e3b", "#042f2e"]

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  value: number
  index: number
}): JSX.Element => {
  const RADIAN = Math.PI / 180
  let radius = outerRadius + 30
  
  if (value < 10) {
    radius = outerRadius + 45
  }
  if (value < 1) {
    // Stagger small slices vertically to prevent overlap
    const offset = (index % 2 === 0) ? 0 : 10
    radius = outerRadius + 65 + offset
  }
  
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" className="text-xs font-bold">
      {`${value}%`}
    </text>
  )
}

export default function IntersectionAnalysis() {
  return (
    <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-cyan-500/30 p-3 sm:p-4 lg:p-6 hover:border-cyan-500/60 transition-all duration-500 w-full">
      <div className="space-y-3 sm:space-y-4">
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-cyan-300 mb-1 sm:mb-2">Intersection Type and Control Distribution</h3>
          <p className="text-xs sm:text-sm text-neutral-400">Analyzing accident concentration at intersections</p>
        </div>
          <ResponsiveContainer width="100%" height={350} className="sm:!h-[400px] lg:!h-[450px]">
            <PieChart margin={{ top: 40, right: 160, bottom: 40, left: 160 }}>
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
                1040
              </text>
              <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" className="fill-neutral-400 text-sm">
                Total Cases
              </text>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-3 sm:pt-4 border-t border-cyan-500/20">
          {data.map((item, index) => (
            <div key={index} className="p-2 sm:p-3 bg-neutral-700/50 rounded border border-cyan-500/20 hover:bg-neutral-600/50 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-[10px] sm:text-xs text-neutral-400 truncate">{item.name}</span>
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
              <span><strong>Data Gap Challenge (92.5%):</strong> Unknown intersection codes suggest critical data recording deficiencies.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>T-Junctions at Risk (6.5%):</strong> These intersections show vulnerability due to merging and turning conflicts.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Improvement Need:</strong> Better data standardization and targeted T-junction safety measures required.</span>
            </li>
          </ul>
        </div>
    </Card>
  )
}
