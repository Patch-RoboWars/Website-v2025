"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  life: number
  maxLife: number
}

export function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Disable image smoothing for performance
    ctx.imageSmoothingEnabled = false

    // Set canvas to full screen with device pixel ratio consideration
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Reduced particle count for better performance
    const particles: Particle[] = []
    const maxParticles = 30
    const colors = ["#ff7300", "#ff9d00", "#ffb700"]

    // Create initial particles
    for (let i = 0; i < maxParticles; i++) {
      createParticle()
    }

    function createParticle() {
      const particle: Particle = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.1,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      }
      particles.push(particle)
    }

    function updateParticles() {
      const width = window.innerWidth
      const height = window.innerHeight
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        p.x += p.speedX
        p.y += p.speedY
        p.life++
        p.opacity = (1 - p.life / p.maxLife) * 0.4

        if (p.life >= p.maxLife || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          particles.splice(i, 1)
          createParticle()
        }
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      
      // No shadow blur - major performance improvement
      ctx.shadowBlur = 0
      
      for (const p of particles) {
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size)
      }
      
      ctx.globalAlpha = 1
    }

    // Throttled animation loop - 30fps instead of 60fps
    let lastTime = 0
    const fps = 30
    const frameInterval = 1000 / fps

    const animate = (currentTime: number) => {
      animationRef.current = requestAnimationFrame(animate)
      
      const deltaTime = currentTime - lastTime
      if (deltaTime < frameInterval) return
      
      lastTime = currentTime - (deltaTime % frameInterval)
      updateParticles()
      drawParticles()
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
