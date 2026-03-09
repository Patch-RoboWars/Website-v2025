"use client"

import { motion } from "framer-motion"

export function BattlebotHero() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Glow effect behind the bot */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-orange-600/5 to-transparent rounded-full blur-3xl" />
      
      {/* Arena floor reflection */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-orange-500/10 to-transparent blur-xl rounded-full" />
      
      {/* Main battlebot SVG - realistic wedge with vertical spinner */}
      <svg
        viewBox="0 0 400 350"
        className="w-full h-full relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow under the bot */}
        <ellipse cx="200" cy="310" rx="130" ry="25" fill="rgba(0,0,0,0.5)" />
        
        {/* Left Wheel - black rubber with hub */}
        <g>
          <ellipse cx="70" cy="260" rx="30" ry="45" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="4" />
          <ellipse cx="70" cy="260" rx="22" ry="35" fill="#111" />
          {/* Wheel treads */}
          <line x1="70" y1="215" x2="70" y2="225" stroke="#222" strokeWidth="6" />
          <line x1="70" y1="235" x2="70" y2="245" stroke="#222" strokeWidth="6" />
          <line x1="70" y1="255" x2="70" y2="265" stroke="#222" strokeWidth="6" />
          <line x1="70" y1="275" x2="70" y2="285" stroke="#222" strokeWidth="6" />
          <line x1="70" y1="295" x2="70" y2="305" stroke="#222" strokeWidth="6" />
          {/* Wheel hub */}
          <circle cx="70" cy="260" r="12" fill="#1f1f1f" stroke="#333" strokeWidth="2" />
          <circle cx="70" cy="260" r="5" fill="#f97316" />
        </g>
        
        {/* Right Wheel - black rubber with hub */}
        <g>
          <ellipse cx="330" cy="260" rx="30" ry="45" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="4" />
          <ellipse cx="330" cy="260" rx="22" ry="35" fill="#111" />
          {/* Wheel treads */}
          <line x1="330" y1="215" x2="330" y2="225" stroke="#222" strokeWidth="6" />
          <line x1="330" y1="235" x2="330" y2="245" stroke="#222" strokeWidth="6" />
          <line x1="330" y1="255" x2="330" y2="265" stroke="#222" strokeWidth="6" />
          <line x1="330" y1="275" x2="330" y2="285" stroke="#222" strokeWidth="6" />
          <line x1="330" y1="295" x2="330" y2="305" stroke="#222" strokeWidth="6" />
          {/* Wheel hub */}
          <circle cx="330" cy="260" r="12" fill="#1f1f1f" stroke="#333" strokeWidth="2" />
          <circle cx="330" cy="260" r="5" fill="#f97316" />
        </g>
        
        {/* Main chassis - 3D printed wedge body (black) */}
        <g>
          {/* Bottom wedge scoop - angled front */}
          <path
            d="M90 285 L310 285 L340 260 L350 290 L50 290 L60 260 Z"
            fill="#1a1a1a"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
          
          {/* Front wedge - the main angled scoop */}
          <path
            d="M80 260 L320 260 L340 230 L60 230 Z"
            fill="#0f0f0f"
            stroke="#252525"
            strokeWidth="2"
          />
          
          {/* Side panel left */}
          <path
            d="M60 230 L80 260 L90 285 L50 290 L40 250 Z"
            fill="#171717"
            stroke="#2a2a2a"
            strokeWidth="1"
          />
          
          {/* Side panel right */}
          <path
            d="M340 230 L320 260 L310 285 L350 290 L360 250 Z"
            fill="#171717"
            stroke="#2a2a2a"
            strokeWidth="1"
          />
        </g>
        
        {/* Top armor plate - brushed aluminum/silver */}
        <g>
          <path
            d="M100 200 L300 200 L340 230 L60 230 Z"
            fill="url(#metalGradient)"
            stroke="#666"
            strokeWidth="2"
          />
          
          {/* Metal plate surface details */}
          <line x1="120" y1="205" x2="280" y2="205" stroke="#8a8a8a" strokeWidth="1" opacity="0.5" />
          <line x1="115" y1="210" x2="285" y2="210" stroke="#7a7a7a" strokeWidth="1" opacity="0.4" />
          <line x1="110" y1="215" x2="290" y2="215" stroke="#6a6a6a" strokeWidth="1" opacity="0.3" />
          <line x1="105" y1="220" x2="295" y2="220" stroke="#5a5a5a" strokeWidth="1" opacity="0.3" />
          
          {/* Hex bolts on top plate */}
          <circle cx="130" cy="212" r="5" fill="#555" stroke="#444" strokeWidth="1" />
          <circle cx="270" cy="212" r="5" fill="#555" stroke="#444" strokeWidth="1" />
          <circle cx="160" cy="222" r="4" fill="#555" stroke="#444" strokeWidth="1" />
          <circle cx="240" cy="222" r="4" fill="#555" stroke="#444" strokeWidth="1" />
        </g>
        
        {/* Vertical Drum Spinner - yellow/orange drum weapon */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "200px 160px" }}
        >
          {/* Drum body */}
          <ellipse cx="200" cy="160" rx="35" ry="50" fill="url(#drumGradient)" stroke="#b45309" strokeWidth="3" />
          
          {/* Drum teeth/impactors */}
          <rect x="160" y="110" width="10" height="20" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          <rect x="230" y="110" width="10" height="20" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          <rect x="160" y="190" width="10" height="20" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          <rect x="230" y="190" width="10" height="20" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          
          {/* Drum center line */}
          <line x1="165" y1="160" x2="235" y2="160" stroke="#92400e" strokeWidth="2" />
        </motion.g>
        
        {/* Drum mount/housing */}
        <rect x="185" y="195" width="30" height="15" rx="3" fill="#333" stroke="#444" strokeWidth="1" />
        
        {/* LED power indicator */}
        <circle cx="200" cy="240" r="4" fill="#22c55e" className="animate-pulse" />
        <circle cx="200" cy="240" r="6" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.5" className="animate-ping" />
        
        {/* Receiver antenna */}
        <line x1="280" y1="200" x2="295" y2="165" stroke="#444" strokeWidth="2" />
        <circle cx="295" cy="162" r="4" fill="#f97316" className="animate-pulse" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="25%" stopColor="#d1d5db" />
            <stop offset="50%" stopColor="#e5e7eb" />
            <stop offset="75%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
          <linearGradient id="drumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c2410c" />
            <stop offset="30%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="70%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Spark effects from spinning drum */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-1 h-1 bg-yellow-300 rounded-full"
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1.5, 0],
          x: [0, -30, -60],
          y: [0, -20, -10],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatDelay: 0.8,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-300 rounded-full"
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1.5, 0],
          x: [0, 30, 60],
          y: [0, -15, 5],
        }}
        transition={{
          duration: 0.35,
          repeat: Infinity,
          repeatDelay: 1.2,
          delay: 0.3,
        }}
      />
      <motion.div
        className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 2, 0],
          y: [0, -40],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 1.5,
          delay: 0.6,
        }}
      />
    </div>
  )
}
