"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function BattlebotHero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative w-72 h-56 mx-auto cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />
      
      {/* Bot container with isometric perspective */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: "500px" }}
      >
        
        {/* Ground shadow */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-black/30 rounded-full blur-lg" />
        
        {/* 3D Bot Assembly */}
        <div 
          className="relative"
          style={{ 
            transform: "rotateX(15deg)",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Main chassis - rectangular box with depth */}
          <div className="relative w-32 h-20">
            {/* Top face */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-sm border border-gray-500/50"
              style={{ transform: "translateZ(8px)" }}
            >
              {/* Vent slots */}
              <div className="absolute top-3 left-4 right-4 space-y-1.5">
                <div className="h-1 bg-gray-700/50 rounded-full" />
                <div className="h-1 bg-gray-700/50 rounded-full" />
                <div className="h-1 bg-gray-700/50 rounded-full" />
              </div>
              {/* LEDs */}
              <div className="absolute bottom-2 left-3 w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse" />
              <div className="absolute bottom-2 right-3 w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
              {/* Motor mount for spinner */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-700 rounded-full border-2 border-gray-500 shadow-inner" />
            </div>
            
            {/* Front face (wedge) */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-500 to-gray-700 rounded-b-sm"
              style={{ 
                transform: "rotateX(-60deg) translateY(2px)",
                transformOrigin: "bottom"
              }}
            />
            
            {/* Side faces for depth */}
            <div className="absolute top-0 bottom-0 -left-1 w-2 bg-gradient-to-l from-gray-600 to-gray-800 rounded-l-sm" />
            <div className="absolute top-0 bottom-0 -right-1 w-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-r-sm" />
          </div>

          {/* Wheels - positioned at corners */}
          {/* Front left */}
          <div className="absolute -left-4 top-1 w-5 h-8 bg-gray-900 rounded-md border border-gray-700 shadow-lg">
            <div className="absolute inset-1 rounded bg-gray-800 flex items-center justify-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
            </div>
          </div>
          {/* Front right */}
          <div className="absolute -right-4 top-1 w-5 h-8 bg-gray-900 rounded-md border border-gray-700 shadow-lg">
            <div className="absolute inset-1 rounded bg-gray-800 flex items-center justify-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
            </div>
          </div>
          {/* Rear left */}
          <div className="absolute -left-3 bottom-1 w-4 h-6 bg-gray-900 rounded-md border border-gray-700 shadow-lg">
            <div className="absolute inset-0.5 rounded bg-gray-800 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            </div>
          </div>
          {/* Rear right */}
          <div className="absolute -right-3 bottom-1 w-4 h-6 bg-gray-900 rounded-md border border-gray-700 shadow-lg">
            <div className="absolute inset-0.5 rounded bg-gray-800 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            </div>
          </div>

          {/* Spinning bar weapon - centered on motor mount */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: "translateZ(12px)" }}
            animate={{ rotate: 360 }}
            transition={{
              duration: isHovered ? 0.12 : 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div 
              className="w-40 h-4 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-sm relative"
              style={{
                boxShadow: isHovered 
                  ? "0 0 25px rgba(249, 115, 22, 0.9), 0 0 50px rgba(249, 115, 22, 0.5)" 
                  : "0 0 12px rgba(249, 115, 22, 0.5)"
              }}
            >
              {/* Highlight stripe */}
              <div className="absolute inset-x-4 top-0.5 h-1.5 bg-orange-300/60 rounded-full" />
              {/* Teeth/notches */}
              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-3 bg-orange-300/50 rounded-sm" />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-3 bg-orange-300/50 rounded-sm" />
              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-700 rounded-full border border-gray-500" />
            </div>
          </motion.div>
        </div>
        
        {/* Sparks when hovering */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-12 left-12 w-2 h-2 bg-yellow-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0],
                x: [0, -25],
                y: [0, -15],
              }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-12 right-12 w-2 h-2 bg-orange-300 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.3, 0],
                x: [0, 25],
                y: [0, -12],
              }}
              transition={{ duration: 0.25, repeat: Infinity, delay: 0.1 }}
            />
            <motion.div
              className="absolute top-8 left-1/2 w-1.5 h-1.5 bg-yellow-300 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                y: [0, -20],
              }}
              transition={{ duration: 0.2, repeat: Infinity, delay: 0.15 }}
            />
          </>
        )}
      </div>
      
      {/* Hover hint */}
      <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        Hover to spin up
      </div>
    </div>
  )
}
