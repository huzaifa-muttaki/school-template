import type { Transition, Variants } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1] as const

export const transition = (delay = 0, duration = 0.9): Transition => ({ duration, delay, ease })

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: transition() },
}

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const viewport = { once: true, amount: 0.25 } as const
