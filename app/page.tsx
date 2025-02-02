import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import img1 from "@/components/images/dreambgbest.svg"
import Logo from "@/components/images/logodream.svg"

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-['Poppins'] relative">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={img1 || "/placeholder.svg"}
          alt="Decorative background"
          className="w-90% h-70% object-cover"
          priority
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-7 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
              src={Logo || "/placeholder.svg"}
              alt="Dream Books Logo"
              width={150}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          <nav className="flex items-center gap-6 sm:gap-12 mb-4 sm:mb-0">
            <Link href="/" className="text-gray-600 hover:text-[#2B7B78] transition-colors text-sm sm:text-base">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#2B7B78] transition-colors text-sm sm:text-base">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#2B7B78] transition-colors text-sm sm:text-base">
              Contact
            </Link>
          </nav>

          <Link href="/login">
            <Button className="bg-[#2B7B78] hover:bg-[#2B7B78]/90 text-white rounded-md px-6 sm:px-8 py-2 text-sm sm:text-base font-medium w-full sm:w-auto">
              Log in
            </Button>
          </Link>
        </header>

        {/* Hero Section */}
        <main className="container mx-10 px-4 sm:px-10 lg:px-8 pt-8 sm:pt-10">
          <div className="w-full sm:w-2/3 lg:w-1/2 pt-4 sm:pt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#246B73] leading-tight tracking-tight mb-6 sm:mb-8">
              We help
              <br />
              Connect the
              <br />
              <span className="relative inline-block">
                D{/* Uncomment and adjust if needed */}
                {/* <span 
                  className="absolute -bottom-1 left-8 w-32 h-5 bg-[#E4B61A] -z-10 rounded-full"
                ></span> */}
                t
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Aliquet vel duis libero aliquam elementum. Quis viverra sed justo
              feugiat facilisi. Turpis tincidunt iaculis nulla felis ut quis eget malesuada lacus. Purus
            </p>

            <Link href="/login">
              <Button className="bg-[#2B7B78] hover:bg-[#2B7B78]/90 text-white text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 rounded-md font-semibold w-full sm:w-auto">
                GET STARTED
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

