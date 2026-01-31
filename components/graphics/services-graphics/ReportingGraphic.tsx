"use client";

import { motion } from "framer-motion";
import { BarChart3, Home, Users, Settings, ArrowUpRight, TrendingUp, MoreHorizontal, Bell, PieChart, Activity, Search, ChevronDown, Filter } from "lucide-react";
import Image from "next/image";

export function ReportingGraphic() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-bl-cream-50/20 font-archivo select-none group">
      {/* 
        Zoomed Dashboard Container 
        - Width/Height > 100% to simulate "zoomed in"
        - Anchored top-right-ish to focus on that corner
        - The left and bottom parts are naturally cut off
      */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="absolute -top-[10%] -right-[10%] w-[160%] h-[160%] bg-white rounded-bl-3xl shadow-2xl border-b border-l border-bl-cream-200 overflow-hidden flex flex-col"
      >
          {/* Header */}
          <div className="h-24 border-b border-bl-cream-100 flex items-center justify-between px-10 bg-white/80 backdrop-blur-sm z-20 shrink-0">
             {/* Left Area (Visible part of header) */}
             <div className="flex items-center gap-6 pl-10">
                 {/* Brand Logo - Positioned to be visible in the "zoomed" crop */}
                 <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8">
                       <Image 
                         src="/icons/bl-brand-icon.svg" 
                         alt="Bronze Lake" 
                         fill 
                         className="object-contain"
                       />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-libre font-bold text-bl-navy text-lg tracking-widest uppercase leading-none">Bronze Lake</span>
                        <span className="text-[9px] text-bl-bronze-500 font-bold uppercase tracking-[0.2em]">Analytics</span>
                    </div>
                 </div>

                 {/* Separator / Breadcrumb */}
                 <div className="h-8 w-px bg-slate-100 mx-2 hidden md:block" />
                 
                 {/* Context Selector */}
                 <div className="hidden md:flex items-center gap-2 text-slate-500 hover:text-bl-bronze-600 transition-colors cursor-pointer bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                    <span className="text-xs font-medium">Q3 Performance</span>
                    <ChevronDown className="w-3 h-3" />
                 </div>
             </div>
             
             {/* Header Actions (Right) */}
             <div className="flex items-center gap-8 pr-6">
                 <div className="flex items-center gap-6 text-slate-400">
                    <div className="relative p-2 hover:bg-slate-50 rounded-full transition-colors">
                        <Search className="w-5 h-5" />
                    </div>
                    <div className="relative p-2 hover:bg-slate-50 rounded-full transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border border-white" />
                    </div>
                 </div>
                 <div className="flex items-center gap-4 pl-6 border-l border-slate-100">
                     <div className="text-right">
                        <div className="text-sm font-bold text-slate-800">Alex Morrison</div>
                        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Admin</div>
                     </div>
                     <div className="w-11 h-11 rounded-full bg-gradient-to-br from-bl-cream-100 to-bl-cream-200 border-2 border-white shadow-sm" />
                 </div>
             </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
             {/* Main Content - Grid Layout */}
             <div className="flex-1 flex flex-col min-w-0 bg-white">
                
                {/* Metrics Row - Tall and Detailed */}
                <div className="grid grid-cols-4 divide-x divide-bl-cream-100 h-48 border-b border-bl-cream-100 shrink-0">
                    <MetricCell 
                        title="Total Revenue" 
                        value="$1,284,250" 
                        trend="+12.5%" 
                        subtext="vs $1.14M last year"
                        delay={0.1}
                        chartColor="#CD7F32" 
                    />
                    <MetricCell 
                        title="Active Sessions" 
                        value="45.2K" 
                        trend="+8.1%" 
                        subtext="Avg 4m 32s duration"
                        delay={0.2}
                        chartColor="#64748B" 
                    />
                     {/* Conversion Cell - Highlighted */}
                    <div className="col-span-2 p-10 relative overflow-hidden bg-gradient-to-br from-bl-cream-50/50 to-transparent">
                         <div className="relative z-10 flex flex-col justify-between h-full">
                             <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="text-xs text-bl-bronze-600 font-bold uppercase tracking-wider">Conversion Rate</div>
                                        <div className="bg-white border border-bl-bronze-100 text-[10px] font-bold text-bl-bronze-600 px-2 py-0.5 rounded-full">+2.4%</div>
                                    </div>
                                    <div className="text-5xl font-bold text-bl-navy tracking-tight mt-1">4.85%</div>
                                </div>
                                <div className="p-2 bg-white rounded-lg border border-bl-cream-200 shadow-sm">
                                    <ArrowUpRight className="w-5 h-5 text-emerald-500" />
                                </div>
                             </div>
                             
                             <div className="flex items-end gap-8 mt-4">
                                <div className="space-y-1">
                                    <div className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">Goal</div>
                                    <div className="text-lg font-bold text-slate-600">5.0%</div>
                                    <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[96%] bg-emerald-500 rounded-full" />
                                    </div>
                                </div>
                                <div className="space-y-1 flex-1">
                                    <div className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">Trend</div>
                                    <div className="h-8 w-full">
                                        <SimpleSparkline color="#10B981" />
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Main Charts Area */}
                <div className="flex-1 grid grid-cols-6 divide-x divide-bl-cream-100 min-h-0 bg-white">
                    
                    {/* Primary Bar Chart Area */}
                    <div className="col-span-4 p-10 flex flex-col relative overflow-hidden">
                        <div className="flex justify-between items-start mb-10 z-10">
                            <div>
                                <h4 className="text-xl font-bold text-bl-navy">Revenue Analytics</h4>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 bg-bl-navy rounded-full" />
                                        <span className="text-xs text-slate-500 font-medium">Current Year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 bg-bl-bronze-200 rounded-full" />
                                        <span className="text-xs text-slate-500 font-medium">Previous Year</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:border-bl-bronze-200 transition-colors">
                                    <Filter className="w-3.5 h-3.5" /> Filter
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1.5 bg-bl-navy text-white rounded-lg text-xs font-medium hover:bg-bl-navy/90 transition-colors">
                                    Export Report
                                </button>
                            </div>
                        </div>
                        
                        {/* Complex Chart */}
                        <div className="flex-1 relative pr-4">
                             {/* Background Grid */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-300 font-mono pb-8">
                                <div className="w-full h-px bg-slate-50 flex items-center gap-2 before:content-['$100k'] before:w-8 before:text-right" />
                                <div className="w-full h-px bg-slate-50 flex items-center gap-2 before:content-['$75k'] before:w-8 before:text-right" />
                                <div className="w-full h-px bg-slate-50 flex items-center gap-2 before:content-['$50k'] before:w-8 before:text-right" />
                                <div className="w-full h-px bg-slate-50 flex items-center gap-2 before:content-['$25k'] before:w-8 before:text-right" />
                                <div className="w-full h-px bg-slate-50 flex items-center gap-2 before:content-['$0'] before:w-8 before:text-right" />
                            </div>
                            
                            <div className="absolute inset-0 pl-12 pb-8 pt-4 flex items-end justify-between gap-6">
                                {[65, 82, 58, 85, 94, 72, 88, 96, 75, 45, 60, 90].map((h, i) => (
                                    <div key={i} className="flex-1 h-full flex flex-col justify-end group relative z-10 gap-1">
                                        {/* Secondary Bar (Ghost) */}
                                        <motion.div 
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h * 0.6}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.2 + (i * 0.05) }}
                                            className="w-full bg-bl-bronze-100 rounded-t-sm"
                                        />
                                        {/* Main Bar */}
                                        <motion.div 
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.4 + (i * 0.05), ease: "backOut" }}
                                            className="w-full bg-bl-navy rounded-t-sm relative hover:bg-bl-bronze-500 transition-colors cursor-pointer"
                                        >
                                           <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-bl-navy text-white text-[10px] py-1.5 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all font-bold scale-90 group-hover:scale-100 z-50 pointer-events-none">
                                                ${(h * 1250).toLocaleString()}
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* X Axis Labels */}
                            <div className="absolute bottom-0 left-12 right-0 flex justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Donut & Lists */}
                    <div className="col-span-2 p-10 flex flex-col bg-bl-cream-50/20">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h4 className="text-lg font-bold text-bl-navy">Source Breakdown</h4>
                                <p className="text-xs text-slate-400 mt-1">Traffic acquisition channels</p>
                            </div>
                            <div className="p-1.5 hover:bg-white rounded-md transition-colors cursor-pointer">
                                <MoreHorizontal className="w-4 h-4 text-slate-400" />
                            </div>
                        </div>
                        
                        <div className="relative w-full aspect-square max-h-64 mx-auto mb-8">
                            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                {/* Base Circle */}
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#F1F5F9" strokeWidth="8" />
                                
                                {/* Segment 1 - Direct */}
                                <motion.circle 
                                    cx="50" cy="50" r="40" fill="none" stroke="#0F172A" strokeWidth="8" 
                                    strokeDasharray="251.2"
                                    strokeDashoffset="251.2"
                                    whileInView={{ strokeDashoffset: 251.2 * (1 - 0.55) }} 
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                                />
                                
                                {/* Segment 2 - Social */}
                                <motion.circle 
                                    cx="50" cy="50" r="40" fill="none" stroke="#CD7F32" strokeWidth="8" 
                                    strokeDasharray="251.2"
                                    strokeDashoffset="251.2" 
                                    initial={{ strokeDashoffset: 251.2 }}
                                    whileInView={{ strokeDashoffset: 251.2 * (1 - 0.25) }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                                    style={{ transform: 'rotate(198deg)', transformOrigin: '50% 50%' }}
                                />
                                
                                {/* Segment 3 - Referral */}
                                <motion.circle 
                                    cx="50" cy="50" r="40" fill="none" stroke="#94A3B8" strokeWidth="8" 
                                    strokeDasharray="251.2"
                                    strokeDashoffset="251.2" 
                                    initial={{ strokeDashoffset: 251.2 }}
                                    whileInView={{ strokeDashoffset: 251.2 * (1 - 0.15) }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                                    style={{ transform: 'rotate(288deg)', transformOrigin: '50% 50%' }}
                                />
                            </svg>
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-bold text-bl-navy">55%</span>
                                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Direct</span>
                            </div>
                        </div>

                         <div className="flex-1 space-y-4">
                            <LegendBig color="bg-bl-navy" label="Direct Traffic" value="55%" sub="8,240 Users" />
                            <LegendBig color="bg-bl-bronze" label="Social Media" value="25%" sub="3,105 Users" />
                            <LegendBig color="bg-slate-400" label="Referrals" value="15%" sub="1,842 Users" />
                         </div>
                    </div>
                </div>

             </div>
          </div>
      </motion.div>
    </div>
  );
}

function SidebarIcon({ icon: Icon, active }: { icon: any, active?: boolean }) {
    return (
        <div className={`
            p-3 rounded-xl transition-all cursor-pointer relative group
            ${active ? "text-bl-bronze-600 bg-bl-bronze-50" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"}
        `}>
            <Icon className="w-5 h-5" strokeWidth={2} />
            {active && <div className="absolute -right-[17px] top-1/2 -translate-y-1/2 w-1 h-8 bg-bl-bronze-600 rounded-l-full" />}
        </div>
    )
}

function MetricCell({ title, value, trend, subtext, delay, chartColor }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className="p-10 flex flex-col justify-between hover:bg-slate-50/50 transition-colors group"
        >
            <div>
                 <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: chartColor }} />
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{title}</div>
                </div>
                <div className="text-3xl font-bold text-bl-navy tracking-tight">{value}</div>
                <div className="text-[11px] text-slate-400 mt-2 font-medium">{subtext}</div>
            </div>
            <div className="flex items-end justify-between mt-6">
                 <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <TrendingUp className="w-3.5 h-3.5" /> {trend}
                 </div>
                 <div className="h-10 w-24 opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                     <SimpleSparkline color={chartColor} />
                 </div>
            </div>
        </motion.div>
    )
}

function SimpleSparkline({ color }: { color: string }) {
    return (
         <svg viewBox="0 0 40 15" className="w-full h-full overflow-visible">
             <motion.path 
                d="M0 10 L 5 12 L 10 5 L 15 8 L 20 4 L 25 9 L 30 2 L 35 6 L 40 3" 
                fill="none" 
                stroke={color} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
             />
         </svg>
    )
}

function LegendBig({ color, label, value, sub }: any) {
    return (
        <div className="flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-slate-100 hover:bg-white transition-all cursor-default">
            <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${color}`} />
                <div>
                     <div className="text-sm font-bold text-bl-navy">{label}</div>
                     <div className="text-[10px] text-slate-400 font-medium">{sub}</div>
                </div>
            </div>
            <span className="font-bold text-lg text-slate-700">{value}</span>
        </div>
    )
}
