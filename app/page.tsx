"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import img1 from "@/components/images/dreambgbest.svg"
import Logo from "@/components/images/logodream.svg"
import { ArrowRight, BookOpen, Users, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute("href")?.slice(1)
      const element = document.getElementById(targetId || "")
      element?.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }

    const links = document.querySelectorAll('nav a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={img1 || "/placeholder.svg"}
          alt="Decorative background"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed w-full top-0 z-50"
        >
          <div className="glass-nav">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                  <Image
                    src={Logo || "/placeholder.svg"}
                    alt="Dream Books Logo"
                    width={150}
                    height={40}
                    className="h-8 sm:h-10 w-auto"
                  />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12">
                  <Link href="/" className="text-gray-700 hover:text-[#2B7B78] transition-colors text-sm sm:text-base">
                    Home
                  </Link>
                  <Link
                    href="#about"
                    className="text-gray-700 hover:text-[#2B7B78] transition-colors text-sm sm:text-base"
                  >
                    About
                  </Link>
                  <Link
                    href="#contact"
                    className="text-gray-700 hover:text-[#2B7B78] transition-colors text-sm sm:text-base"
                  >
                    Contact
                  </Link>
                </nav>

                <div className="hidden md:block">
                  <Link href="/login">
                    <Button className="bg-[#2B7B78] hover:bg-[#2B7B78]/90 text-white rounded-md px-6 sm:px-8 py-2 text-sm sm:text-base font-medium">
                      Log in
                    </Button>
                  </Link>
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#2B7B78] transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden glass-nav border-t border-white/20"
                >
                  <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-gray-700 hover:text-[#2B7B78] transition-colors text-base py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="#about"
                      className="text-gray-700 hover:text-[#2B7B78] transition-colors text-base py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="#contact"
                      className="text-gray-700 hover:text-[#2B7B78] transition-colors text-base py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link href="/login" className="inline-block" onClick={() => setIsMenuOpen(false)}>
                      <Button className="bg-[#2B7B78] hover:bg-[#2B7B78]/90 text-white rounded-md px-6 py-2 text-base font-medium w-full">
                        Log in
                      </Button>
                    </Link>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 xl:w-1/2"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#246B73] leading-tight tracking-tight mb-6 sm:mb-8">
              We help
              <br />
              Connect the
              <br />
              <span className="relative inline-flex items-center">
      D
      <div className="relative" style={{ height: "1em" }}>
        <motion.div
          initial={{ width: "2em" }}
          animate={{ width: 250 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          className="relative"
          style={{
            height: "1em",
            background: "#E4B61A",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Counter space */}
          <div
            className="absolute"
            style={{
              width: "90%",
              height: "0.6em",
              background: "white",
              borderRadius: "9999px",
            }}
          />
        </motion.div>
      </div>
      <motion.span initial={{ x: 0 }} animate={{ x: 5 }} transition={{ duration: 4, delay: 2, ease: "easeOut" }}>
        t
      </motion.span>
    </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-xl"
            >
              Welcome to Dream Books, where we bridge the gap between students, educators, and knowledge. Our innovative
              school portal is designed to create a seamless learning experience, fostering collaboration and academic
              growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/login">
                <Button className="bg-[#2B7B78] hover:bg-[#2B7B78]/90 text-white text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 rounded-md font-semibold w-full sm:w-auto">
                  GET STARTED
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </main>

        {/* Curved section divider */}
        <div className="w-full h-48 bg-transparent relative overflow-hidden mt-20">
          <div
            className="absolute bottom-0 left-0 w-full h-full"
            style={{
              background: "rgb(249 250 251)",
              borderTopLeftRadius: "100% 100%",
              borderTopRightRadius: "100% 100%",
              transform: "scaleX(1.5)",
            }}
          />
        </div>

        {/* Features Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#246B73] mb-12">Why Choose Dream Books?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BookOpen className="h-10 w-10 text-[#2B7B78]" />}
                title="Comprehensive Learning Resources"
                description="Access a vast library of educational materials, interactive lessons, and study guides tailored to your curriculum."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-[#2B7B78]" />}
                title="Collaborative Environment"
                description="Connect with classmates and teachers through discussion forums, group projects, and real-time messaging."
              />
              <FeatureCard
                icon={<Phone className="h-10 w-10 text-[#2B7B78]" />}
                title="24/7 Support"
                description="Our dedicated support team is always ready to assist you with any questions or technical issues you may encounter."
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#246B73] mb-8">About Dream Books</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Dream Books is more than just a school portal; it's a gateway to educational excellence. Founded with the
              vision of revolutionizing the way students and educators interact, we've created a platform that nurtures
              curiosity, facilitates learning, and prepares students for the challenges of tomorrow.
            </p>
            <div className="text-center">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-[#2B7B78] text-[#2B7B78] hover:bg-[#2B7B78] hover:text-white"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="bg-[#246B73] text-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Get in Touch</h2>
            <p className="text-center max-w-2xl mx-auto mb-12">
              Have questions or need assistance? Our team is here to help. Reach out to us for any inquiries about our
              platform, features, or how we can support your educational journey.
            </p>
            <div className="text-center">
              <Link href="/contact">
                <Button className="bg-white text-[#246B73] hover:bg-gray-100">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#246B73] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

