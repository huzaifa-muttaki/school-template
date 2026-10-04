import { motion, type HTMLMotionProps } from 'framer-motion'
import { transition, viewport } from '../../lib/motion'

type Props = HTMLMotionProps<'div'> & { delay?: number; y?: number }

/** Fades and lifts content into view once, on scroll. */
export default function Reveal({ delay = 0, y = 28, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={transition(delay)}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
