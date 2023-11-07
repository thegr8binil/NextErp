import { Orb } from "@/app/layout";
import Modal from "@/components/Modal";
const navBar = () => {
  return (
    <main className="p-4 flex items-center justify-between text-sm sm:text-md md:text-xl max-w-12xl w-screen border-b border-slate-400">
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <rect
            x="0.128492"
            y="0.128492"
            width="45.743"
            height="44.9721"
            rx="12.2067"
            fill="white"
            fill-opacity="0.3"
            stroke="#A0A0A0"
            stroke-width="0.256983"
          />
          <path
            d="M23 7.44971C14.2533 7.44971 9.85715 11.8534 9.85715 20.1538L9.85715 36.6561L17.1069 31.3901L17.1069 21.0351C17.1069 15.6098 18.7442 13.2442 23 13.2442C27.2103 13.2442 28.8918 15.6566 28.8918 21.0351L28.8918 31.3901L30.8807 32.8339L30.9869 32.9123L36.1429 36.6561L36.1429 20.1538C36.1429 11.9002 31.7455 7.44971 23 7.44971Z"
            fill="url(#paint0_linear_0_128)"
          />
          <path
            d="M36.1429 29.147L36.1429 37.0353L24.3971 28.4377C23.9887 28.139 23.4959 27.9779 22.9899 27.9779C22.4839 27.9779 21.991 28.139 21.5827 28.4377L9.85715 37.0353L9.85715 29.1002L19.4548 22.0882C20.4796 21.3386 21.7164 20.9346 22.9861 20.9346C24.2558 20.9346 25.4926 21.3386 26.5174 22.0882L36.1429 29.147Z"
            fill="url(#paint1_linear_0_128)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_128"
              x1="23"
              y1="33.743"
              x2="23"
              y2="14.2721"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F58323" />
              <stop offset="1" stop-color="#FBB03B" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_128"
              x1="23"
              y1="20.2081"
              x2="23"
              y2="33.9085"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0EA0CC" />
              <stop offset="1" stop-color="#1B50A3" />
            </linearGradient>
          </defs>
        </svg>
        <h1 className={`${Orb.className} font-semibold`}>NEXTERP</h1>
      </div>
      <div>
        <Modal buttonText="Contact Us" />
      </div>
    </main>
  );
};
export default navBar;
