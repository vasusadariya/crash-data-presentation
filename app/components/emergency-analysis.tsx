"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Help Given - YES", value: 99.9, count: 2304 },
  { name: "Help Given - NO", value: 0.1, count: 3 },
]

const COLORS = ["#10b981", "#ef4444"]

export default function EmergencyAnalysis() {
  return (
    <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-cyan-500/30 p-3 sm:p-4 lg:p-6 hover:border-cyan-500/60 transition-all duration-500 w-full">
      <div className="space-y-3 sm:space-y-4">
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-cyan-300 mb-1 sm:mb-2">Analysis of Emergency Response Effectiveness</h3>
          <p className="text-xs sm:text-sm text-neutral-400">Emergency help (Ambulance/Route Patrol) assistance availability</p>
        </div>

        <div className="relative">
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-3 bg-neutral-800/80 border border-green-500/30 rounded-lg backdrop-blur-sm z-10">
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-green-300">2307</div>
              <div className="text-[10px] sm:text-xs text-neutral-400">Total Cases</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300} className="sm:!h-[350px]">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                animationDuration={800}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 pt-3 sm:pt-4 border-t border-cyan-500/20">
          {data.map((item, index) => (
            <div key={index} className="p-2 sm:p-3 lg:p-4 bg-neutral-700/50 rounded border border-cyan-500/20 hover:bg-neutral-600/50 transition-colors">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-xs sm:text-sm text-neutral-400">{item.name}</span>
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-300">{item.value}%</div>
              <div className="text-xs sm:text-sm text-neutral-500">{item.count} cases</div>
            </div>
          ))}
        </div>

        <div className="pt-3 sm:pt-4 border-t border-cyan-500/20">
          <h4 className="text-sm sm:text-base font-semibold text-cyan-300 mb-2">Key Insights</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Excellent Response Rate (99.9%):</strong> Emergency assistance was provided in nearly all crash cases.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Negligible Delays (0.1%):</strong> Only 3 cases lacked immediate support, indicating highly reliable operations.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>System Effectiveness:</strong> The emergency response infrastructure is robust and ensures timely medical assistance.</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
