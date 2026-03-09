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
      
      {/* Main battlebot SVG - Isometric view */}
      <svg
        viewBox="0 0 400 350"
        className="w-full h-full relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradients */}
        <defs>
          <linearGradient id="chassisTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a4a4a" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
          <linearGradient id="chassisFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="chassisSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#333" />
            <stop offset="50%" stopColor="#111" />
            <stop offset="100%" stopColor="#222" />
          </linearGradient>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="20%" stopColor="#fb923c" />
            <stop offset="50%" stopColor="#fdba74" />
            <stop offset="80%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        
        {/* Shadow under the bot */}
        <ellipse cx="200" cy="310" rx="120" ry="25" fill="rgba(0,0,0,0.4)" />
        
        {/* === CHASSIS - 3D Box with Isometric Perspective === */}
        
        {/* Back left wheel */}
        <g transform="translate(80, 260)">
          <ellipse cx="0" cy="0" rx="25" ry="12" fill="url(#wheelGradient)" stroke="#444" strokeWidth="2" />
          <ellipse cx="0" cy="-3" rx="20" ry="9" fill="#222" />
          <ellipse cx="0" cy="-3" rx="10" ry="4" fill="#f97316" />
          <ellipse cx="0" cy="-3" rx="4" ry="2" fill="#333" />
        </g>
        
        {/* Back right wheel */}
        <g transform="translate(320, 260)">
          <ellipse cx="0" cy="0" rx="25" ry="12" fill="url(#wheelGradient)" stroke="#444" strokeWidth="2" />
          <ellipse cx="0" cy="-3" rx="20" ry="9" fill="#222" />
          <ellipse cx="0" cy="-3" rx="10" ry="4" fill="#f97316" />
          <ellipse cx="0" cy="-3" rx="4" ry="2" fill="#333" />
        </g>
        
        {/* Chassis - Bottom face (floor) */}
        <path
          d="M70 250 L330 250 L330 280 L70 280 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        
        {/* Chassis - Front face */}
        <path
          d="M70 220 L330 220 L330 250 L70 250 Z"
          fill="url(#chassisFront)"
          stroke="#444"
          strokeWidth="2"
        />
        
        {/* Front wedge/scoop */}
        <path
          d="M70 250 L40 270 L40 285 L70 280 Z"
          fill="#2a2a2a"
          stroke="#444"
          strokeWidth="1"
        />
        <path
          d="M330 250 L360 270 L360 285 L330 280 Z"
          fill="#2a2a2a"
          stroke="#444"
          strokeWidth="1"
        />
        
        {/* Chassis - Top face */}
        <path
          d="M70 190 L330 190 L330 220 L70 220 Z"
          fill="url(#chassisTop)"
          stroke="#555"
          strokeWidth="2"
        />
        
        {/* Top plate details - vent slots */}
        <rect x="90" y="195" width="40" height="8" rx="1" fill="#222" stroke="#333" strokeWidth="1" />
        <rect x="140" y="195" width="40" height="8" rx="1" fill="#222" stroke="#333" strokeWidth="1" />
        <rect x="220" y="195" width="40" height="8" rx="1" fill="#222" stroke="#333" strokeWidth="1" />
        <rect x="270" y="195" width="40" height="8" rx="1" fill="#222" stroke="#333" strokeWidth="1" />
        
        {/* Front left wheel */}
        <g transform="translate(80, 235)">
          <ellipse cx="0" cy="0" rx="22" ry="10" fill="url(#wheelGradient)" stroke="#444" strokeWidth="2" />
          <ellipse cx="0" cy="-2" rx="17" ry="7" fill="#222" />
          <ellipse cx="0" cy="-2" rx="8" ry="3" fill="#f97316" />
          <ellipse cx="0" cy="-2" rx="3" ry="1.5" fill="#333" />
        </g>
        
        {/* Front right wheel */}
        <g transform="translate(320, 235)">
          <ellipse cx="0" cy="0" rx="22" ry="10" fill="url(#wheelGradient)" stroke="#444" strokeWidth="2" />
          <ellipse cx="0" cy="-2" rx="17" ry="7" fill="#222" />
          <ellipse cx="0" cy="-2" rx="8" ry="3" fill="#f97316" />
          <ellipse cx="0" cy="-2" rx="3" ry="1.5" fill="#333" />
        </g>
        
        {/* === SPINNER MOUNT - Central tower on top === */}
        
        {/* Motor housing base */}
        <rect x="175" y="175" width="50" height="20" rx="3" fill="#2a2a2a" stroke="#444" strokeWidth="2" />
        
        {/* Motor housing top */}
        <rect x="180" y="165" width="40" height="15" rx="2" fill="#333" stroke="#444" strokeWidth="1" />
        
        {/* Bearing/shaft housing */}
        <ellipse cx="200" cy="162" rx="18" ry="6" fill="#3a3a3a" stroke="#555" strokeWidth="2" />
        <ellipse cx="200" cy="162" rx="10" ry="3" fill="#222" />
        
        {/* Shaft extending up */}
        <rect x="196" y="130" width="8" height="35" fill="#555" stroke="#666" strokeWidth="1" />
        <ellipse cx="200" cy="130" rx="6" ry="2" fill="#666" />
        
        {/* === SPINNING BAR WEAPON === */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: isHovered ? 0.08 : 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "200px 120px" }}
        >
          {/* Main bar */}
          <rect x="70" y="112" width="260" height="16" rx="2" fill="url(#barGradient)" stroke="#ea580c" strokeWidth="2" />
          
          {/* Bar texture lines */}
          <line x1="90" y1="115" x2="90" y2="125" stroke="#c2410c" strokeWidth="1" />
          <line x1="120" y1="115" x2="120" y2="125" stroke="#c2410c" strokeWidth="1" />
          <line x1="150" y1="115" x2="150" y2="125" stroke="#c2410c" strokeWidth="1" />
          <line x1="250" y1="115" x2="250" y2="125" stroke="#c2410c" strokeWidth="1" />
          <line x1="280" y1="115" x2="280" y2="125" stroke="#c2410c" strokeWidth="1" />
          <line x1="310" y1="115" x2="310" y2="125" stroke="#c2410c" strokeWidth="1" />
          
          {/* Impact teeth on left */}
          <polygon points="70,112 50,120 70,128" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          
          {/* Impact teeth on right */}
          <polygon points="330,112 350,120 330,128" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          
          {/* Center hub cap */}
          <circle cx="200" cy="120" r="12" fill="#444" stroke="#555" strokeWidth="2" />
          <circle cx="200" cy="120" r="6" fill="#333" />
          <circle cx="200" cy="120" r="2" fill="#f97316" />
        </motion.g>
        
        {/* === ELECTRONICS & DETAILS === */}
        
        {/* Power indicator LED */}
        <circle cx="130" cy="207" r="3" fill="#22c55e" className="animate-pulse" />
        
        {/* Link LED */}
        <circle cx="270" cy="207" r="3" fill="#3b82f6" className="animate-pulse" />
        
        {/* Receiver antenna */}
        <line x1="290" y1="190" x2="310" y2="140" stroke="#555" strokeWidth="2" />
        <circle cx="310" cy="137" r="4" fill="#f97316" className="animate-pulse" />
        
        {/* Kill switch */}
        <rect x="185" y="205" width="30" height="10" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
        <text x="200" y="213" fontSize="6" fill="white" textAnchor="middle" fontWeight="bold">KILL</text>
      </svg>
      
      {/* Spark effects - only show when hovered (spinning fast) */}
      {isHovered && (
        <>
          <motion.div
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{ top: "32%", left: "12%" }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1.5, 0],
              x: [0, -30, -60],
              y: [0, -20, 10],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 0.1,
            }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            style={{ top: "32%", right: "12%" }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1.5, 0],
              x: [0, 30, 60],
              y: [0, -15, 5],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
              repeatDelay: 0.15,
            }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
            style={{ top: "28%", left: "48%" }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              y: [0, -40],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 0.25,
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
