"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function BattlebotHero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative w-full max-w-md mx-auto aspect-square cursor-pointer flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect behind the bot */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-orange-600/5 to-transparent rounded-full blur-3xl" />
      
      {/* Bot container */}
      <div className="relative">
        {/* Shadow on ground */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-black/30 rounded-full blur-md" />
        
        {/* === SPINNING BAR WEAPON === */}
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 z-10"
          animate={{ rotate: 360 }}
          transition={{
            duration: isHovered ? 0.1 : 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Main spinner bar */}
          <div className="relative">
            <div 
              className="w-44 h-4 rounded-sm"
              style={{
                background: "linear-gradient(180deg, #b8b8b8 0%, #8a8a8a 30%, #6a6a6a 70%, #4a4a4a 100%)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)",
              }}
            />
            {/* Impact teeth on ends */}
            <div 
              className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0"
              style={{
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderRight: "10px solid #7a7a7a",
              }}
            />
            <div 
              className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0"
              style={{
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: "10px solid #7a7a7a",
              }}
            />
            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-neutral-800 border-2 border-neutral-600" />
          </div>
        </motion.div>

        {/* === SIMPLE 3D RECTANGULAR CHASSIS === */}
        <svg width="200" height="120" viewBox="0 0 200 120" className="relative">
          {/* Side face (left) - gives 3D depth */}
          <polygon 
            points="10,40 10,90 30,100 30,50" 
            fill="#2a2a2a"
            stroke="#3a3a3a"
            strokeWidth="1"
          />
          
          {/* Bottom face - gives 3D depth */}
          <polygon 
            points="30,100 170,100 190,90 10,90" 
            fill="#1a1a1a"
            stroke="#3a3a3a"
            strokeWidth="1"
          />
          
          {/* Top face - main visible surface */}
          <polygon 
            points="30,50 170,50 190,40 10,40" 
            fill="url(#topGradient)"
            stroke="#4a4a4a"
            strokeWidth="2"
          />
          
          {/* Front face */}
          <polygon 
            points="170,50 190,40 190,90 170,100" 
            fill="#3a3a3a"
            stroke="#4a4a4a"
            strokeWidth="1"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a4a4a" />
              <stop offset="50%" stopColor="#3a3a3a" />
              <stop offset="100%" stopColor="#2a2a2a" />
            </linearGradient>
          </defs>
          
          {/* Vent slots on top */}
          <rect x="60" y="52" width="20" height="4" rx="1" fill="#1a1a1a" />
          <rect x="90" y="52" width="20" height="4" rx="1" fill="#1a1a1a" />
          <rect x="120" y="52" width="20" height="4" rx="1" fill="#1a1a1a" />
          
          {/* LEDs */}
          <circle cx="45" cy="55" r="3" fill="#22c55e" className="animate-pulse" />
          <circle cx="155" cy="55" r="3" fill="#3b82f6" className="animate-pulse" />
          
          {/* === 4 WHEELS === */}
          
          {/* Front left wheel */}
          <ellipse cx="25" cy="75" rx="12" ry="18" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
          <ellipse cx="25" cy="75" rx="5" ry="7" fill="#f97316" />
          
          {/* Back left wheel */}
          <ellipse cx="55" cy="82" rx="12" ry="18" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
          <ellipse cx="55" cy="82" rx="5" ry="7" fill="#f97316" />
          
          {/* Front right wheel */}
          <ellipse cx="175" cy="68" rx="12" ry="18" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
          <ellipse cx="175" cy="68" rx="5" ry="7" fill="#f97316" />
          
          {/* Back right wheel */}
          <ellipse cx="145" cy="75" rx="12" ry="18" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
          <ellipse cx="145" cy="75" rx="5" ry="7" fill="#f97316" />
        </svg>
      </div>
      
      {/* Spark effects when spinning fast */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-[30%] left-[20%] w-2 h-2 bg-yellow-400 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0],
              x: [0, -30],
              y: [0, -20],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 0.1,
            }}
          />
          <motion.div
            className="absolute top-[30%] right-[20%] w-2 h-2 bg-orange-400 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0],
              x: [0, 30],
              y: [0, -15],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: 0.15,
            }}
          />
        </>
      )}
      
      {/* Hover hint */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        Hover to spin up
      </div>
    </div>
  )
}
