"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Four-Lane (Divided)", value: 99.8, count: 2299 },
  { name: "Two Lanes", value: 0.1, count: 3 },
  { name: "Three Lanes (No Divider)", value: 0.1, count: 1 },
  { name: "Not Specified", value: 0.1, count: 1 },
]

const COLORS = ["#a855f7", "#9333ea", "#7e22ce", "#6b21a8"]

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
  let radius = outerRadius + 30
  
  if (value < 1) {
    radius = outerRadius + 55
  }
  
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" className="text-xs font-bold">
      {`${value}%`}
    </text>
  )
}

export default function RoadFeatureAnalysis() {
  return (
    <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-cyan-500/30 p-3 sm:p-4 lg:p-6 hover:border-cyan-500/60 transition-all duration-500">
      <div className="space-y-3 sm:space-y-4">
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-cyan-300 mb-1 sm:mb-2">Analysis of Road Feature Distribution</h3>
          <p className="text-xs sm:text-sm text-neutral-400">Road type characteristics at accident locations</p>
        </div>
        <ResponsiveContainer width="100%" height={300} className="sm:!h-[350px] lg:!h-[400px]">
          <PieChart margin={{ top: 30, right: 130, bottom: 30, left: 130 }}>
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
              2304
            </text>
            <text x="50%" y="53%" textAnchor="middle" dominantBaseline="middle" className="fill-neutral-400 text-sm">
              Total Cases
            </text>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-cyan-500/20">
          {data.map((item, index) => (
            <div key={index} className="p-2 sm:p-3 bg-neutral-700/50 rounded border border-cyan-500/20 hover:bg-neutral-600/50 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-[10px] sm:text-xs text-neutral-400">{item.name}</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-cyan-300">{item.value}%</div>
              <div className="text-[10px] sm:text-xs text-neutral-500">{item.count} cases</div>
            </div>
          ))}
        </div>

        <div className="pt-3 sm:pt-4 border-t border-cyan-500/20">
          <h4 className="text-sm sm:text-base font-semibold text-cyan-300 mb-2">Key Insights</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Four-Lane Dominance (99.8%):</strong> Nearly all crashes occur on four-lane divided roads, indicating high-speed corridors.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Highway Safety Focus:</strong> Safety improvements should concentrate on multi-lane highway protocols.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Human Factors Matter:</strong> Road type is less critical than driver behavior and traffic management.</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
