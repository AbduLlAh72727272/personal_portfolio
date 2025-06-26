import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"
import Image from "next/image"
import { NewsletterForm } from "@/components/newsletter-form"
import { Github, Linkedin, Mail } from "lucide-react"

export default function WorkPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col">
        <main className="pt-20 p-8 flex-1">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Projects Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* HiTechie */}
              <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                <Image src="/images/hitechie.png" alt="HiTechie App" width={944} height={528} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">Building HiTechie: A Networking App for Professionals and Startups</h2>
                  <p className="text-neutral-300 mb-4 flex-1">Discover how HiTechie connects professionals with job opportunities and startups, enabling career growth and seamless networking.</p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a href="/case-study/hitechie" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
                    <a href="#" className="text-green-400 font-medium hover:underline flex items-center gap-1">View project <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg></a>
                  </div>
                </div>
              </div>

              {/* Virtual Try On */}
              <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                <Image src="/images/viton.png" alt="Virtual try on App" width={944} height={528} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">Virtual try on: AI-Powered Fashion Experience</h2>
                  <p className="text-neutral-300 mb-4 flex-1">Experience the future of shopping with our Virtual Try-On app! Instantly see how clothes look on you before making a purchase. Just upload a photo and let AI do the magic. No more guesswork—just perfect fits!</p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a href="/case-study/virtualtryon" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
                    <a href="https://play.google.com/store/apps/details?id=com.qb.viton" target="_blank" rel="noopener noreferrer" className="text-green-400 font-medium hover:underline flex items-center gap-1">View project <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg></a>
                  </div>
                </div>
              </div>

              {/* CheckIn */}
              <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                <Image src="/images/image.png" alt="CheckIn App" width={944} height={528} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">CheckIn: Meet New People</h2>
                  <p className="text-neutral-300 mb-4 flex-1">CheckIn shows you who's around and open to connecting at the same venue or event. Whether you're out for drinks, travelling, or networking, meet people nearby for friendship, dating, professional connections or more.</p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a href="/case-study/checkin" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
                    <a href="https://play.google.com/store/apps/details?id=com.checkin.org" target="_blank" rel="noopener noreferrer" className="text-green-400 font-medium hover:underline flex items-center gap-1">View project <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg></a>
                  </div>
                </div>
              </div>

              {/* Allah Everywhere */}
              <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                <Image src="/images/3.jpg" alt="Allah Everywhere App" width={944} height={528} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">Allah Everywhere: Your Daily Islamic Companion</h2>
                  <p className="text-neutral-300 mb-4 flex-1">Stay connected to your faith with prayer times, Quran recitation, daily duas, and more—all in one convenient app. Your daily companion for Islamic practice.</p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a href="/case-study/allaheverywhere" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
                  </div>
                </div>
              </div>

              {/* Global Mart */}
              <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                <Image src="/images/6.jpg" alt="Global Mart App" width={944} height={528} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">Global Mart: Your One-Stop Shop</h2>
                  <p className="text-neutral-300 mb-4 flex-1">Discover a world of products, from everyday essentials to unique finds, all at your fingertips. Your one-stop shop for everything you need.</p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a href="/case-study/globalmart" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
                  </div>
                </div>
              </div>

              {/* Baked Bliss */}
              <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                <Image src="/images/2.jpg" alt="Baked Bliss App" width={944} height={528} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">Baked Bliss: Treats for All Occasions</h2>
                  <p className="text-neutral-300 mb-4 flex-1">Unleash a world of shopping possibilities. Browse a diverse catalog of products, from everyday essentials to unique finds, and discover your next favorite item with ease.</p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a href="/case-study/bakedbliss" className="text-green-400 font-medium hover:underline">Read case study &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
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
