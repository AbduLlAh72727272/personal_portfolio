"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("introduction")
  const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "work-experience", label: "Work Experience" },
    { id: "studies", label: "Studies" },
    { id: "technical-skills", label: "Technical Skills" },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col">
      <div className="flex-1 flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1">
          <Header />
          <main className="flex flex-col md:flex-row justify-center items-start pt-32 px-4 gap-12 max-w-7xl mx-auto animate-fade-in">
            {/* Left column: Avatar, Info */}
            <aside className="flex flex-col items-center md:items-start gap-8 md:sticky md:top-32 min-w-[220px] max-w-xs w-full">
              <div className="flex flex-col items-center gap-4">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                  <Image
                    src="/images/abdullah.png"
                    alt="Profile"
                    width={160}
                    height={160}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="rounded-full text-white bg-transparent px-3 py-1 font-medium">Asia/Islamabad</span>
                </div>
                {/* Sidebar navigation items */}
                <ul className="flex flex-col gap-2 mt-6 ml-2 w-full">
                  {navItems.map((item) => (
                    <li key={item.id} className="list-disc list-inside">
                      <a
                        href={`#${item.id}`}
                        onClick={() => setActiveTab(item.id)}
                        className={
                          "font-medium cursor-pointer text-base text-neutral-200 transition-all duration-300 transform hover:animate-bounce"
                        }
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-2">
                  <span className="rounded-full border border-white text-white bg-transparent px-3 py-1 text-sm font-medium">English</span>
                  <span className="rounded-full border border-white text-white bg-transparent px-3 py-1 text-sm font-medium">Urdu</span>
                </div>
              </div>
            </aside>
            {/* Right column: Main content */}
            <section className="flex-1 w-full max-w-3xl space-y-12">
              {/* Hero Section */}
              <section id="introduction" className="space-y-8">
                <div className="flex justify-start mb-8">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-2 border-emerald-700/70 bg-transparent text-white font-semibold px-6 py-3 text-base flex items-center gap-3 shadow-none hover:bg-emerald-900/10 transition-all"
                  >
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 11h8M8 15h6" /></svg>
                        Check my resume
                      </span>
                      <span className="ml-3 rounded-full border border-emerald-700 p-1">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
                      </span>
                    </a>
                  </Button>
                </div>
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl font-extrabold text-white">M.Abdullah Waseem</h1>
                  <p className="text-3xl md:text-4xl text-neutral-400 font-normal">Flutter Developer</p>
                  <div className="flex gap-4">
                    <Link href="https://github.com/AbduLlAh72727272" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="rounded-full font-semibold px-5 py-2 flex items-center gap-2 border border-neutral-700 bg-transparent text-white hover:bg-neutral-800 transition-all">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/muhammad-abdullah-waseem-4159b81aa/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="rounded-full font-semibold px-5 py-2 flex items-center gap-2 border border-neutral-700 bg-transparent text-white hover:bg-neutral-800 transition-all">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </Link>
                    <Link href="mailto:muammad112266@gmail.com">
                      <Button variant="outline" size="sm" className="rounded-full font-semibold px-5 py-2 flex items-center gap-2 border border-neutral-700 bg-transparent text-white hover:bg-neutral-800 transition-all">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                    </Link>
                  </div>
                  <p className="text-lg text-neutral-200 leading-relaxed max-w-3xl">
                    Abdullah Waseem is an Islamabad-based Flutter developer with a passion for transforming complex challenges
                    into seamless and efficient mobile solutions. His work spans cross-platform app development, interactive
                    experiences, and the convergence of design and technology.
                  </p>
                </div>
              </section>
              {/* Work Experience Section */}
              <section id="work-experience" className="space-y-8">
                <h2 className="text-4xl font-extrabold text-white">Work Experience</h2>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-extrabold text-white">RTechnologies</h3>
                        <p className="text-emerald-400 font-medium">Mobile App Developer</p>
                      </div>
                      <span className="text-neutral-400 text-base font-normal">06/2024 - Present</span>
                    </div>
                    <ul className="space-y-4 mt-4 ml-1">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-white">
                          Led and mentored a team of 12 interns, enhancing their Flutter skills and industry knowledge.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-white">
                          Integrated third-party SDKs like Spotify, Stripe, AdMob for feature-rich apps.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-white">
                          Built location-based services using Firebase, REST APIs, Google Maps, Places APIs, and WebSockets.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-white">
                          Worked on projects like{" "}
                          <Link href="https://play.google.com/store/apps/details?id=com.checkin.org" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">CheckIn (Play Store)</Link>
                          {" | "}
                          <Link href="https://apps.apple.com/au/app/checkin-meet-new-people/id6736611885" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">CheckIn (App Store)</Link>
                          {", "}
                          <Link href="https://play.google.com/store/apps/details?id=com.qb.viton" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Virtual try on</Link>
                          {", and "}
                          <Link href="https://play.google.com/store/apps/details?id=com.hitechie.org&hl=en" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Hitechie</Link>
                          .
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* YoungDev Flutter Intern */}
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-extrabold text-white">YoungDev</h3>
                        <p className="text-emerald-400 font-medium">Flutter Intern</p>
                      </div>
                      <span className="text-neutral-400 text-base font-normal">05/2024 - 06/2024 &bull; Islamabad, Pakistan</span>
                    </div>
                    <ul className="space-y-4 mt-4 ml-1">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-white">Assisted in the development of mobile applications using Flutter and Dart.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-white">Conducted testing and debugging of applications to ensure optimal performance.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-white">Collaborated with senior developers to integrate APIs and implement features.</span>
                      </li>
                    </ul>
                  </div>
                  {/* CodersCave Flutter Intern */}
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-extrabold text-white">CodersCave</h3>
                        <p className="text-emerald-400 font-medium">Flutter Intern</p>
                      </div>
                      <span className="text-neutral-400 text-base font-normal">05/2024 - 06/2024 &bull; Islamabad, Pakistan</span>
                    </div>
                    <ul className="space-y-4 mt-4 ml-1">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-white">Participated in the development of mobile applications using Flutter.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-white">Worked on bug fixing and improving application performance.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-white">Gained experience in state management and API integration.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* Studies Section */}
              <section id="studies" className="space-y-8">
                <h2 className="text-4xl font-extrabold text-white">Studies</h2>
                <div className="space-y-4">
                  <h3 className="text-2xl font-extrabold text-white">Bahria University Islamabad</h3>
                  <p className="text-neutral-300">Studied Information Technology.</p>
                </div>
              </section>
              {/* Technical Skills Section */}
              <section id="technical-skills" className="space-y-8">
                <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Flutter</h3>
                    <p className="text-neutral-300">
                      Experienced in building cross-platform mobile apps with Flutter, leveraging state management tools like GetX and Provider.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Firebase, REST APIs, and WebSockets</h3>
                    <p className="text-neutral-300">
                      Proficient in integrating Firebase services, REST APIs, and WebSockets for real-time communication and data storage.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">State Management</h3>
                    <p className="text-neutral-300">
                      Proficient in managing app states with GetX and Provider for efficient and scalable applications.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Clean Architecture</h3>
                    <p className="text-neutral-300">
                      Implemented clean architecture principles for scalable and maintainable codebases.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Git Version Control</h3>
                    <p className="text-neutral-300 mt-4">
                      Utilized Git for version control, branching, and collaboration on projects.
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </main>
        </div>
      </div>
      {/* Simple copyright and icons at the end */}
      <div className="w-full flex items-center justify-between px-8 py-4 text-muted-foreground text-sm mt-12">
        <span>@2025 / <span className="font-semibold text-white">M.Abdullah Waseem</span></span>
        <span className="flex items-center gap-3">
          <a href="https://github.com/AbduLlAh72727272" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/muhammad-abdullah-waseem-4159b81aa/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href="mailto:muammad112266@gmail.com" className="hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
        </span>
      </div>
    </div>
  )
}
