import Modal from "@/components/Modal";
import { Clash } from "@/app/layout";
export default function Features() {
  return (
    <main className="max-w-12xl relative">
      <div className="flex flex-col p-5 gap-4 md:flex-row-reverse sm:items-center mt-2 lg:mt-14">
        <img src="Group.png" alt="hero" className=" md:w-96 lg:w-1/2" />
        <div className="sm:ml-4 max-w-2xl">
          <div className="flex gap-3 border-2 border-slate-300 p-5 rounded-3xl">
            <div>
              <img src="1.png" alt="hero" className="w-40 sm:w-24 mt-1" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">
                General Ledger Management
              </h1>
              <p className="font-normal text-slate-700">
                Maintain a central repository for recording and tracking
                financial transactions, enabling accurate and up-to-date
                reporting.
              </p>
            </div>
          </div>
          <div className="flex gap-3 border-2 border-slate-300 p-5 rounded-3xl mt-3">
            <div>
              <img src="2.png" alt="hero" className="w-40 sm:w-28 mt-1" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">
                Accounts Receivable and Payable
              </h1>
              <p className="font-normal text-slate-700">
                Streamline the management of incoming and outgoing payments,
                track customer invoices, manage credit limits, and automate
                payment reminders.
              </p>
            </div>
          </div>
          <div className="flex gap-3 border-2 border-slate-300 p-5 rounded-3xl mt-3">
            <div>
              <img src="3.png" alt="hero" className="w-40 sm:w-20 mt-1" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Fixed Asset Management</h1>
              <p className="font-normal text-slate-700">
                Track and manage company assets, including depreciation
                calculations, asset maintenance, and disposal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
