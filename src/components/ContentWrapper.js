import { motion } from "framer-motion";

const ContentWrapper = ({content}) => {
    return ( 
        <motion.div initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 1}} transition={{duration: 0.80, delay: 0.20}}>
            {content}
        </motion.div>
     );
}
 
export default ContentWrapper;