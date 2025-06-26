"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Main content wrapper */}
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col">
        {/* Hero Section */}
        <section className="w-full max-w-4xl mx-auto pt-24 pb-12 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Crafting Seamless<br />Mobile Experiences
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-neutral-400 max-w-2xl">
            I'm M.Abdullah Waseem, a Flutter developer, where I craft intuitive mobile experiences. After hours, I build my own projects.
          </p>
          <div className="mt-8">
            <Link href="/about">
              <Button size="lg" className="rounded-full px-6 py-2 font-semibold flex items-center gap-2 bg-neutral-800 text-white hover:bg-neutral-700">
                <span>About me</span>
              </Button>
            </Link>
          </div>
        </section>

        {/* Project Card: HiTechie */}
        <section className="w-full flex flex-col items-center px-4">
          <div className="rounded-2xl overflow-hidden max-w-3xl w-full mb-12">
            <div className="w-full flex flex-col items-center">
              <Image
                src="/images/hitechie.png"
                alt="HiTechie App"
                width={944}
                height={528}
                className="w-full object-cover rounded-b-none rounded-t-2xl"
                priority
              />
            </div>
            <div className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Building HiTechie: A Networking App for Professionals and Startups</h2>
                <p className="text-neutral-300 max-w-xl">
                  Discover how HiTechie connects professionals with job opportunities and startups, enabling career growth and seamless networking.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-w-[180px]">
                <a href="/case-study/hitechie" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
                <a href="#" className="text-green-400 font-medium hover:underline flex items-center gap-1">View project <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg></a>
              </div>
            </div>
          </div>
        </section>

        {/* Project Card: Virtual try on */}
        <section className="w-full flex flex-col items-center px-4">
          <div className="bg-neutral-900 rounded-2xl overflow-hidden max-w-3xl w-full mb-12">
            <div className="w-full flex flex-col items-center">
              <Image
                src="/images/viton.png"
                alt="Virtual try on App"
                width={944}
                height={528}
                className="w-full object-cover rounded-b-none rounded-t-2xl"
              />
            </div>
            <div className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Virtual try on: AI-Powered Fashion Experience</h2>
                <p className="text-neutral-300 max-w-xl">
                  Experience the future of shopping with our Virtual Try-On app! Instantly see how clothes look on you before making a purchase. Just upload a photo and let AI do the magic. No more guesswork—just perfect fits!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-w-[180px]">
                <a href="/case-study/virtualtryon" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
                <a href="https://play.google.com/store/apps/details?id=com.qb.viton" target="_blank" rel="noopener noreferrer" className="text-green-400 font-medium hover:underline flex items-center gap-1">View project <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg></a>
              </div>
            </div>
          </div>
        </section>

        {/* Project Card: CheckIn */}
        <section className="w-full flex flex-col items-center px-4">
          <div className="bg-neutral-900 rounded-2xl overflow-hidden max-w-3xl w-full mb-12">
            <div className="w-full flex flex-col items-center">
              <Image
                src="/images/image.png"
                alt="CheckIn App"
                width={944}
                height={528}
                className="w-full object-cover rounded-b-none rounded-t-2xl"
              />
            </div>
            <div className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">CheckIn: Meet New People</h2>
                <p className="text-neutral-300 max-w-xl">
                  CheckIn shows you who's around and open to connecting at the same venue or event. Whether you're out for drinks, travelling, or networking, meet people nearby for friendship, dating, professional connections or more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-w-[180px]">
                <a href="/case-study/checkin" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
                <a href="https://play.google.com/store/apps/details?id=com.checkin.org" target="_blank" rel="noopener noreferrer" className="text-green-400 font-medium hover:underline flex items-center gap-1">View project <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg></a>
              </div>
            </div>
          </div>
        </section>

        {/* Project Card: Allah Everywhere */}
        <section className="w-full flex flex-col items-center px-4">
          <div className="bg-neutral-900 rounded-2xl overflow-hidden max-w-3xl w-full mb-12">
            <div className="w-full flex flex-col items-center">
              <Image
                src="/images/3.jpg"
                alt="Allah Everywhere App"
                width={944}
                height={528}
                className="w-full object-cover rounded-b-none rounded-t-2xl"
              />
            </div>
            <div className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Allah Everywhere: Your Daily Islamic Companion</h2>
                <p className="text-neutral-300 max-w-xl">
                  Stay connected to your faith with prayer times, Quran recitation, daily duas, and more—all in one convenient app. Your daily companion for Islamic practice.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-w-[180px]">
                <a href="/case-study/allaheverywhere" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
               
              </div>
            </div>
          </div>
        </section>

        {/* Project Card: Global Mart */}
        <section className="w-full flex flex-col items-center px-4">
          <div className="bg-neutral-900 rounded-2xl overflow-hidden max-w-3xl w-full mb-12">
            <div className="w-full flex flex-col items-center">
              <Image
                src="/images/6.jpg"
                alt="Global Mart App"
                width={944}
                height={528}
                className="w-full object-cover rounded-b-none rounded-t-2xl"
              />
            </div>
            <div className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Global Mart: Your One-Stop Shop</h2>
                <p className="text-neutral-300 max-w-xl">
                  Discover a world of products, from everyday essentials to unique finds, all at your fingertips. Your one-stop shop for everything you need.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-w-[180px]">
                <a href="/case-study/globalmart" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
               
              </div>
            </div>
          </div>
        </section>

        {/* Project Card: Baked Bliss */}
        <section className="w-full flex flex-col items-center px-4">
          <div className="bg-neutral-900 rounded-2xl overflow-hidden max-w-3xl w-full mb-12">
            <div className="w-full flex flex-col items-center">
              <Image
                src="/images/2.jpg"
                alt="Baked Bliss App"
                width={944}
                height={528}
                className="w-full object-cover rounded-b-none rounded-t-2xl"
              />
            </div>
            <div className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Baked Bliss: Treats for All Occasions</h2>
                <p className="text-neutral-300 max-w-xl">
                  Unleash a world of shopping possibilities. Browse a diverse catalog of products, from everyday essentials to unique finds, and discover your next favorite item with ease.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-w-[180px]">
                <a href="/case-study/bakedbliss" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
               
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscribe Section */}
        <section className="w-full flex flex-col items-center px-4 mb-12">
          <div className="w-full max-w-3xl rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-[#1a0e0e]/80 p-10 md:p-16 flex flex-col items-center justify-center relative overflow-hidden" style={{boxShadow: '0 2px 32px 0 rgba(0,0,0,0.25)'}}>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <svg width="100%" height="100%" className="h-full w-full" style={{position: 'absolute', left: 0, top: 0}}>
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeOpacity="0.06" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4 z-10">Subscribe to M.Abdullah Waseem's Newsletter</h2>
            <p className="text-neutral-300 text-center mb-8 max-w-xl z-10">I occasionally write about Flutter, technology, and share thoughts on the intersection of innovation and mobile development.</p>
            <form className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md z-10">
              <input type="email" required placeholder="Email" className="flex-1 rounded-full px-6 py-3 bg-neutral-900/70 border border-neutral-700 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
              <button type="submit" className="bg-white text-black font-semibold rounded-full px-6 py-3 hover:bg-neutral-200 transition shadow">Subscribe</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <div className="w-full flex items-center justify-between px-8 py-4 text-muted-foreground text-sm mt-12">
          <span>@2025 / <span className="font-semibold text-white">M.Abdullah Waseem</span></span>
          <span className="flex items-center gap-3">
            <a href="https://github.com/AbduLlAh72727272" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/muhammad-abdullah-waseem-4159b81aa/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:muammad112266@gmail.com" className="hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
          </span>
        </div>
      </div>
    </>
  )
}
