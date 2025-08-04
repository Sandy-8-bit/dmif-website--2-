import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, BookOpen, Lightbulb, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">About DMIF</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">The Vision</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              At DMIF, we're not preparing students for exams. We're preparing them for a future of originality,
              leadership, and innovation.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="text-2xl font-bold text-blue-600 italic">
                "Don't feed the fish. Teach how to discover the ocean."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Story Behind DMIF */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Story Behind DMIF</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                DMIF was born from a simple observation: traditional education creates followers, not leaders. In a
                world where AI can replicate most skills, the only sustainable advantage is the ability to create
                something original.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Dr. Madhan Kumar Srinivasan, with his experience of 127 patents and founding 6 companies, realized that
                students needed more than knowledge—they needed the mindset and skills to become inventors and
                entrepreneurs from day one.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                DMIF represents a paradigm shift from instruction to mentorship, from consumption to creation, from
                students to inventors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inventors Now, Entrepreneurs Next */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Inventors Now. Entrepreneurs Next.</h2>
            <p className="text-xl text-gray-600 mb-8">
              At DMIF, we're not just building skillsets — we're shaping founders and IP creators. Every learner
              graduates with ownership, originality, and opportunity.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <Lightbulb className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
                  <CardTitle>Ownership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Students own their inventions and research, building real intellectual property
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <Award className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                  <CardTitle>Originality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Every project is unique, fostering creative thinking and innovation</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <Globe className="w-12 h-12 mx-auto text-green-500 mb-4" />
                  <CardTitle>Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Global recognition through patents, publications, and entrepreneurial ventures
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Mentor */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet the Mentor</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Dr. Madhan Kumar Srinivasan"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Dr. Madhan Kumar Srinivasan</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-blue-500" />
                    <span className="text-lg">127 Patents (96 Granted)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-green-500" />
                    <span className="text-lg">30+ Research Papers & 11 Book Chapters</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-purple-500" />
                    <span className="text-lg">3x TEDx Speaker</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    <span className="text-lg">Founder of 6 Companies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-red-500" />
                    <span className="text-lg">National Advisor, Government of India</span>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Professor of Practice at VIT & SRM Universities, Former AVP at Accenture Cloud AI where he built a
                  $100M+ portfolio. Dr. Madhan combines deep technical expertise with entrepreneurial experience to
                  mentor the next generation of innovators.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch TEDx Talk
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">See Credentials</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mentorship > Instruction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Mentorship {">"} Instruction</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">Traditional Instruction</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Spoon-feeding information</li>
                    <li>• One-size-fits-all approach</li>
                    <li>• Focus on memorization</li>
                    <li>• Teacher-centered learning</li>
                    <li>• Standardized outcomes</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600">DMIF Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Self-driven discovery</li>
                    <li>• Personalized guidance</li>
                    <li>• Focus on creation</li>
                    <li>• Student-centered innovation</li>
                    <li>• Original IP outcomes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes DMIF Unique */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What Makes DMIF Unique</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Real IP Creation",
                  description: "Students create actual patents and publications, not just projects",
                },
                {
                  title: "Global Recognition",
                  description: "Work with international standards and global mentor network",
                },
                {
                  title: "Startup Readiness",
                  description: "Every outcome can become a foundation for entrepreneurship",
                },
                {
                  title: "Proven Track Record",
                  description: "Led by a mentor with 127 patents and 6 successful companies",
                },
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Institutions */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Partners & Institutions</h2>
            <p className="text-lg text-gray-600 mb-12">
              DMIF collaborates with leading institutions and organizations worldwide to provide students with the best
              opportunities for growth and recognition.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow">
                  <Image
                    src={`/placeholder.svg?height=80&width=120&query=university or institution logo ${i}`}
                    alt={`Partner Institution ${i}`}
                    width={120}
                    height={80}
                    className="mx-auto opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Innovation Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join DMIF and transform from a student to an inventor and entrepreneur. Your intellectual legacy starts
            here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link href="/programs">Explore Programs</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              asChild
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
