"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Programs",
      href: "/programs",
      submenu: [
        { name: "All Programs", href: "/programs" },
        { name: "Patent Track", href: "/programs/patents" },
        { name: "Research Track", href: "/programs/research" },
      ],
    },
    { name: "Why It Matters", href: "/why-it-matters" },
    { name: "Student Outcomes", href: "/outcomes" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Media", href: "/media" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="DMIF Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DMIF
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-48 p-2">
                            {item.submenu.map((subItem) => (
                              <NavigationMenuLink key={subItem.name} asChild>
                                <Link
                                  href={subItem.href}
                                  className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="DMIF Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    DMIF
                  </span>
                </Link>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-3">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className="text-lg font-medium hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-lg font-medium hover:text-blue-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-6 space-y-3">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/apply" onClick={() => setIsOpen(false)}>
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
