"use client"

import { motion } from "framer-motion"

export function BattlebotHero() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Glow effect behind the bot */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/30 via-orange-600/10 to-transparent rounded-full blur-3xl" />
      
      {/* Main battlebot SVG */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow under the bot */}
        <ellipse cx="200" cy="340" rx="120" ry="20" fill="rgba(0,0,0,0.4)" />
        
        {/* Main body - wedge shape */}
        <g>
          {/* Body base - angular wedge */}
          <path
            d="M80 220 L320 220 L340 280 L60 280 Z"
            fill="url(#bodyGradient)"
            stroke="#c2410c"
            strokeWidth="2"
          />
          
          {/* Top armor plate */}
          <path
            d="M100 180 L300 180 L320 220 L80 220 Z"
            fill="url(#topGradient)"
            stroke="#c2410c"
            strokeWidth="2"
          />
          
          {/* Front wedge scoop */}
          <path
            d="M60 280 L340 280 L360 300 L40 300 Z"
            fill="#7c2d12"
            stroke="#c2410c"
            strokeWidth="2"
          />
          
          {/* Side armor panels - left */}
          <path
            d="M60 280 L80 220 L80 250 L50 290 Z"
            fill="#9a3412"
            stroke="#c2410c"
            strokeWidth="1"
          />
          
          {/* Side armor panels - right */}
          <path
            d="M340 280 L320 220 L320 250 L350 290 Z"
            fill="#9a3412"
            stroke="#c2410c"
            strokeWidth="1"
          />
          
          {/* Rivets/bolts on body */}
          <circle cx="120" cy="250" r="4" fill="#451a03" />
          <circle cx="160" cy="250" r="4" fill="#451a03" />
          <circle cx="240" cy="250" r="4" fill="#451a03" />
          <circle cx="280" cy="250" r="4" fill="#451a03" />
          
          {/* Vents on top */}
          <rect x="140" y="190" width="40" height="8" rx="2" fill="#431407" />
          <rect x="220" y="190" width="40" height="8" rx="2" fill="#431407" />
          
          {/* LED indicators */}
          <circle cx="130" cy="200" r="5" fill="#22c55e" className="animate-pulse" />
          <circle cx="270" cy="200" r="5" fill="#ef4444" className="animate-pulse" />
        </g>
        
        {/* Wheels */}
        <g>
          {/* Left wheel */}
          <ellipse cx="100" cy="290" rx="25" ry="35" fill="#1f2937" stroke="#374151" strokeWidth="3" />
          <ellipse cx="100" cy="290" rx="15" ry="22" fill="#111827" />
          <ellipse cx="100" cy="290" rx="6" ry="8" fill="#f97316" />
          
          {/* Right wheel */}
          <ellipse cx="300" cy="290" rx="25" ry="35" fill="#1f2937" stroke="#374151" strokeWidth="3" />
          <ellipse cx="300" cy="290" rx="15" ry="22" fill="#111827" />
          <ellipse cx="300" cy="290" rx="6" ry="8" fill="#f97316" />
        </g>
        
        {/* Spinning weapon - horizontal bar spinner */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "200px 150px" }}
        >
          {/* Spinner hub */}
          <circle cx="200" cy="150" r="20" fill="#374151" stroke="#f97316" strokeWidth="3" />
          <circle cx="200" cy="150" r="10" fill="#f97316" />
          
          {/* Spinner bar */}
          <rect x="80" y="143" width="240" height="14" rx="3" fill="url(#spinnerGradient)" />
          
          {/* Spinner blade tips */}
          <path d="M80 143 L60 150 L80 157 Z" fill="#dc2626" />
          <path d="M320 143 L340 150 L320 157 Z" fill="#dc2626" />
          
          {/* Spinner teeth */}
          <rect x="100" y="138" width="8" height="24" fill="#b91c1c" />
          <rect x="140" y="138" width="8" height="24" fill="#b91c1c" />
          <rect x="252" y="138" width="8" height="24" fill="#b91c1c" />
          <rect x="292" y="138" width="8" height="24" fill="#b91c1c" />
        </motion.g>
        
        {/* Antenna/receiver */}
        <line x1="200" y1="180" x2="200" y2="120" stroke="#6b7280" strokeWidth="3" />
        <circle cx="200" cy="115" r="6" fill="#f97316" className="animate-pulse" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
          <linearGradient id="topGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="20%" stopColor="#6b7280" />
            <stop offset="50%" stopColor="#9ca3af" />
            <stop offset="80%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Spark effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
          x: [0, -20, -40],
          y: [0, -10, 20],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-orange-400 rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
          x: [0, 20, 40],
          y: [0, -15, 15],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
          delay: 0.8,
        }}
      />
    </div>
  )
}
