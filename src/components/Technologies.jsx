import { FaNodeJs } from "react-icons/fa"
import { DiRedis } from "react-icons/di"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb"
import {animate, motion} from 'framer-motion'

const iconVariants = (duration) => ({
    animate:{
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
       }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className="my-20 text-center text-4xl">Technologies
         </motion.h2>
        <motion.div
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1.5}}
         className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <div className="p-4">
                <TbBrandNextjs className="text-7xl" />
            </div>
            <div className="p-4">
                <SiMongodb className="text-7xl test-cyan-500" />
            </div>
            <div className="p-4">
                <DiRedis className="text-7xl text-red-700" />
            </div>
            <div className="p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </div>
            <div className="p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700" />
            </div>
        </motion.div>
    </div>
  )
}

export default Technologies