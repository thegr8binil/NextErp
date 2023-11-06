import { Orb } from "@/app/layout";
const Footer = () => {
  return (
    <main>
      <div className="bg-blue-500">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 ">
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
            <h1 className={`${Orb.className} font-semibold text-white`}>
              NEXTERP
            </h1>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.9394 3C18.2804 3 19.5704 3.53 20.5194 4.481C21.4694 5.43 22.0004 6.71 22.0004 8.05V15.95C22.0004 18.74 19.7304 21 16.9394 21H7.0604C4.2694 21 2.0004 18.74 2.0004 15.95V8.05C2.0004 5.26 4.2594 3 7.0604 3H16.9394ZM18.0704 8.2C17.8604 8.189 17.6604 8.26 17.5094 8.4L13.0004 12C12.4204 12.481 11.5894 12.481 11.0004 12L6.5004 8.4C6.1894 8.17 5.7594 8.2 5.5004 8.47C5.2304 8.74 5.2004 9.17 5.4294 9.47L5.5604 9.6L10.1104 13.15C10.6704 13.59 11.3494 13.83 12.0604 13.83C12.7694 13.83 13.4604 13.59 14.0194 13.15L18.5304 9.54L18.6104 9.46C18.8494 9.17 18.8494 8.75 18.5994 8.46C18.4604 8.311 18.2694 8.22 18.0704 8.2Z"
                fill="white"
              />
            </svg>
            <h1 className="text-white">info@nexteons.com</h1>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
                fill="white"
              />
            </svg>
            <h1 className="text-white">+1 234 456 678 89</h1>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Footer;
