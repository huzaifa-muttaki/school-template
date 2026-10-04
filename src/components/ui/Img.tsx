import { useState, type ImgHTMLAttributes } from 'react'
import { img, srcSet } from '../../lib/image'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  id: string
  alt: string
  /** Load eagerly with high fetch priority (above-the-fold imagery). */
  priority?: boolean
  widths?: number[]
}

/** Responsive, lazy-loaded image with a soft fade-in once decoded. */
export default function Img({ id, alt, priority, widths, sizes = '100vw', className = '', ...rest }: Props) {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      src={img(id, 1280)}
      srcSet={srcSet(id, widths)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      // React 18 warns on camelCase fetchPriority; pass the lowercase DOM attribute.
      {...{ fetchpriority: priority ? 'high' : 'auto' }}
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-700 ease-lux ${loaded || priority ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...rest}
    />
  )
}
