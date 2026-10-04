import { motion, useReducedMotion } from 'framer-motion'
import Img from './Img'
import { ease } from '../../lib/motion'

type Props = {
  id: string
  alt: string
  className?: string
  imgClassName?: string
  sizes?: string
  priority?: boolean
  delay?: number
}

/** Image that unveils with a vertical curtain and gentle settle. */
export default function ImageReveal({ id, alt, className = '', imgClassName = '', sizes, priority, delay = 0 }: Props) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      // Callers may position the frame absolutely; only default to `relative` when they don't.
      className={`${className.split(' ').includes('absolute') ? '' : 'relative'} overflow-hidden bg-stone-300/40 ${className}`}
      initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.3, ease, delay }}
    >
      <motion.div
        className="h-full w-full"
        initial={reduce ? false : { scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.8, ease, delay }}
      >
        <Img id={id} alt={alt} sizes={sizes} priority={priority} className={`h-full w-full object-cover ${imgClassName}`} />
      </motion.div>
    </motion.div>
  )
}
