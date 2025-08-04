import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Lightbulb, Award, ArrowRight, Users, Clock, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">Choose Your Path</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">DMIF Programs</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Two distinct tracks designed to transform students into inventors and entrepreneurs
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="patents" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="patents" className="text-lg py-4">
                <Lightbulb className="w-5 h-5 mr-2" />
                Track 1: Patents
              </TabsTrigger>
              <TabsTrigger value="research" className="text-lg py-4">
                <Award className="w-5 h-5 mr-2" />
                Track 2: Research
              </TabsTrigger>
            </TabsList>

            <TabsContent value="patents">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb className="w-12 h-12 text-yellow-500" />
                    <div>
                      <h2 className="text-3xl font-bold">Track 1: Patents</h2>
                      <p className="text-xl text-gray-600">The Innovation Engine</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Who It's For:</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Inventive thinkers, tech innovators, and problem-solvers who want to patent their ideas and build
                      the foundation for future startups.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">What You'll Learn:</h3>
                    <ul className="space-y-3">
                      {[
                        "Invention Thinking & Ideation",
                        "Drafting IDF + TID (Technology Innovation Document)",
                        "Technology mapping & prior art analysis",
                        "Patentability criteria & IP strategy",
                        "Problem-Solution engineering",
                        "Commercial viability assessment",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Core Focus Areas:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "AI & Machine Learning",
                        "IoT & Smart Systems",
                        "Blockchain & Fintech",
                        "Healthcare Innovation",
                        "Sustainable Technology",
                        "Robotics & Automation",
                      ].map((area, index) => (
                        <Badge key={index} variant="secondary" className="p-2 text-center">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Patent Innovation Lab"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg mb-8"
                  />

                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-xl">Sample Student Inventions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>• AI-powered healthcare diagnostic system</li>
                        <li>• Smart agriculture monitoring device</li>
                        <li>• Blockchain-based supply chain tracker</li>
                        <li>• Energy-efficient IoT sensor network</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Deliverables & Outcomes</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">You'll Receive:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        <span>Final IDF + TID documentation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        <span>Patent readiness review & filing guidance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        <span>Co-inventor recognition certificate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        <span>Legal handover via ImagineX Innovations</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Future Opportunities:</h4>
                    <p className="text-gray-600 mb-4">
                      <strong>Launchpad for future products, companies, or deep-tech startups</strong>
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-500" />
                        <span>Startup incubation opportunities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-500" />
                        <span>Licensing & commercialization support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-500" />
                        <span>Investor pitch preparation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" asChild>
                    <Link href="/apply?track=patents">Apply for Patent Track</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="research">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-12 h-12 text-green-500" />
                    <div>
                      <h2 className="text-3xl font-bold">Track 2: Research</h2>
                      <p className="text-xl text-gray-600">The Scholarly Explorer</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Who It's For:</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Students passionate about inquiry, data, discovery, and academic writing who want to publish at
                      global conferences and build research-based startups.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">What You'll Learn:</h3>
                    <ul className="space-y-3">
                      {[
                        "Research framing & hypothesis development",
                        "Methodology design & experimental tools",
                        "Literature review & gap analysis",
                        "Academic paper writing & structure",
                        "Journal/conference selection strategy",
                        "Scientific storytelling & presentation",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Research Domains:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Computer Science",
                        "Data Science & AI",
                        "Engineering Systems",
                        "Biotechnology",
                        "Environmental Science",
                        "Social Innovation",
                      ].map((domain, index) => (
                        <Badge key={index} variant="secondary" className="p-2 text-center">
                          {domain}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Research Laboratory"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg mb-8"
                  />

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-xl">Sample Research Outcomes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>• Machine learning for climate prediction</li>
                        <li>• Blockchain applications in healthcare</li>
                        <li>• Sustainable energy optimization systems</li>
                        <li>• Social media impact on mental health</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Deliverables & Outcomes</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">You'll Receive:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Final Paper (IEEE/Springer/ACM-ready)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Professional presentation deck</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Q&A session coaching</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Co-authorship eligibility certificate</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Target Conferences:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-500" />
                        <span>IEEE International Conferences</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-500" />
                        <span>Springer Nature Journals</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-500" />
                        <span>ACM Digital Library</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-500" />
                        <span>Domain-specific top-tier venues</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Research thinking to entrepreneurial action through real-world inquiry.
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" asChild>
                    <Link href="/apply?track=research">Apply for Research Track</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <Users className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                  <CardTitle>1. Mentorship Model</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Direct guidance from Dr. Madhan and expert mentors, not traditional teaching
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <Clock className="w-12 h-12 mx-auto text-green-500 mb-4" />
                  <CardTitle>2. Flexible Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Weekly 1-hour sessions, fully online, designed around your academic schedule
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <Target className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                  <CardTitle>3. Guaranteed Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Every student completes with tangible IP - patents or publications</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Choose Your Track?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're drawn to invention or research, both tracks lead to the same destination: becoming an
            innovator and entrepreneur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              asChild
            >
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
