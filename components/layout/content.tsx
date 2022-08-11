import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -20 },
  }
  return (
    <motion.article
      className="pt-4"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      style={{ position: 'relative' }}
      transition={{ duration: 0.2, type: 'easeInOut' }}
    >
      {children}
    </motion.article>
  )
}

export default Layout
