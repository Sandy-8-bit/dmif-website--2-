"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Menu,
  X,
  Star,
  Users,
  Award,
  TrendingUp,
  Globe,
  Calendar,
  Clock,
  CheckCircle,
  Lightbulb,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  BookOpen,
  Target,
  Zap,
  Brain,
  Rocket,
  Trophy,
  Shield,
  Heart,
  Eye,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function DMIFWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [applicationForm, setApplicationForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    educationLevel: "",
    fieldOfStudy: "",
    institution: "",
    yearOfStudy: "",
    tracks: [] as string[],
    motivation: "",
    experience: "",
    terms: false,
    updates: false,
  })
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false)
  const { toast } = useToast()

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingContact(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        })
        setContactForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmittingContact(false)
    }
  }

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!applicationForm.terms) {
      toast({
        title: "Please accept terms and conditions",
        description: "You must agree to the terms to submit your application.",
        variant: "destructive",
      })
      return
    }

    setIsSubmittingApplication(true)

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationForm),
      })

      if (response.ok) {
        toast({
          title: "Application submitted successfully!",
          description: "We'll review your application and get back to you within 48 hours.",
        })
        setApplicationForm({
          fullName: "",
          email: "",
          whatsapp: "",
          country: "",
          educationLevel: "",
          fieldOfStudy: "",
          institution: "",
          yearOfStudy: "",
          tracks: [],
          motivation: "",
          experience: "",
          terms: false,
          updates: false,
        })
      } else {
        throw new Error("Failed to submit application")
      }
    } catch (error) {
      toast({
        title: "Error submitting application",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmittingApplication(false)
    }
  }

  const handleTrackChange = (track: string, checked: boolean) => {
    if (checked) {
      setApplicationForm((prev) => ({
        ...prev,
        tracks: [...prev.tracks, track],
      }))
    } else {
      setApplicationForm((prev) => ({
        ...prev,
        tracks: prev.tracks.filter((t) => t !== track),
      }))
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">DMIF</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">
                Programs
              </a>
              <a href="#why-it-matters" className="text-gray-700 hover:text-blue-600 transition-colors">
                Why It Matters
              </a>
              <a href="#outcomes" className="text-gray-700 hover:text-blue-600 transition-colors">
                Outcomes
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
              </a>
              <a href="#apply" className="text-gray-700 hover:text-blue-600 transition-colors">
                Apply
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" asChild>
                <a href="#contact">Get Info</a>
              </Button>
              <Button asChild>
                <a href="#apply">Apply Now</a>
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Home
                </a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  About
                </a>
                <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Programs
                </a>
                <a href="#why-it-matters" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Why It Matters
                </a>
                <a href="#outcomes" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Outcomes
                </a>
                <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Testimonials
                </a>
                <a href="#apply" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Apply
                </a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Contact
                </a>
                <div className="px-3 py-2 space-y-2">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="#contact">Get Info</a>
                  </Button>
                  <Button className="w-full" asChild>
                    <a href="#apply">Apply Now</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen flex items-center"
      >
        <div className="container py-10 mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 text-sm px-4 py-2 hover:bg-blue-100 bg-blue-100 text-blue-800 border-blue-200">
                Student to Inventor to Entrepreneur
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                Dr Madhan {" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Institute
                </span>{" "}
                of{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Build intellectual property, create meaningful impact, and launch your future through mentorship-based
                innovation and research programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-4" asChild>
                  <a href="#programs">Explore Programs</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent" asChild>
                  <a href="#apply">Apply Now</a>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card className="text-center bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Lightbulb className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Patent Track</h3>
                  <p className="text-gray-600">
                    Transform ideas into intellectual property with patent-ready documentation
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <BookOpen className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Research Track</h3>
                  <p className="text-gray-600">Develop publication-ready research for top-tier conferences</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Rocket className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Startup Support</h3>
                  <p className="text-gray-600">Launch your venture with IP foundation and mentorship</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About DMIF</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dr. Madhan Institute of Future bridges the gap between academic learning and real-world innovation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Madhan"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-green-100 hover:bg-green-100  text-green-800">Founder & Mentor</Badge>
                <h3 className="text-3xl font-bold mb-6">Dr. Madhan</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    With over 15 years of experience in innovation and entrepreneurship, Dr. Madhan has guided hundreds
                    of students from ideation to implementation.
                  </p>
                  <p>
                    His unique methodology transforms theoretical knowledge into practical intellectual property,
                    creating a bridge between academic excellence and entrepreneurial success.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-gray-500">Students Mentored</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">127+</div>
                      <div className="text-sm text-gray-500">Patents Filed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-sm text-gray-500">Startups Launched</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">15+</div>
                      <div className="text-sm text-gray-500">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8 text-center">
                  <Eye className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Vision</h3>
                  <p className="text-gray-600">
                    To create a generation of student-inventors who build intellectual property and launch meaningful
                    ventures.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-8 text-center">
                  <Target className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Mission</h3>
                  <p className="text-gray-600">
                    Provide mentorship-based programs that transform students into innovators through practical IP
                    development.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-8 text-center">
                  <Heart className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Values</h3>
                  <p className="text-gray-600">
                    Innovation, mentorship, practical learning, and creating lasting impact through intellectual
                    property.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your path to innovation - Patent Track for inventors or Research Track for scholars
              </p>
            </div>

            <Tabs defaultValue="patent" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="patent">Patent Track</TabsTrigger>
                <TabsTrigger value="research">Research Track</TabsTrigger>
              </TabsList>


              <TabsContent value="patent">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="mb-8">
                      <Badge className="mb-4 hover:bg-orange-100 bg-orange-100 text-orange-800">The Innovation Engine</Badge>
                      <h3 className="text-3xl font-bold mb-4">Patent Track</h3>
                      <p className="text-lg text-gray-600 mb-6">
                        Transform your ideas into intellectual property with patent-ready documentation and startup
                        foundation support.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>Complete IDF + TID development</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>Patent filing readiness</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>Co-inventor recognition</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>Startup foundation support</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>Legal handover via ImagineX</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-400 line-through mb-2">$1,500</div>
                        <div className="text-5xl font-bold text-orange-600 mb-2">$899</div>
                        <p className="text-sm text-gray-600">Early Bird Discount - Limited Time</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Patent Track"
                      className="rounded-2xl shadow-lg w-full"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="research">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="mb-8">
                      <Badge className="mb-4 hover:bg-green-100 bg-green-100 text-green-800">The Scholarly Explorer</Badge>
                      <h3 className="text-3xl font-bold mb-4">Research Track</h3>
                      <p className="text-lg text-gray-600 mb-6">
                        Develop publication-ready research papers for IEEE, Springer, and ACM conferences with
                        professional presentation support.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>IEEE/Springer/ACM ready paper</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>Professional presentation deck</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>Co-authorship eligibility</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>Conference submission guidance</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>Q&A session coaching</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-400 line-through mb-2">$1,000</div>
                        <div className="text-5xl font-bold text-green-600 mb-2">$599</div>
                        <p className="text-sm text-gray-600">Early Bird Discount - Limited Time</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Research Track"
                      className="rounded-2xl shadow-lg w-full"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why-it-matters" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why It Matters</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In an AI-driven world, human creativity and intellectual property are your competitive advantage
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-8">
                  <Brain className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">The Creative Economy</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Global IP market value</span>
                      <span className="font-bold text-blue-600">$6.6 Trillion</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Patent applications annually</span>
                      <span className="font-bold text-blue-600">3.4 Million</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Research publications yearly</span>
                      <span className="font-bold text-blue-600">2.5 Million</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Innovation job growth</span>
                      <span className="font-bold text-blue-600">+15% annually</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-yellow-50 border-green-200">
                <CardContent className="p-8">
                  <Zap className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">AI vs Human Creativity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>AI can process data, humans create meaning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Patents require human inventorship</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Research needs human insight and ethics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Innovation requires human problem-solving</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-8">Career Comparison</h3>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3">Career Path</TableHead>
                        <TableHead>Traditional Graduate</TableHead>
                        <TableHead>DMIF Graduate</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Starting Position</TableCell>
                        <TableCell>Entry-level employee</TableCell>
                        <TableCell className="text-green-600 font-medium">Co-inventor/Co-author</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Portfolio</TableCell>
                        <TableCell>Academic transcripts</TableCell>
                        <TableCell className="text-green-600 font-medium">Patents + Publications</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Network</TableCell>
                        <TableCell>Classmates</TableCell>
                        <TableCell className="text-green-600 font-medium">Industry mentors</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Opportunities</TableCell>
                        <TableCell>Job applications</TableCell>
                        <TableCell className="text-green-600 font-medium">Startup funding ready</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Income Potential</TableCell>
                        <TableCell>Salary-dependent</TableCell>
                        <TableCell className="text-green-600 font-medium">IP royalties + equity</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">From IP to Impact</h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Your intellectual property becomes the foundation for meaningful ventures that solve real problems and
                create lasting value in the world.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <a href="#apply">Start Your Journey</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Student Outcomes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how DMIF transforms different types of students into successful innovators
              </p>
            </div>

            <Tabs defaultValue="indian" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="indian">Indian Students</TabsTrigger>
                <TabsTrigger value="global">Global Students</TabsTrigger>
                <TabsTrigger value="immigration">Immigration Seekers</TabsTrigger>
              </TabsList>

              <TabsContent value="indian">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Indian Student Success</h3>
                    <div className="space-y-6">
                      <Card className="bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <Trophy className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-bold">Patent Success</h4>
                              <p className="text-sm text-gray-600">85% filing success rate</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            Indian students leverage cost advantages and technical skills to build strong IP portfolios
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                              <Briefcase className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-bold">Career Advancement</h4>
                              <p className="text-sm text-gray-600">3x faster promotions</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            IP credentials lead to senior roles in R&D and innovation departments
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <Rocket className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-bold">Startup Success</h4>
                              <p className="text-sm text-gray-600">40% launch ventures</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            Strong IP foundation attracts investors and enables successful fundraising
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600">₹12L+</div>
                        <div className="text-sm text-gray-600">Average salary increase</div>
                      </div>
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-green-600">200+</div>
                        <div className="text-sm text-gray-600">Patents filed by alumni</div>
                      </div>
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600">50+</div>
                        <div className="text-sm text-gray-600">Startups launched</div>
                      </div>
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-orange-600">95%</div>
                        <div className="text-sm text-gray-600">Job placement rate</div>
                      </div>
                    </div>
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Indian Student Success"
                      className="rounded-lg w-full"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="global">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Global Student Impact</h3>
                    <div className="space-y-6">
                      <Card className="bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <Globe className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-bold">International Recognition</h4>
                              <p className="text-sm text-gray-600">Published in top conferences</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            Global students gain recognition through IEEE, ACM, and Springer publications
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                              <Award className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-bold">Academic Excellence</h4>
                              <p className="text-sm text-gray-600">PhD admissions to top universities</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            Research credentials open doors to prestigious graduate programs worldwide
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-bold">Industry Connections</h4>
                              <p className="text-sm text-gray-600">Global mentor network</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            Access to international mentors and industry leaders across continents
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600">25+</div>
                        <div className="text-sm text-gray-600">Countries represented</div>
                      </div>
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-green-600">150+</div>
                        <div className="text-sm text-gray-600">Research publications</div>
                      </div>
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600">80%</div>
                        <div className="text-sm text-gray-600">PhD acceptance rate</div>
                      </div>
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-orange-600">$75K+</div>
                        <div className="text-sm text-gray-600">Average starting salary</div>
                      </div>
                    </div>
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Global Student Success"
                      className="rounded-lg w-full"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="immigration">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Immigration Success Stories</h3>
                    <div className="space-y-6">
                      <Card className="bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <Shield className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-bold">Visa Advantages</h4>
                              <p className="text-sm text-gray-600">EB-1 and O-1 visa eligibility</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            Patent and publication credentials strengthen extraordinary ability visa applications
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-bold">Career Acceleration</h4>
                              <p className="text-sm text-gray-600">Fast-track to senior positions</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            IP credentials bypass entry-level positions and lead directly to innovation roles
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <GraduationCap className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-bold">Academic Pathways</h4>
                              <p className="text-sm text-gray-600">Direct PhD admissions</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            Research publications enable direct admission to top graduate programs with funding
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600">90%</div>
                        <div className="text-sm text-gray-600">Visa approval rate</div>
                      </div>
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-green-600">6 months</div>
                        <div className="text-sm text-gray-600">Average job placement</div>
                      </div>
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600">$85K+</div>
                        <div className="text-sm text-gray-600">Starting salary in US</div>
                      </div>
                      <div className="text-center bg-white p-6 rounded-lg">
                        <div className="text-3xl font-bold text-orange-600">100%</div>
                        <div className="text-sm text-gray-600">PhD funding success</div>
                      </div>
                    </div>
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Immigration Success"
                      className="rounded-lg w-full"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from students who transformed their careers through DMIF programs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt="Priya Sharma"
                      className="w-15 h-15 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Priya Sharma</h4>
                      <p className="text-sm text-gray-600">Patent Track Graduate</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "DMIF transformed my engineering degree into real IP. I now have 3 patents filed and landed a senior
                    R&D role at a Fortune 500 company."
                  </p>
                  <div className="text-sm text-blue-600 font-medium">Filed 3 patents • 40% salary increase</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt="Marcus Chen"
                      className="w-15 h-15 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Marcus Chen</h4>
                      <p className="text-sm text-gray-600">Research Track Graduate</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "My DMIF research paper got accepted at IEEE and opened doors to a PhD at Stanford with full
                    funding. The mentorship was invaluable."
                  </p>
                  <div className="text-sm text-green-600 font-medium">IEEE publication • Stanford PhD with funding</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt="Sarah Johnson"
                      className="w-15 h-15 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-600">Both Tracks Graduate</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "DMIF gave me both patents and publications. I launched my startup with strong IP foundation and
                    raised $2M in seed funding."
                  </p>
                  <div className="text-sm text-purple-600 font-medium">Startup launched • $2M funding raised</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="/placeholder.svg?height=60&width=60" alt="Raj Patel" className="w-15 h-15 rounded-full" />
                    <div>
                      <h4 className="font-bold">Raj Patel</h4>
                      <p className="text-sm text-gray-600">Patent Track • Now in Silicon Valley</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "The patent credentials helped me get an O-1 visa and land a job at Google. DMIF literally changed
                    my life trajectory from India to Silicon Valley."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt="Dr. Lisa Wang"
                      className="w-15 h-15 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Dr. Lisa Wang</h4>
                      <p className="text-sm text-gray-600">Research Track • Now Professor</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "My DMIF research became the foundation for my PhD thesis. I'm now an assistant professor at MIT,
                    and it all started with that first publication."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* Apply Section */}
      <section id="apply" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 text-sm px-4 py-2 hover:bg-blue-100 bg-blue-100 text-blue-800 border-blue-200">
                Applications Open
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Apply Now</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take the first step towards building your intellectual legacy
              </p>
            </div>

            {/* Batch Information */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center bg-white">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="font-bold mb-2">Start Date</h3>
                  <p className="text-gray-600">August 2025</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="font-bold mb-2">Seats Available</h3>
                  <p className="text-gray-600">30 per track</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="font-bold mb-2">Duration</h3>
                  <p className="text-gray-600">
                    Weekly 1 session
                    <br />
                    (40-60 mins)
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 mx-auto text-orange-600 mb-4" />
                  <h3 className="font-bold mb-2">Format</h3>
                  <p className="text-gray-600">
                    Fully online
                    <br />
                    Mentor-led
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>DMIF Application Form</CardTitle>
                <CardDescription>Fill out all required fields to complete your application</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          placeholder="Enter your full name"
                          value={applicationForm.fullName}
                          onChange={(e) => setApplicationForm((prev) => ({ ...prev, fullName: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={applicationForm.email}
                          onChange={(e) => setApplicationForm((prev) => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">WhatsApp Number *</label>
                        <Input
                          placeholder="+91 9999999999"
                          value={applicationForm.whatsapp}
                          onChange={(e) => setApplicationForm((prev) => ({ ...prev, whatsapp: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Country *</label>
                        <Select
                          value={applicationForm.country}
                          onValueChange={(value) => setApplicationForm((prev) => ({ ...prev, country: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Academic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Current Education Level *</label>
                        <Select
                          value={applicationForm.educationLevel}
                          onValueChange={(value) => setApplicationForm((prev) => ({ ...prev, educationLevel: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="graduate">Graduate/Masters</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                            <SelectItem value="working">Working Professional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Field of Study *</label>
                        <Input
                          placeholder="e.g., Computer Science, Engineering"
                          value={applicationForm.fieldOfStudy}
                          onChange={(e) => setApplicationForm((prev) => ({ ...prev, fieldOfStudy: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Institution Name *</label>
                        <Input
                          placeholder="Your college/university name"
                          value={applicationForm.institution}
                          onChange={(e) => setApplicationForm((prev) => ({ ...prev, institution: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Year of Study</label>
                        <Select
                          value={applicationForm.yearOfStudy}
                          onValueChange={(value) => setApplicationForm((prev) => ({ ...prev, yearOfStudy: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                            <SelectItem value="final">Final Year</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Track Selection */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Track Selection *</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="patent-track"
                          checked={applicationForm.tracks.includes("patent")}
                          onCheckedChange={(checked) => handleTrackChange("patent", checked as boolean)}
                        />
                        <label htmlFor="patent-track" className="text-sm font-medium leading-none">
                          Patent Track - The Innovation Engine ($899)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="research-track"
                          checked={applicationForm.tracks.includes("research")}
                          onCheckedChange={(checked) => handleTrackChange("research", checked as boolean)}
                        />
                        <label htmlFor="research-track" className="text-sm font-medium leading-none">
                          Research Track - The Scholarly Explorer ($599)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="both-tracks"
                          checked={applicationForm.tracks.includes("both")}
                          onCheckedChange={(checked) => handleTrackChange("both", checked as boolean)}
                        />
                        <label htmlFor="both-tracks" className="text-sm font-medium leading-none">
                          Both Tracks - Complete Innovation Journey ($1299)
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Why do you want to join DMIF? *</label>
                    <Textarea
                      placeholder="Tell us about your goals, interests, and what you hope to achieve through DMIF..."
                      rows={4}
                      value={applicationForm.motivation}
                      onChange={(e) => setApplicationForm((prev) => ({ ...prev, motivation: e.target.value }))}
                      required
                    />
                  </div>

                  {/* Previous Experience */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Previous Research/Innovation Experience (Optional)
                    </label>
                    <Textarea
                      placeholder="Describe any previous research projects, innovations, or entrepreneurial activities..."
                      rows={3}
                      value={applicationForm.experience}
                      onChange={(e) => setApplicationForm((prev) => ({ ...prev, experience: e.target.value }))}
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={applicationForm.terms}
                        onCheckedChange={(checked) =>
                          setApplicationForm((prev) => ({ ...prev, terms: checked as boolean }))
                        }
                      />
                      <label htmlFor="terms" className="text-sm leading-none">
                        I agree to the Terms & Conditions and Privacy Policy *
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="updates"
                        checked={applicationForm.updates}
                        onCheckedChange={(checked) =>
                          setApplicationForm((prev) => ({ ...prev, updates: checked as boolean }))
                        }
                      />
                      <label htmlFor="updates" className="text-sm leading-none">
                        I want to receive updates about DMIF programs and opportunities
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmittingApplication}>
                      {isSubmittingApplication ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your innovation journey? We're here to help you every step of the way.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <Mail className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="font-bold mb-2">Email</h3>
                  <Link href="mailto:reach@drmadhan.in" className="text-blue-600 hover:underline">
                    reach@drmadhan.in
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="font-bold mb-2">Phone</h3>
                  <Link href="tel:+919994326696" className="text-green-600 hover:underline">
                    +91-9994326696
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <Globe className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="font-bold mb-2">Website</h3>
                  <Link href="https://www.drmadhan.in" className="text-purple-600 hover:underline">
                    www.drmadhan.in
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 mx-auto text-orange-600 mb-4" />
                  <h3 className="font-bold mb-2">Schedule Call</h3>
                  <Link href="#" className="text-orange-600 hover:underline">
                    Book Meeting
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">Send us a Message</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name *</label>
                          <Input
                            placeholder="Your first name"
                            value={contactForm.firstName}
                            onChange={(e) => setContactForm((prev) => ({ ...prev, firstName: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name *</label>
                          <Input
                            placeholder="Your last name"
                            value={contactForm.lastName}
                            onChange={(e) => setContactForm((prev) => ({ ...prev, lastName: e.target.value }))}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input
                          placeholder="+91 9999999999"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Subject *</label>
                        <Select
                          value={contactForm.subject}
                          onValueChange={(value) => setContactForm((prev) => ({ ...prev, subject: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="programs">Program Information</SelectItem>
                            <SelectItem value="partnerships">Partnership Opportunities</SelectItem>
                            <SelectItem value="media">Media Inquiries</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <Textarea
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          value={contactForm.message}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={isSubmittingContact}>
                        {isSubmittingContact ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Get Quick Answers</h3>
                  <div className="space-y-4">
                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <MessageSquare className="w-6 h-6 text-blue-600" />
                          <h4 className="font-semibold">Program Inquiries</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                          Have questions about our Patent or Research tracks? Want to know about eligibility,
                          curriculum, or outcomes?
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <a href="#programs">View Programs</a>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-6 h-6 text-green-600" />
                          <h4 className="font-semibold">Application Process</h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                          Ready to apply? Learn about our application process, requirements, and upcoming batch dates.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <a href="#apply">Apply Now</a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Office Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <span className="text-2xl font-bold">DMIF</span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Dr. Madhan Institute of Future - Transforming students into inventors and entrepreneurs through
                  mentorship-based innovation programs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>reach@drmadhan.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91-9994326696</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>www.drmadhan.in</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                      About DMIF
                    </a>
                  </li>
                  <li>
                    <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                      Programs
                    </a>
                  </li>
                  <li>
                    <a href="#outcomes" className="text-gray-300 hover:text-white transition-colors">
                      Student Outcomes
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a href="#apply" className="text-gray-300 hover:text-white transition-colors">
                      Apply Now
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Programs</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                      Patent Track
                    </a>
                  </li>
                  <li>
                    <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                      Research Track
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                      Institutional Partnerships
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                      Corporate Training
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">© 2024 Dr. Madhan Institute of Future. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Terms of Service
                  </a>
                  <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button size="lg" className="shadow-lg" asChild>
          <a href="#apply">
            Apply Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  )
}
