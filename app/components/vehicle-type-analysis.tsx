"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Car", value: 86.0, count: 718 },
  { name: "SUV", value: 12.8, count: 107 },
  { name: "Minibus", value: 0.7, count: 3 },
  { name: "Bus", value: 0.4, count: 6 },
  { name: "Truck", value: 0.1, count: 1 },
]

const COLORS = ["#f59e0b", "#f97316", "#ef4444", "#ec4899", "#d946ef"]

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
  const RADIAN = Math.PI / 180
  let radius = outerRadius + 70
  
  // Increase radius for very small slices to prevent overlap
  if (value < 5) {
    radius = outerRadius + 95
  }
  if (value < 1) {
    radius = outerRadius + 120
  }
  
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" className="text-xs font-bold">
      {`${value}%`}
    </text>
  )
}

export default function VehicleTypeAnalysis() {
  return (
    <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-all duration-500 w-full">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Vehicle Type / Pedestrian Involvement</h3>
          <p className="text-sm text-neutral-400">Analysis of crash contribution by vehicle type</p>
        </div>

        <ResponsiveContainer width="100%" height={400}>
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
              835
            </text>
            <text x="50%" y="56%" textAnchor="middle" dominantBaseline="middle" className="fill-neutral-400 text-sm">
              Total Cases
            </text>
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
              <span><strong>Car Dominance (86.0%):</strong> Private vehicles are the major contributors to total crash incidents.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>SUV Secondary Role (12.8%):</strong> Larger vehicles pose additional safety challenges due to size and speed.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Public Transport Safe:</strong> Commercial vehicles show minimal involvement in accidents.</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
