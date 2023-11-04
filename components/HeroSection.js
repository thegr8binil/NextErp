import Modal from "@/components/Modal";
export default function HeroSection() {
  return (
    <main className="max-w-12xl relative">
      <div className="flex flex-col p-5 gap-4 text-2xl font-medium md:flex-row-reverse sm:items-center md:text-3xl mt-2 lg:mt-14 xl:text-3xl 2xl:text-5xl">
        <img src="hero.png" alt="hero" className=" md:w-96 lg:w-1/2" />
        <div className="sm:ml-4">
          <h1 className="leading-tight">
            Efficiently Manage Your Business with Customizable Cloud-based
            Accounting ERP
          </h1>
          <h1 className="text-sm font-normal mt-3 sm:text-md md:text-lg">
            Designed to revolutionize the way you manage your business. Our
            customizable software provides you with the tools you need to
            streamline your financial management and optimize your business
            operations, all in one comprehensive platform
          </h1>
          <div className="flex items-center justify-start text-lg font-normal mt-2 ">
            <div></div>
            <Modal buttonText="Try free demo" />
          </div>
        </div>
      </div>
    </main>
  );
}
