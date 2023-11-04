import { Clash } from "@/app/layout";
export const MainBar = () => {
  return (
    <mian className="mt-8 max-w-10xl">
      <div className="flex items-center justify-center">
        <h1
          className={`${Clash.className} text-2xl sm:text-4xl mt-4 text-center pb-6`}
        >
          NEXTERP Has The Ability To Serve <br />
          Any
          <span className="bg-orange-100 p-1">Business Segment</span>
        </h1>
      </div>
      <div className="flex">
      <div className=" bg-white flex flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-4 sm:flex-row">
        <div className="flex gap-3  rounded-3xl mt-3">
          <img
            src="q.png"
            alt="hero"
            className="w-8 h-8 sm:w-16 sm:h-16 mt-1"
          />
          <div className="flex flex-col justify-center">
          <h1
          className={`${Clash.className} text-xl`}
        >
          Financial Reporting
        </h1>
            <p className="font-normal text-sm">
              Generate financial statements, including balance sheets, income
              statements Etc
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-white flex flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-4 sm:flex-row">
        <div className="flex gap-3  rounded-3xl mt-3">
          <img
            src="q.png"
            alt="hero"
            className="w-8 h-8 sm:w-16 sm:h-16 mt-1"
          />
          <div className="flex flex-col justify-center">
          <h1
          className={`${Clash.className} text-xl`}
        >
          Financial Reporting
        </h1>
            <p className="font-normal text-sm">
              Generate financial statements, including balance sheets, income
              statements Etc
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-white flex flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-4 sm:flex-row">
        <div className="flex gap-3  rounded-3xl mt-3">
          <img
            src="q.png"
            alt="hero"
            className="w-8 h-8 sm:w-16 sm:h-16 mt-1"
          />
          <div className="flex flex-col justify-center">
          <h1
          className={`${Clash.className} text-xl`}
        >
          Financial Reporting
        </h1>
            <p className="font-normal text-sm">
              Generate financial statements, including balance sheets, income
              statements Etc
            </p>
          </div>
        </div>
      </div>
      </div>
      
    </mian>
  );
};
