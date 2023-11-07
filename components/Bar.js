"use client";
import { motion } from "framer-motion";
const fadeInAnimationdelay = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
export const Bar = () => {
  return (
    <motion.mian
      className="mt-8"
      variants={fadeInAnimationdelay}
      initial="initial"
      whileInView="animate"
      delay={1}
      viewport={{ once: true }}
    >
      <div className="bg-blue-500 shadow-2xl shadow-blue-500 flex flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-4 sm:flex-row">
        <div className="flex gap-3 p-5 rounded-3xl mt-3">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold text-white">50+</h1>
            <p className="font-normal text-white text-center text-sm">
              50 features, it covers all aspects of accounting,financial
              management, including general ledger, etc
            </p>
          </div>
        </div>
        <div className="flex gap-3 p-5 rounded-3xl mt-3">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold text-white">2000+</h1>
            <p className="font-normal text-white text-center text-sm">
              Our Accounts ERP software has a proven track record of serving
              over 2000 satisfied clients.
            </p>
          </div>
        </div>
        <div className="flex gap-3 p-5 rounded-3xl mt-3">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold text-white">100%</h1>
            <p className="font-normal text-white text-center text-sm">
              While no software can be 100% customizable to every user's needs,
              a highly customizable Accounts ERP
            </p>
          </div>
        </div>
      </div>
    </motion.mian>
  );
};
