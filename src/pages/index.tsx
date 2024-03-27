import { Context } from "@/context/Context";
import Image from "next/image";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import Search from "@/components/Search";
import News from "@/components/News";


export default function Home() {
  const {darkMode, setDarkMode} = useContext(Context)
  return (
   <main className="w-full h-100vh mx-auto relative">
    <Navbar />
    <Search />
    <News />
  </main>
  );
}
