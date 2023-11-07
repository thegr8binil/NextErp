'use client'
import { Clash } from "@/app/layout";
import { motion } from "framer-motion";
const MFeatures = () => {
  return (
    <div>
      <main className="max-w-10xl flex flex-col-reverse gap-4 mt-24 px-5 items-center sm:flex-row xl:gap-48">
        <div className="flex flex-col gap-3 max-w-xl">
          <h1 className={`${Clash.className} text-2xl sm:text-4xl mt-4`}>
            Manage Your Tasks <br />
            <span className="bg-orange-100 p-1">Online</span>{" "}
            <span className="">Easily.</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Allows users to create and organize tasks in a centralized location.
            Users can categorize tasks based on priority, due dates, projects,
            or specific departments, enabling efficient task management and
            delegation.
          </p>
        </div>
        <div>
          <img src="a.png" alt="automation" className="" />
        </div>
      </main>
      <main className="max-w-10xl flex flex-col-reverse gap-4 mt-24 px-5 items-center sm:flex-row-reverse xl:gap-48">
        <div className="flex flex-col gap-3 max-w-xl">
          <h1 className={`${Clash.className} text-2xl sm:text-4xl mt-4`}>
            <span className="bg-orange-100 p-1">Keep</span> Track Of All <br />{" "}
            Your Financials.
          </h1>
          <p className="text-slate-600 text-lg">
            Helps businesses keep track of all their financials by providing
            comprehensive tools and functionalities for efficient financial
            management.
          </p>
        </div>
        <div>
          <img src="s.png" alt="automation" className="" />
        </div>
      </main>
      <main className="max-w-10xl flex flex-col-reverse gap-4 mt-24 px-5 items-center sm:flex-row xl:gap-48">
        <div className="flex flex-col gap-3 max-w-xl">
          <h1 className={`${Clash.className} text-2xl sm:text-4xl mt-4`}>
            More <span className="bg-orange-100 p-1">Connections,</span>
            <br /> To Your Business
          </h1>
          <p className="text-slate-600 text-lg ">
            Streamline the management of incoming and outgoing payments, track
            customer invoices, manage credit limits, and automate payment
            reminders.
          </p>
        </div>
        <div>
          <img src="d.png" alt="automation" className="" />
        </div>
      </main>
    </div>
  );
};
export default MFeatures;
