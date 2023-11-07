"use client";
import { Clash } from "@/app/layout";
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

const MFeatures = () => {
  return (
    <div>
      <main className="max-w-10xl flex flex-col-reverse gap-4 mt-24 px-5 items-center sm:flex-row xl:gap-48">
        <div className="flex flex-col gap-3 max-w-xl">
          <motion.h1
            className={`${Clash.className} text-2xl sm:text-4xl mt-4`}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
          >
            Manage Your Tasks <br />
            <span className="bg-orange-100 p-1">Online</span>{" "}
            <span className="">Easily.</span>
          </motion.h1>
          <motion.p
            className="text-slate-600 text-lg"
            variants={fadeInAnimationdelay}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
          >
            Allows users to create and organize tasks in a centralized location.
            Users can categorize tasks based on priority, due dates, projects,
            or specific departments, enabling efficient task management and
            delegation.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInAnimationdelay}
          initial="initial"
          whileInView="animate"
          delay={1}
          viewport={{ once: true }}
        >
          <img src="a.png" alt="automation" className="" />
        </motion.div>
      </main>
      <main className="max-w-10xl flex flex-col-reverse gap-4 mt-24 px-5 items-center sm:flex-row-reverse xl:gap-48">
        <div className="flex flex-col gap-3 max-w-xl">
          <motion.h1
            className={`${Clash.className} text-2xl sm:text-4xl mt-4`}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
          >
            <span className="bg-orange-100 p-1">Keep</span> Track Of All <br />{" "}
            Your Financials.
          </motion.h1>
          <motion.p
            className="text-slate-600 text-lg"
            variants={fadeInAnimationdelay}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
          >
            Helps businesses keep track of all their financials by providing
            comprehensive tools and functionalities for efficient financial
            management.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInAnimationdelay}
          initial="initial"
          whileInView="animate"
          delay={1}
          viewport={{ once: true }}
        >
          <img src="s.png" alt="automation" className="" />
        </motion.div>
      </main>
      <main className="max-w-10xl flex flex-col-reverse gap-4 mt-24 px-5 items-center sm:flex-row xl:gap-48">
        <div className="flex flex-col gap-3 max-w-xl">
          <motion.h1
            className={`${Clash.className} text-2xl sm:text-4xl mt-4`}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
          >
            More <span className="bg-orange-100 p-1">Connections,</span>
            <br /> To Your Business
          </motion.h1>
          <motion.p
            className="text-slate-600 text-lg "
            variants={fadeInAnimationdelay}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
          >
            Streamline the management of incoming and outgoing payments, track
            customer invoices, manage credit limits, and automate payment
            reminders.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInAnimationdelay}
          initial="initial"
          whileInView="animate"
          delay={1}
          viewport={{ once: true }}
        >
          <img src="d.png" alt="automation" className="" />
        </motion.div>
      </main>
    </div>
  );
};
export default MFeatures;
