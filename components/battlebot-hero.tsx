"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function BattlebotHero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative w-full max-w-lg mx-auto aspect-square cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect behind the bot */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-orange-600/5 to-transparent rounded-full blur-3xl" />
      
      {/* Arena floor reflection */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-orange-500/10 to-transparent blur-xl rounded-full" />
      
      {/* Main battlebot SVG - Horizontal bar spinner like Da Vinci's Fury */}
      <svg
        viewBox="0 0 400 320"
        className="w-full h-full relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow under the bot */}
        <ellipse cx="200" cy="280" rx="130" ry="18" fill="rgba(0,0,0,0.5)" />
        
        {/* === MAIN CHASSIS - Low profile wedge === */}
        
        {/* Base plate - angled wedge shape */}
        <path
          d="M60 250 L340 250 L330 270 L70 270 Z"
          fill="#2a2a2a"
          stroke="#3a3a3a"
          strokeWidth="2"
        />
        
        {/* Main body - low rectangular chassis */}
        <path
          d="M80 220 L320 220 L340 250 L60 250 Z"
          fill="url(#chassisGradient)"
          stroke="#555"
          strokeWidth="2"
        />
        
        {/* Top plate with vents */}
        <rect x="90" y="210" width="220" height="15" rx="2" fill="url(#metalGradient)" stroke="#666" strokeWidth="1" />
        
        {/* Vent slots */}
        <rect x="110" y="213" width="30" height="8" rx="1" fill="#222" />
        <rect x="150" y="213" width="30" height="8" rx="1" fill="#222" />
        <rect x="220" y="213" width="30" height="8" rx="1" fill="#222" />
        <rect x="260" y="213" width="30" height="8" rx="1" fill="#222" />
        
        {/* Side armor panels */}
        <path d="M80 220 L60 250 L60 260 L75 260 L85 225 Z" fill="#333" stroke="#444" strokeWidth="1" />
        <path d="M320 220 L340 250 L340 260 L325 260 L315 225 Z" fill="#333" stroke="#444" strokeWidth="1" />
        
        {/* Front wedge scoop - angled armor */}
        <path
          d="M60 250 L30 265 L60 270 Z"
          fill="#3a3a3a"
          stroke="#4a4a4a"
          strokeWidth="2"
        />
        <path
          d="M340 250 L370 265 L340 270 Z"
          fill="#3a3a3a"
          stroke="#4a4a4a"
          strokeWidth="2"
        />
        
        {/* === WHEELS - Small side-mounted wheels === */}
        
        {/* Left front wheel */}
        <ellipse cx="85" cy="258" rx="12" ry="8" fill="#111" stroke="#222" strokeWidth="2" />
        <ellipse cx="85" cy="258" rx="6" ry="4" fill="#f97316" />
        
        {/* Left rear wheel */}
        <ellipse cx="115" cy="262" rx="12" ry="8" fill="#111" stroke="#222" strokeWidth="2" />
        <ellipse cx="115" cy="262" rx="6" ry="4" fill="#f97316" />
        
        {/* Right front wheel */}
        <ellipse cx="315" cy="258" rx="12" ry="8" fill="#111" stroke="#222" strokeWidth="2" />
        <ellipse cx="315" cy="258" rx="6" ry="4" fill="#f97316" />
        
        {/* Right rear wheel */}
        <ellipse cx="285" cy="262" rx="12" ry="8" fill="#111" stroke="#222" strokeWidth="2" />
        <ellipse cx="285" cy="262" rx="6" ry="4" fill="#f97316" />
        
        {/* === SPINNER MOTOR MOUNT - Center of chassis === */}
        
        {/* Motor housing */}
        <rect x="175" y="215" width="50" height="30" rx="3" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
        
        {/* Bearing mount */}
        <ellipse cx="200" cy="210" rx="20" ry="6" fill="#2a2a2a" stroke="#444" strokeWidth="2" />
        <ellipse cx="200" cy="210" rx="12" ry="4" fill="#1a1a1a" />
        
        {/* Shaft */}
        <rect x="196" y="195" width="8" height="18" fill="#555" stroke="#666" strokeWidth="1" />
        
        {/* === HORIZONTAL BAR SPINNER === */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: isHovered ? 0.08 : 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "200px 190px" }}
        >
          {/* Main spinning bar */}
          <rect x="50" y="182" width="300" height="16" rx="2" fill="url(#barGradient)" stroke="#666" strokeWidth="2" />
          
          {/* Bar reinforcement plates */}
          <rect x="60" y="185" width="40" height="10" rx="1" fill="#4a4a4a" stroke="#555" strokeWidth="1" />
          <rect x="300" y="185" width="40" height="10" rx="1" fill="#4a4a4a" stroke="#555" strokeWidth="1" />
          
          {/* Impact teeth on ends */}
          <polygon points="50,185 35,190 50,195" fill="#7f8c8d" stroke="#666" strokeWidth="1" />
          <polygon points="350,185 365,190 350,195" fill="#7f8c8d" stroke="#666" strokeWidth="1" />
          
          {/* Center hub */}
          <circle cx="200" cy="190" r="15" fill="#333" stroke="#444" strokeWidth="2" />
          <circle cx="200" cy="190" r="8" fill="#222" stroke="#333" strokeWidth="1" />
          
          {/* Mounting bolts on bar */}
          <circle cx="100" cy="190" r="3" fill="#555" />
          <circle cx="150" cy="190" r="3" fill="#555" />
          <circle cx="250" cy="190" r="3" fill="#555" />
          <circle cx="300" cy="190" r="3" fill="#555" />
        </motion.g>
        
        {/* === ELECTRONICS === */}
        
        {/* Power LED */}
        <circle cx="140" cy="235" r="3" fill="#22c55e" className="animate-pulse" />
        
        {/* Receiver antenna */}
        <line x1="260" y1="220" x2="280" y2="180" stroke="#555" strokeWidth="2" />
        <circle cx="280" cy="177" r="3" fill="#f97316" className="animate-pulse" />
        
        {/* Link LED */}
        <circle cx="260" cy="235" r="2" fill="#3b82f6" className="animate-pulse" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5a5a5a" />
            <stop offset="25%" stopColor="#8a8a8a" />
            <stop offset="50%" stopColor="#aaa" />
            <stop offset="75%" stopColor="#8a8a8a" />
            <stop offset="100%" stopColor="#5a5a5a" />
          </linearGradient>
          <linearGradient id="chassisGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a4a4a" />
            <stop offset="50%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="20%" stopColor="#9ca3af" />
            <stop offset="50%" stopColor="#d1d5db" />
            <stop offset="80%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Spark effects - only show when hovered (spinning fast) */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-[45%] left-[10%] w-2 h-2 bg-yellow-300 rounded-full"
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1.5, 0],
              x: [0, -20, -50],
              y: [0, -30, -20],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
              repeatDelay: 0.15,
            }}
          />
          <motion.div
            className="absolute top-[45%] right-[10%] w-2 h-2 bg-orange-300 rounded-full"
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1.5, 0],
              x: [0, 20, 50],
              y: [0, -25, -15],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
          />
          <motion.div
            className="absolute top-[40%] left-[50%] w-1.5 h-1.5 bg-yellow-400 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              y: [0, -50],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
          />
        </>
      )}
      
      {/* Hover hint */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        Hover to spin up
      </div>
    </div>
  )
}
