import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const pop = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
});

export const Clash = localFont({src : '../public/font/ClashDisplaySemibold.woff2', variable: '--clash-display-semibold'})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={pop.className}
        style={{
          backgroundImage: 'url("/back.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
        }}
      >
        {children}
      </body>
    </html>
  );
}
