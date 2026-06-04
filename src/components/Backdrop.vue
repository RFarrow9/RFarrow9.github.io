<template>
  <canvas ref="canvas" class="backdrop-canvas" aria-hidden="true"></canvas>
</template>

<script>
// Subtle interactive constellation behind the CV sheet.
// Screen-only (hidden in print), pauses when the tab is hidden, and renders a
// single static frame when the user prefers reduced motion.
const LINK_DIST = 155 // px: draw a line between two particles closer than this
const REPEL_R2 = 20000 // px^2: pointer "push" radius, squared

export default {
  name: 'Backdrop',
  data() {
    return {
      ctx: null,
      raf: null,
      particles: [],
      pointer: { x: -9999, y: -9999 },
      width: 0,
      height: 0,
      dpr: 1,
      reduced: false
    }
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d')
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.resize()
    this.initParticles()
    window.addEventListener('resize', this.resize)
    window.addEventListener('mousemove', this.onMove)
    document.addEventListener('visibilitychange', this.onVisibility)
    if (this.reduced) {
      this.draw()
    } else {
      this.loop()
    }
  },
  beforeUnmount() {
    cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('mousemove', this.onMove)
    document.removeEventListener('visibilitychange', this.onVisibility)
  },
  methods: {
    resize() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 2)
      this.width = window.innerWidth
      this.height = window.innerHeight
      const c = this.$refs.canvas
      c.width = this.width * this.dpr
      c.height = this.height * this.dpr
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
    },
    initParticles() {
      const count = Math.min(120, Math.max(45, Math.round((this.width * this.height) / 15000)))
      this.particles = Array.from({ length: count }, () => ({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38,
        r: 1.4 + Math.random() * 1.9,
        color: Math.random() < 0.18 ? '#f7b600' : Math.random() < 0.5 ? '#1a1f71' : '#3b41a8'
      }))
    },
    onMove(e) {
      this.pointer.x = e.clientX
      this.pointer.y = e.clientY
    },
    onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(this.raf)
      } else if (!this.reduced) {
        this.loop()
      }
    },
    step() {
      for (const p of this.particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > this.width) p.vx *= -1
        if (p.y < 0 || p.y > this.height) p.vy *= -1
        const dx = p.x - this.pointer.x
        const dy = p.y - this.pointer.y
        const d2 = dx * dx + dy * dy
        if (d2 < REPEL_R2) {
          const d = Math.sqrt(d2) || 1
          const f = ((REPEL_R2 - d2) / REPEL_R2) * 1.1
          p.x += (dx / d) * f
          p.y += (dy / d) * f
        }
      }
    },
    draw() {
      const ctx = this.ctx
      const ps = this.particles
      ctx.clearRect(0, 0, this.width, this.height)
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dist = Math.hypot(ps[i].x - ps[j].x, ps[i].y - ps[j].y)
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(140, 150, 225, ${(1 - dist / LINK_DIST) * 0.4})`
            ctx.lineWidth = 1.1
            ctx.beginPath()
            ctx.moveTo(ps[i].x, ps[i].y)
            ctx.lineTo(ps[j].x, ps[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 0.8
      for (const p of ps) {
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    },
    loop() {
      this.step()
      this.draw()
      this.raf = requestAnimationFrame(this.loop)
    }
  }
}
</script>

<style scoped>
.backdrop-canvas {
  position: fixed;
  inset: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

@media print {
  .backdrop-canvas {
    display: none !important;
  }
}
</style>
