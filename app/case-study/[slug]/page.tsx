"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const caseStudies = {
  hitechie: {
    title: "Building HiTechie: A Networking App for Professionals and Startups",
    overview: `HiTechie connects professionals with job opportunities and startups, enabling career growth and seamless networking. The app helps users showcase their skills, build strong connections, and discover new career paths.`,
    keyFeatures: [
      "Professional Networking: Connect with professionals and startups.",
      "Job Opportunities: Discover and apply for jobs directly in the app.",
      "Startup Growth: Entrepreneurs can find the right individuals to grow their startups.",
      "Real-Time Messaging: Chat and collaborate instantly.",
    ],
    technologies: [
      "Flutter & Dart",
      "Firebase",
      "Node.js & REST APIs",
      "WebSockets",
    ],
    challenges: `Ensuring a seamless networking experience and real-time communication was a challenge. Integrating chat and job features required careful state management and backend optimization.`,
    outcome: `HiTechie has helped professionals and startups connect and grow, making networking simple and effective.`,
    downloadLinks: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.hitechie.org&hl=en" }
    ]
  },
  virtualtryon: {
    title: "Virtual Try On: AI-Powered Fashion Experience",
    overview: `Experience the future of shopping with our Virtual Try-On app! Instantly see how clothes look on you before making a purchase. Just upload a photo and let AI do the magic. No more guesswork—just perfect fits!`,
    keyFeatures: [
      "AI-Powered Virtual Try-On: See how outfits look on you in real-time.",
      "Trendy Collection: Explore the latest fashion trends.",
      "Smart Recommendations: Get personalized style suggestions.",
      "Save & Share: Capture your favorite looks and share with friends.",
    ],
    technologies: [
      "Flutter & Dart",
      "TensorFlow Lite",
      "Firebase",
      "REST APIs",
    ],
    challenges: `Integrating AI-powered virtual try-on and ensuring accurate fit visualization was technically challenging. Optimizing for performance and user experience was key.`,
    outcome: `Virtual Try On has made online shopping more interactive and personalized, increasing user engagement and satisfaction.`,
    downloadLinks: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.qb.viton" }
    ]
  },
  checkin: {
    title: "Building CheckIn: A Smarter Way to Meet New People",
    overview: `Meeting new people shouldn't be so hard. Before, your options were endless swiping with conversations that lead nowhere or nervously waiting for the right moment to approach someone. CheckIn changes that.
CheckIn allows you to ditch endless swiping by taking the guesswork out of meeting new people when you're already out and about. Whether you're at a cafe, event, or social gathering, the app helps you connect with like-minded people nearby in real time.`,
    keyFeatures: [
      "Location-Based Socializing: Uses Google Maps SDK and Places API to help users connect with people at the same venue.",
      "Real-Time Interactions: Integrated WebSockets for instant communication, live status updates, and interactive engagement.",
      "Smart Matching: Uses advanced filters to match users based on interests, proximity, and availability.",
      "Secure Authentication: Implemented Firebase Authentication to ensure seamless and secure sign-ins.",
      "Push Notifications: Powered by Firebase Cloud Messaging (FCM) to notify users of new matches, messages, and social events.",
      "REST API Integration: Connected with a Node.js backend for real-time data synchronization and efficient app performance.",
    ],
    technologies: [
      "Flutter & Dart",
      "GetX",
      "Google Maps SDK & Places API",
      "WebSockets",
      "Firebase",
      "Node.js & REST APIs",
    ],
    challenges: `One of the biggest challenges was ensuring real-time responsiveness while handling location-based services efficiently. Integrating WebSockets for live interactions while managing state with GetX provided a seamless experience. Additionally, working with Google Maps SDK and Places API required optimizing location accuracy to improve nearby connections.`,
    outcome: `CheckIn has transformed how people connect, making social interactions more natural and effortless. With high user engagement and positive feedback, the app has successfully bridged the gap between online and real-world connections, making meeting new people easier, faster, and more meaningful.`,
    downloadLinks: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.checkin.org" },
      { label: "App Store", url: "https://apps.apple.com/au/app/checkin-meet-new-people/id6736611885" }
    ]
  },
  allaheverywhere: {
    title: "Allah Everywhere: Your Daily Islamic Companion",
    overview: `Stay connected to your faith with prayer times, Quran recitation, daily duas, and more—all in one convenient app. Your daily companion for Islamic practice.`,
    keyFeatures: [
      "Prayer Times: Accurate daily prayer times based on your location.",
      "Quran Recitation: Listen to and read the Quran.",
      "Daily Duas: Access a collection of daily supplications.",
      "Islamic Calendar: Keep track of important Islamic dates.",
    ],
    technologies: [
      "Flutter & Dart",
      "Firebase",
      "REST APIs",
    ],
    challenges: `Ensuring accurate prayer times and providing a seamless user experience for a diverse audience was a challenge. Integrating multiple features in a single app required careful planning.`,
    outcome: `Allah Everywhere has become a trusted companion for users seeking to maintain their Islamic practices conveniently.`,
    downloadLinks: []
  },
  globalmart: {
    title: "Global Mart: Your One-Stop Shop",
    overview: `Discover a world of products, from everyday essentials to unique finds, all at your fingertips. Your one-stop shop for everything you need.`,
    keyFeatures: [
      "Wide Product Range: From groceries to unique finds.",
      "Order Tracking: Track your orders in real-time.",
      "Personalized Recommendations: Get suggestions based on your preferences.",
      "Secure Payments: Multiple payment options for convenience.",
    ],
    technologies: [
      "Flutter & Dart",
      "Firebase",
      "REST APIs",
    ],
    challenges: `Managing a large product catalog and ensuring smooth order processing was a challenge. Optimizing for performance and scalability was essential.`,
    outcome: `Global Mart has made shopping easier and more accessible for users, with a seamless and enjoyable experience.`,
    downloadLinks: []
  },
  bakedbliss: {
    title: "Baked Bliss: Treats for All Occasions",
    overview: `Unleash a world of shopping possibilities. Browse a diverse catalog of products, from everyday essentials to unique finds, and discover your next favorite item with ease.`,
    keyFeatures: [
      "Diverse Catalog: Wide range of bakery products.",
      "Easy Ordering: Simple and intuitive ordering process.",
      "Special Offers: Enjoy discounts and special deals.",
      "Order Tracking: Track your orders in real-time.",
    ],
    technologies: [
      "Flutter & Dart",
      "Firebase",
      "REST APIs",
    ],
    challenges: `Ensuring product freshness and timely delivery was a challenge. Building a user-friendly interface for browsing and ordering was key.`,
    outcome: `Baked Bliss has delighted users with its variety and convenience, making it a go-to app for bakery lovers.`,
    downloadLinks: []
  }
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudies[slug as keyof typeof caseStudies];

  if (!study) return <div className="max-w-3xl mx-auto py-12 px-4 text-white">Case study not found.</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-white">
      <Link href="/" className="text-green-400 hover:underline mb-4 inline-block">&larr; Projects</Link>
      <h1 className="text-3xl font-bold mb-4">{study.title}</h1>
      <h2 className="text-xl font-semibold mt-8 mb-2">Overview</h2>
      <p className="mb-4">{study.overview}</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Key Features</h2>
      <ul className="list-disc ml-6 mb-4">
        {study.keyFeatures.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Technologies Used</h2>
      <ul className="list-disc ml-6 mb-4">
        {study.technologies.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Challenges and Learnings</h2>
      <p className="mb-4">{study.challenges}</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Outcome</h2>
      <p className="mb-4">{study.outcome}</p>
      {study.downloadLinks.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-8 mb-2">Download</h2>
          <div className="flex gap-4">
            {study.downloadLinks.map(link => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{link.label}</a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
