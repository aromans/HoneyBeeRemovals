import { layout } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'

const Layout = ({ children, title }) => (
    <motion.article
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ duration: 0.4, type: 'easeInOut' }}
        style={{ position: 'relative' }}
    >
        <>
            {title && (
                <Head>
                    <title>{title}</title>
                </Head>
            )}
            {children}
        </>
    </motion.article>
)

export default Layout