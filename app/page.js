import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import { Bar } from "@/components/Bar"
import MFeatures from "@/components/MFeatures"
import { MainBar } from "@/components/MainBar"
import { Test } from "@/components/Test"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
    <NavBar/>
    <HeroSection/>
    <Features/>
    <Bar/>
    <MFeatures/>
    <MainBar/>
    <Test/>
    <Footer/>
    </main>
  )
}
