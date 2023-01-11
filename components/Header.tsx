import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = ({}: Props) => {
  return (
    <header className='sticky flex justify-between items-start xl:items-center top-0 p-5 max-w-7xl z-10'>
      <motion.div
        initial={{
          x: -360,
          opacity: 0,
        }}
        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex items-center'
      >
        <SocialIcon 
          url='https://github.com/JoeyG214'
          network='github'
          fgColor='gray'
          bgColor='transparent'      
        />
        <SocialIcon 
          url='https://github.com/JoeyG214'
          network='linkedin'
          fgColor='gray'
          bgColor='transparent'      
        />
      </motion.div>
    </header>
  )
}

export default Header