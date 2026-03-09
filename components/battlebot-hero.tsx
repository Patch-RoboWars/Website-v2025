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
      
      {/* Main battlebot SVG - 4WD wedge with vertical spinner */}
      <svg
        viewBox="0 0 400 320"
        className="w-full h-full relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow under the bot */}
        <ellipse cx="200" cy="290" rx="140" ry="20" fill="rgba(0,0,0,0.4)" />
        
        {/* === WHEELS - 4 wheel drive setup === */}
        
        {/* Front Left Wheel */}
        <g>
          <rect x="55" y="220" width="25" height="45" rx="5" fill="#111" stroke="#222" strokeWidth="2" />
          <rect x="60" y="225" width="15" height="35" rx="3" fill="#0a0a0a" />
          {/* Treads */}
          <line x1="58" y1="230" x2="77" y2="230" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="58" y1="240" x2="77" y2="240" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="58" y1="250" x2="77" y2="250" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="58" y1="260" x2="77" y2="260" stroke="#1a1a1a" strokeWidth="3" />
          {/* Hub */}
          <circle cx="67" cy="242" r="6" fill="#f97316" />
        </g>
        
        {/* Front Right Wheel */}
        <g>
          <rect x="320" y="220" width="25" height="45" rx="5" fill="#111" stroke="#222" strokeWidth="2" />
          <rect x="325" y="225" width="15" height="35" rx="3" fill="#0a0a0a" />
          {/* Treads */}
          <line x1="323" y1="230" x2="342" y2="230" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="323" y1="240" x2="342" y2="240" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="323" y1="250" x2="342" y2="250" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="323" y1="260" x2="342" y2="260" stroke="#1a1a1a" strokeWidth="3" />
          {/* Hub */}
          <circle cx="333" cy="242" r="6" fill="#f97316" />
        </g>
        
        {/* Back Left Wheel */}
        <g>
          <rect x="75" y="235" width="25" height="45" rx="5" fill="#111" stroke="#222" strokeWidth="2" />
          <rect x="80" y="240" width="15" height="35" rx="3" fill="#0a0a0a" />
          {/* Treads */}
          <line x1="78" y1="245" x2="97" y2="245" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="78" y1="255" x2="97" y2="255" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="78" y1="265" x2="97" y2="265" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="78" y1="275" x2="97" y2="275" stroke="#1a1a1a" strokeWidth="3" />
          {/* Hub */}
          <circle cx="87" cy="257" r="6" fill="#f97316" />
        </g>
        
        {/* Back Right Wheel */}
        <g>
          <rect x="300" y="235" width="25" height="45" rx="5" fill="#111" stroke="#222" strokeWidth="2" />
          <rect x="305" y="240" width="15" height="35" rx="3" fill="#0a0a0a" />
          {/* Treads */}
          <line x1="303" y1="245" x2="322" y2="245" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="303" y1="255" x2="322" y2="255" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="303" y1="265" x2="322" y2="265" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="303" y1="275" x2="322" y2="275" stroke="#1a1a1a" strokeWidth="3" />
          {/* Hub */}
          <circle cx="313" cy="257" r="6" fill="#f97316" />
        </g>
        
        {/* === MAIN CHASSIS === */}
        
        {/* Bottom plate / base */}
        <rect x="95" y="250" width="210" height="30" rx="3" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="2" />
        
        {/* Front wedge scoop */}
        <path
          d="M95 250 L50 270 L50 280 L95 280 Z"
          fill="#222"
          stroke="#333"
          strokeWidth="2"
        />
        <path
          d="M305 250 L350 270 L350 280 L305 280 Z"
          fill="#222"
          stroke="#333"
          strokeWidth="2"
        />
        
        {/* Main body box */}
        <rect x="110" y="200" width="180" height="55" rx="4" fill="#1f1f1f" stroke="#333" strokeWidth="2" />
        
        {/* Top armor plate - brushed metal look */}
        <rect x="115" y="195" width="170" height="12" rx="2" fill="url(#metalGradient)" stroke="#555" strokeWidth="1" />
        
        {/* Side armor panels */}
        <rect x="100" y="210" width="10" height="40" rx="2" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
        <rect x="290" y="210" width="10" height="40" rx="2" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
        
        {/* Mounting bolts */}
        <circle cx="130" cy="200" r="4" fill="#444" stroke="#555" strokeWidth="1" />
        <circle cx="200" cy="200" r="4" fill="#444" stroke="#555" strokeWidth="1" />
        <circle cx="270" cy="200" r="4" fill="#444" stroke="#555" strokeWidth="1" />
        
        {/* === VERTICAL DRUM SPINNER === */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: isHovered ? 0.1 : 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "200px 150px" }}
        >
          {/* Drum body */}
          <ellipse cx="200" cy="150" rx="30" ry="45" fill="url(#drumGradient)" stroke="#b45309" strokeWidth="3" />
          
          {/* Drum teeth/impactors - 4 around the drum */}
          <rect x="167" y="108" width="8" height="14" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          <rect x="225" y="108" width="8" height="14" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          <rect x="167" y="178" width="8" height="14" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          <rect x="225" y="178" width="8" height="14" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
        </motion.g>
        
        {/* Spinner mount bracket */}
        <rect x="185" y="185" width="30" height="18" rx="3" fill="#333" stroke="#444" strokeWidth="2" />
        <circle cx="200" cy="194" r="5" fill="#222" stroke="#444" strokeWidth="1" />
        
        {/* === ELECTRONICS === */}
        
        {/* Power LED */}
        <circle cx="140" cy="230" r="4" fill="#22c55e" className="animate-pulse" />
        
        {/* Receiver antenna */}
        <line x1="260" y1="210" x2="275" y2="175" stroke="#555" strokeWidth="2" />
        <circle cx="275" cy="172" r="4" fill="#f97316" className="animate-pulse" />
        
        {/* Link indicator LED */}
        <circle cx="260" cy="230" r="3" fill="#3b82f6" className="animate-pulse" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="25%" stopColor="#9ca3af" />
            <stop offset="50%" stopColor="#d1d5db" />
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
      
      {/* Spark effects - only show when hovered (spinning fast) */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-1/3 left-1/3 w-1 h-1 bg-yellow-300 rounded-full"
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1.5, 0],
              x: [0, -30, -60],
              y: [0, -20, -10],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 0.2,
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
              duration: 0.25,
              repeat: Infinity,
              repeatDelay: 0.3,
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
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 0.4,
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
