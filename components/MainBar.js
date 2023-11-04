import { Clash } from "@/app/layout";
export const MainBar = () => {
  return (
    <mian className="mt-8 max-w-10xl">
      <div className="flex items-center justify-center">
        <h1
          className={`${Clash.className} text-2xl sm:text-4xl mt-4 text-center pb-6 mb-4`}
        >
          NEXTERP Has The Ability To Serve <br />
          Any
          <span className="bg-orange-100 p-1">Business Segment</span>
        </h1>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-0">
        <div className=" bg-white flex flex-1 flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-4 sm:flex-row">
          <div className="flex gap-3  rounded-3xl mt-3">
            <img
              src="q.png"
              alt="hero"
              className="w-8 h-8 sm:w-16 sm:h-16 mt-1"
            />
            <div className="flex flex-col justify-center">
              <h1 className={`${Clash.className} text-xl`}>
                Financial Reporting
              </h1>
              <p className="font-normal text-sm">
                Generate financial statements, including balance sheets, income
                statements Etc
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white flex flex-1 flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-4 sm:flex-row">
          <div className="flex gap-3  rounded-3xl mt-3">
            <img
              src="w.png"
              alt="hero"
              className="w-8 h-8 sm:w-16 sm:h-16 mt-1"
            />
            <div className="flex flex-col justify-center">
              <h1 className={`${Clash.className} text-xl`}>
                Bank Reconciliation
              </h1>
              <p className="font-normal text-sm">
                Match bank statements with recorded transactions
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white flex flex-1 flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-4 sm:flex-row">
          <div className="flex gap-3  rounded-3xl mt-3">
            <img
              src="e.png"
              alt="hero"
              className="w-8 h-8 sm:w-16 sm:h-16 mt-1"
            />
            <div className="flex flex-col justify-center">
              <h1 className={`${Clash.className} text-xl`}>
                Multi-Company Support
              </h1>
              <p className="font-normal text-sm">
                Handle transactions in different currencies and manage multiple
                company accounts
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-0 mt-3">
        <div className=" bg-white flex flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-4 sm:flex-row flex-1">
          <div className="flex gap-3 flex-1 rounded-3xl mt-3">
            <img
              src="r.png"
              alt="hero"
              className="w-8 h-8 sm:w-16 sm:h-16 mt-1"
            />
            <div className="flex flex-col justify-center">
              <h1 className={`${Clash.className} text-xl`}>Tax Management</h1>
              <p className="font-normal text-sm">
                Automate tax calculations, generate tax reports,
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white flex flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-4 sm:flex-row flex-1">
          <div className="flex gap-3 flex-1  rounded-3xl mt-3">
            <img
              src="t.png"
              alt="hero"
              className="w-8 h-8 sm:w-16 sm:h-16 mt-1"
            />
            <div className="flex flex-col justify-center">
              <h1 className={`${Clash.className} text-xl`}>Security</h1>
              <p className="font-normal text-sm">
                Implement robust security measures to protect sensitive
                financial data
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white flex flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-4 sm:flex-row flex-1">
          <div className="flex gap-3 flex-1  rounded-3xl mt-3">
            <img
              src="y.png"
              alt="hero"
              className="w-8 h-8 sm:w-16 sm:h-16 mt-1"
            />
            <div className="flex flex-col justify-center">
              <h1 className={`${Clash.className} text-xl`}>
                Sales Order Management
              </h1>
              <p className="font-normal text-sm">
                Manage sales orders, and invoices, while integrating with
                inventory
              </p>
            </div>
          </div>
        </div>
      </div>
    </mian>
  );
};
