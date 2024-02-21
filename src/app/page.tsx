import FeaturedSection from "@/components/layout/FeaturedSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import TrendingSection from "@/components/layout/TrendingSection";
import { Content } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedSection />
      <TrendingSection />
      <Footer />
    </>
  );
}
