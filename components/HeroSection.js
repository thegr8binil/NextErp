"use client";
import Modal from "@/components/Modal";
import { Clash } from "@/app/layout";
import { motion } from "framer-motion";
const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
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
const fadeInAnimationdelay1 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const ScaleinAnimation = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export default function HeroSection() {
  return (
    <main className="max-w-12xl relative">
      <div className="flex flex-col p-5 gap-4 text-2xl font-medium md:flex-row-reverse sm:items-center md:text-3xl mt-2 lg:mt-14 xl:text-3xl 2xl:text-5xl">
        <motion.img
          src="hero.png"
          alt="hero"
          className=" md:w-96 lg:w-1/2"
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          delay={1}
          viewport={{ once: true }}
        />
        <div className="sm:ml-4">
          <motion.h1
            className={`${Clash.className} mt-4 leading-tight`}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Efficiently Manage Your Business with Customizable Cloud-based
            Accounting ERP
          </motion.h1>
          <motion.h1
            className="text-sm font-normal mt-3 sm:text-md md:text-lg"
            variants={fadeInAnimationdelay}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
          >
            Designed to revolutionize the way you manage your business. Our
            customizable software provides you with the tools you need to
            streamline your financial management and optimize your business
            operations, all in one comprehensive platform
          </motion.h1>
          <motion.div
            className="flex items-center justify-start text-lg font-normal mt-2 "
            variants={fadeInAnimationdelay1}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
          >
            <Modal buttonText="Try Free Demo" />
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <motion.img
          src="Person.png"
          alt="hero-bg"
          className="px-10 "
          variants={ScaleinAnimation}
          initial="initial"
          whileInView="animate"
          delay={1}
          viewport={{ once: true }}
        />
        <motion.h1
          className={`${Clash.className} text-xl sm:text-3xl mt-4`}
          variants={fadeInAnimationdelay1}
          initial="initial"
          whileInView="animate"
          delay={1}
          viewport={{ once: true }}
        >
          One <span className="bg-orange-100 p-1">Platform</span> For Any
          Business
        </motion.h1>
      </div>
    </main>
  );
}
