import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import { Clash } from "./layout"
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
    <NavBar/>
    <HeroSection/>
    <Features/>
    </main>
  )
}
