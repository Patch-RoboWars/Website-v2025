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
      style={{ perspective: "800px" }}
    >
      {/* Glow effect behind the bot */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-orange-600/5 to-transparent rounded-full blur-3xl" />
      
      {/* Arena floor reflection */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-orange-500/10 to-transparent blur-xl rounded-full" />
      
      {/* 3D Bot Container */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          transformStyle: "preserve-3d",
          transform: "rotateX(25deg) rotateY(-10deg)",
        }}
      >
        {/* Shadow */}
        <div 
          className="absolute w-48 h-32 bg-black/40 rounded-full blur-lg"
          style={{ transform: "translateY(80px) translateZ(-50px) rotateX(90deg)" }}
        />
        
        {/* === SIMPLE BOX CHASSIS === */}
        <div 
          className="relative"
          style={{ 
            width: "200px",
            height: "50px",
            transformStyle: "preserve-3d",
            transform: "translateY(20px)"
          }}
        >
          {/* Top face */}
          <div 
            className="absolute w-full h-full"
            style={{ 
              background: "linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)",
              border: "2px solid #555",
              transform: "translateZ(25px)",
            }}
          >
            {/* Vents */}
            <div className="flex gap-3 justify-center mt-3">
              <div className="w-8 h-2 bg-black/60 rounded-sm" />
              <div className="w-8 h-2 bg-black/60 rounded-sm" />
              <div className="w-8 h-2 bg-black/60 rounded-sm" />
            </div>
            {/* LEDs */}
            <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute top-2 right-3 w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
          
          {/* Bottom face */}
          <div 
            className="absolute w-full h-full bg-neutral-900"
            style={{ transform: "translateZ(-25px)" }}
          />
          
          {/* Front face */}
          <div 
            className="absolute bg-neutral-700"
            style={{ 
              width: "200px",
              height: "50px",
              transform: "rotateX(90deg) translateZ(-25px)",
              background: "linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%)",
              borderTop: "2px solid #555",
            }}
          />
          
          {/* Back face */}
          <div 
            className="absolute bg-neutral-800"
            style={{ 
              width: "200px",
              height: "50px",
              transform: "rotateX(-90deg) translateZ(-25px)",
              background: "linear-gradient(0deg, #3a3a3a 0%, #2a2a2a 100%)",
            }}
          />
          
          {/* Left face */}
          <div 
            className="absolute"
            style={{ 
              width: "50px",
              height: "50px",
              left: "-25px",
              transform: "rotateY(-90deg)",
              background: "linear-gradient(90deg, #2a2a2a 0%, #3a3a3a 100%)",
              borderLeft: "2px solid #444",
            }}
          />
          
          {/* Right face */}
          <div 
            className="absolute"
            style={{ 
              width: "50px",
              height: "50px",
              right: "-25px",
              transform: "rotateY(90deg)",
              background: "linear-gradient(-90deg, #2a2a2a 0%, #3a3a3a 100%)",
              borderRight: "2px solid #444",
            }}
          />
          
          {/* === 4 WHEELS === */}
          
          {/* Front Left Wheel */}
          <div 
            className="absolute"
            style={{ 
              width: "20px",
              height: "30px",
              left: "-15px",
              top: "-5px",
              transformStyle: "preserve-3d",
              transform: "rotateY(90deg) translateZ(-10px)",
            }}
          >
            <div 
              className="w-full h-full rounded-md bg-neutral-900 border-2 border-neutral-700"
              style={{ boxShadow: "inset 0 0 8px rgba(0,0,0,0.8)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
              </div>
            </div>
          </div>
          
          {/* Front Right Wheel */}
          <div 
            className="absolute"
            style={{ 
              width: "20px",
              height: "30px",
              right: "-15px",
              top: "-5px",
              transformStyle: "preserve-3d",
              transform: "rotateY(90deg) translateZ(10px)",
            }}
          >
            <div 
              className="w-full h-full rounded-md bg-neutral-900 border-2 border-neutral-700"
              style={{ boxShadow: "inset 0 0 8px rgba(0,0,0,0.8)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
              </div>
            </div>
          </div>
          
          {/* Back Left Wheel */}
          <div 
            className="absolute"
            style={{ 
              width: "20px",
              height: "30px",
              left: "25px",
              top: "-5px",
              transformStyle: "preserve-3d",
              transform: "rotateY(90deg) translateZ(-35px)",
            }}
          >
            <div 
              className="w-full h-full rounded-md bg-neutral-900 border-2 border-neutral-700"
              style={{ boxShadow: "inset 0 0 8px rgba(0,0,0,0.8)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
              </div>
            </div>
          </div>
          
          {/* Back Right Wheel */}
          <div 
            className="absolute"
            style={{ 
              width: "20px",
              height: "30px",
              right: "25px",
              top: "-5px",
              transformStyle: "preserve-3d",
              transform: "rotateY(90deg) translateZ(35px)",
            }}
          >
            <div 
              className="w-full h-full rounded-md bg-neutral-900 border-2 border-neutral-700"
              style={{ boxShadow: "inset 0 0 8px rgba(0,0,0,0.8)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
              </div>
            </div>
          </div>
          
          {/* === SPINNING BAR WEAPON === */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ 
              top: "-30px",
              transformStyle: "preserve-3d",
            }}
            animate={{ rotateY: 360 }}
            transition={{
              duration: isHovered ? 0.15 : 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Spinner bar */}
            <div 
              className="relative"
              style={{ 
                width: "180px",
                height: "16px",
                background: "linear-gradient(90deg, #6b7280 0%, #9ca3af 20%, #d1d5db 50%, #9ca3af 80%, #6b7280 100%)",
                borderRadius: "2px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                border: "1px solid #555",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Bar thickness (3D depth) */}
              <div 
                className="absolute w-full"
                style={{
                  height: "8px",
                  background: "linear-gradient(90deg, #555 0%, #666 50%, #555 100%)",
                  transform: "rotateX(90deg) translateZ(8px)",
                  top: "0",
                }}
              />
              
              {/* Impact teeth */}
              <div 
                className="absolute -left-3 top-1/2 -translate-y-1/2"
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderRight: "15px solid #7f8c8d",
                }}
              />
              <div 
                className="absolute -right-3 top-1/2 -translate-y-1/2"
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "15px solid #7f8c8d",
                }}
              />
              
              {/* Center hub */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
                style={{
                  background: "radial-gradient(circle, #444 0%, #222 100%)",
                  border: "2px solid #555",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Spark effects when spinning fast */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-[35%] left-[15%] w-2 h-2 bg-yellow-300 rounded-full"
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
            className="absolute top-[35%] right-[15%] w-2 h-2 bg-orange-300 rounded-full"
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
        </>
      )}
      
      {/* Hover hint */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        Hover to spin up
      </div>
    </div>
  )
}
