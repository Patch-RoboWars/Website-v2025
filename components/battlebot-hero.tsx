"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function BattlebotHero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative w-64 h-48 mx-auto cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />
      
      {/* Bot container */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Ground shadow */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/40 rounded-full blur-md" />
        
        {/* Chassis - simple wedge shape */}
        <div className="relative">
          {/* Main body */}
          <div 
            className="w-28 h-16 bg-gradient-to-b from-gray-500 to-gray-700 rounded-sm relative"
            style={{
              clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
            }}
          >
            {/* Top surface details */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-400/40 rounded" />
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-400/40 rounded" />
            
            {/* LEDs */}
            <div className="absolute bottom-2 left-3 w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse" />
            <div className="absolute bottom-2 right-3 w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
          </div>
          
          {/* Wheels - front pair */}
          <div className="absolute -left-3 top-1 w-4 h-6 bg-gray-900 rounded-sm border border-gray-700">
            <div className="absolute inset-0.5 bg-orange-500/70 rounded-sm" />
          </div>
          <div className="absolute -right-3 top-1 w-4 h-6 bg-gray-900 rounded-sm border border-gray-700">
            <div className="absolute inset-0.5 bg-orange-500/70 rounded-sm" />
          </div>
          
          {/* Wheels - rear pair */}
          <div className="absolute -left-2 bottom-0 w-3 h-5 bg-gray-900 rounded-sm border border-gray-700">
            <div className="absolute inset-0.5 bg-orange-500/70 rounded-sm" />
          </div>
          <div className="absolute -right-2 bottom-0 w-3 h-5 bg-gray-900 rounded-sm border border-gray-700">
            <div className="absolute inset-0.5 bg-orange-500/70 rounded-sm" />
          </div>
          
          {/* Spinner mount */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-700 rounded-full border-2 border-gray-600 shadow-md z-10" />
        </div>
        
        {/* Spinning bar weapon */}
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2"
          animate={{ rotate: 360 }}
          transition={{
            duration: isHovered ? 0.15 : 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-36 h-3 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-sm relative"
            style={{
              boxShadow: isHovered 
                ? "0 0 20px rgba(249, 115, 22, 0.8), 0 0 40px rgba(249, 115, 22, 0.4)" 
                : "0 0 10px rgba(249, 115, 22, 0.4)"
            }}
          >
            {/* Highlight */}
            <div className="absolute inset-x-2 top-0.5 h-1 bg-orange-300/50 rounded-full" />
            {/* End caps */}
            <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-2 bg-orange-300/60 rounded-sm" />
            <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-2 bg-orange-300/60 rounded-sm" />
          </div>
        </motion.div>
        
        {/* Sparks when hovering */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-6 left-8 w-1.5 h-1.5 bg-yellow-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0],
                x: [0, -20],
                y: [0, -10],
              }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-6 right-8 w-1.5 h-1.5 bg-orange-300 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0],
                x: [0, 20],
                y: [0, -8],
              }}
              transition={{ duration: 0.25, repeat: Infinity, delay: 0.1 }}
            />
            <motion.div
              className="absolute top-4 left-1/2 w-1 h-1 bg-yellow-300 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                y: [0, -15],
              }}
              transition={{ duration: 0.2, repeat: Infinity, delay: 0.15 }}
            />
          </>
        )}
      </div>
      
      {/* Hover hint */}
      <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        Hover to spin up
      </div>
    </div>
  )
}
