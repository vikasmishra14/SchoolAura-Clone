import { motion } from "framer-motion";

const Container = ({ children }) => {
  return (
    <motion.div
      className="contain"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}   
    >
      {children}
    </motion.div>
  );
};

export default Container;
