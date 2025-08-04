import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, Globe, Linkedin, Twitter, Youtube, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="DMIF Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold">DMIF</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dr. Madhan Institute of Future - Transforming students into inventors and entrepreneurs through
              mentorship-based innovation and research programs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About DMIF
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/why-it-matters" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Why It Matters
                </Link>
              </li>
              <li>
                <Link href="/outcomes" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Student Outcomes
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/patents" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Patent Track
                </Link>
              </li>
              <li>
                <Link href="/programs/research" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Research Track
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Institutional Partnerships
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Media & Talks
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-gray-400" />
                <Link href="mailto:reach@drmadhan.in" className="text-gray-300 hover:text-white transition-colors">
                  reach@drmadhan.in
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-gray-400" />
                <Link href="tel:+919994326696" className="text-gray-300 hover:text-white transition-colors">
                  +91-9994326696
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Globe className="h-4 w-4 text-gray-400" />
                <Link href="https://www.drmadhan.in" className="text-gray-300 hover:text-white transition-colors">
                  www.drmadhan.in
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-400">© 2024 Dr. Madhan Institute of Future. All rights reserved.</p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/startup-kit" className="text-gray-400 hover:text-white transition-colors">
                Startup Kit
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <MapPin className="h-4 w-4" />
            <span>Made with ❤️ for innovators worldwide</span>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="lg"
          className="rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          asChild
        >
          <Link href="/apply">Apply Now</Link>
        </Button>
      </div>
    </footer>
  )
}
