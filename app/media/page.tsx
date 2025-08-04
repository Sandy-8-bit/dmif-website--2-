import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, Calendar, Users, Award, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MediaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 bg-red-100 text-red-800 border-red-200">Media & Talks</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Media & Thought Leadership</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Insights, talks, and thought leadership from Dr. Madhan and the DMIF community
            </p>
          </div>
        </div>
      </section>

      {/* TEDx Talks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">TEDx Talks by Dr. Madhan</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="TEDx Talk 1"
                      width={350}
                      height={200}
                      className="rounded-lg w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors cursor-pointer">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Why Every Student Should Graduate with IP</h3>
                  <p className="text-gray-600 mb-4">
                    Dr. Madhan explains why intellectual property creation should be part of every student's education
                    journey.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>TEDx VIT • 2023</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="TEDx Talk 2"
                      width={350}
                      height={200}
                      className="rounded-lg w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-600 rounded-full p-4 hover:bg-blue-700 transition-colors cursor-pointer">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">The Rise of the Inventor-Founder Generation</h3>
                  <p className="text-gray-600 mb-4">
                    How the next generation of entrepreneurs will be defined by their ability to create original IP.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>TEDx SRM • 2024</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="TEDx Talk 3"
                      width={350}
                      height={200}
                      className="rounded-lg w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-green-600 rounded-full p-4 hover:bg-green-700 transition-colors cursor-pointer">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mentorship That Leads to Market Readiness</h3>
                  <p className="text-gray-600 mb-4">
                    The difference between traditional teaching and mentorship that creates market-ready innovators.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>TEDx Chennai • 2024</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Lectures & Masterclasses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Guest Lectures & Masterclasses</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Users className="w-12 h-12 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-bold">Innovation & Patent Masterclasses</h3>
                      <p className="text-gray-600">For universities and institutions</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li>• IIT Delhi - "From Research to Patents"</li>
                    <li>• IIM Bangalore - "Innovation in Business"</li>
                    <li>• VIT University - "Student Innovation Program"</li>
                    <li>• SRM University - "Entrepreneurial Thinking"</li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Request a Masterclass
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="w-12 h-12 text-green-600" />
                    <div>
                      <h3 className="text-xl font-bold">Industry Conferences</h3>
                      <p className="text-gray-600">Speaking at global events</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li>• World Innovation Summit, Dubai</li>
                    <li>• IEEE Innovation Conference, USA</li>
                    <li>• Global Entrepreneurship Summit</li>
                    <li>• India Innovation Week</li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Invite as Speaker
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Thought Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Blog & Thought Leadership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Why Every Student Should Graduate with IP",
                  excerpt:
                    "In the age of AI, intellectual property is the only sustainable competitive advantage. Here's why every student should create IP before graduation.",
                  date: "March 15, 2024",
                  readTime: "5 min read",
                  category: "Education",
                },
                {
                  title: "The Rise of the Inventor-Founder Generation",
                  excerpt:
                    "The next generation of successful entrepreneurs will be those who can create original IP and build businesses around their innovations.",
                  date: "March 10, 2024",
                  readTime: "7 min read",
                  category: "Entrepreneurship",
                },
                {
                  title: "Mentorship That Leads to Market Readiness",
                  excerpt:
                    "Traditional education creates followers. True mentorship creates leaders. Here's the difference and why it matters.",
                  date: "March 5, 2024",
                  readTime: "6 min read",
                  category: "Mentorship",
                },
                {
                  title: "AI Can Replicate, Only Humans Can Create",
                  excerpt:
                    "As AI becomes more powerful, the value of human creativity and original thinking increases exponentially.",
                  date: "February 28, 2024",
                  readTime: "8 min read",
                  category: "Innovation",
                },
                {
                  title: "From Research to Revenue: The IP Journey",
                  excerpt:
                    "How students can transform their research projects into valuable intellectual property and potential business ventures.",
                  date: "February 20, 2024",
                  readTime: "10 min read",
                  category: "IP Strategy",
                },
                {
                  title: "Building India's Innovation Ecosystem",
                  excerpt:
                    "The role of educational institutions in creating a culture of innovation and entrepreneurship among students.",
                  date: "February 15, 2024",
                  readTime: "9 min read",
                  category: "Policy",
                },
              ].map((post, index) => (
                <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="#" className="flex items-center gap-1">
                          Read More
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="#" className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Visit Full Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Awards & Recognition</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-gold-500" />
                    Professional Awards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>National Innovation Award, Government of India (2023)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Excellence in Patent Innovation, WIPO (2022)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Outstanding Mentor Award, IEEE (2023)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Innovation Leadership Award, CII (2024)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-green-500" />
                    Academic Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Professor of Practice, VIT University</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Visiting Faculty, SRM University</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Research Advisor, Multiple IITs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Innovation Consultant, Government of India</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interviews & Panel Discussions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Interviews & Panel Discussions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "The Future of Innovation Education",
                  platform: "Economic Times",
                  type: "Interview",
                  date: "March 2024",
                },
                {
                  title: "Building India's Patent Ecosystem",
                  platform: "Business Standard",
                  type: "Panel Discussion",
                  date: "February 2024",
                },
                {
                  title: "Mentorship vs Traditional Teaching",
                  platform: "The Hindu",
                  type: "Op-Ed",
                  date: "January 2024",
                },
                {
                  title: "AI and Human Creativity",
                  platform: "Forbes India",
                  type: "Interview",
                  date: "December 2023",
                },
                {
                  title: "Student Entrepreneurship Trends",
                  platform: "YourStory",
                  type: "Feature",
                  date: "November 2023",
                },
                {
                  title: "Innovation in Higher Education",
                  platform: "India Today",
                  type: "Panel Discussion",
                  date: "October 2023",
                },
              ].map((media, index) => (
                <Card key={index} className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{media.type}</Badge>
                    </div>
                    <h3 className="font-bold mb-2">{media.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{media.platform}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{media.date}</span>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="#" className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Read/Watch
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Media Kit</h2>
            <p className="text-lg text-gray-600 mb-12">
              Resources for journalists, event organizers, and media professionals
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="font-bold mb-2">Biography & Photos</h3>
                  <p className="text-sm text-gray-600 mb-4">High-resolution photos and detailed biography</p>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="font-bold mb-2">Speaking Topics</h3>
                  <p className="text-sm text-gray-600 mb-4">List of available speaking topics and abstracts</p>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="font-bold mb-2">Press Releases</h3>
                  <p className="text-sm text-gray-600 mb-4">Recent press releases and announcements</p>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaboration?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For speaking engagements, interviews, or media collaborations, get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link href="/contact">Media Inquiries</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              asChild
            >
              <Link href="/contact">Speaking Requests</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
