import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Globe, TrendingUp, Award, Users, MapPin, Briefcase, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OutcomesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 bg-green-100 text-green-800 border-green-200">
              Student Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Student Outcomes</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              See how DMIF transforms students into innovators, entrepreneurs, and global leaders
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes by Student Type */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="indian" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="indian" className="text-lg py-4">
                <GraduationCap className="w-5 h-5 mr-2" />
                Indian Students
              </TabsTrigger>
              <TabsTrigger value="global" className="text-lg py-4">
                <Globe className="w-5 h-5 mr-2" />
                US/Global Students
              </TabsTrigger>
              <TabsTrigger value="immigration" className="text-lg py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Immigration Seekers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="indian">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-12 h-12 text-blue-500" />
                    <div>
                      <h2 className="text-3xl font-bold">For Indian Students</h2>
                      <p className="text-xl text-gray-600">Building a competitive edge in the Indian market</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="bg-blue-50 border-blue-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="w-6 h-6 text-blue-600" />
                          Better Placements
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>• Entry into R&D divisions of top companies</li>
                          <li>• Product teams at tech giants (Google, Microsoft, Amazon)</li>
                          <li>• Innovation labs and research centers</li>
                          <li>• 30-50% higher starting salaries</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="w-6 h-6 text-green-600" />
                          Academic Excellence
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>• Stronger resume for IIT/NIT/IIM admissions</li>
                          <li>• Edge in competitive fellowships</li>
                          <li>• Research publications boost GATE/CAT scores</li>
                          <li>• Direct PhD admissions with research background</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 border-purple-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="w-6 h-6 text-purple-600" />
                          Entrepreneurial Thinking
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>• Startup-minded approach from Day 1</li>
                          <li>• IP-based business model understanding</li>
                          <li>• Access to incubation programs</li>
                          <li>• Network of entrepreneur mentors</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Indian Student Success"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg mb-8"
                  />

                  <Card className="bg-gradient-to-r from-orange-100 to-red-100 border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-800">Success Story</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic mb-4">
                        "After completing DMIF's patent track, I got placed at Microsoft Research with a 40% higher
                        package than my peers. My invention became part of my interview discussion!"
                      </p>
                      <p className="font-semibold">- Rahul K., B.Tech CSE, VIT</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="global">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-12 h-12 text-green-500" />
                    <div>
                      <h2 className="text-3xl font-bold">For US/Global Students</h2>
                      <p className="text-xl text-gray-600">Standing out in competitive global markets</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="bg-blue-50 border-blue-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="w-6 h-6 text-blue-600" />
                          Ivy League Profile Boost
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>• Research publications for top university applications</li>
                          <li>• Patent portfolios that differentiate from peers</li>
                          <li>• Strong SOPs with original research experience</li>
                          <li>• Faculty recommendation letters based on real work</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="w-6 h-6 text-green-600" />
                          Co-authorship & Co-invention
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>• Published papers with your name as co-author</li>
                          <li>• Patent applications with co-inventor status</li>
                          <li>• Academic portfolio beyond grades</li>
                          <li>• Research experience for graduate programs</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 border-purple-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="w-6 h-6 text-purple-600" />
                          Startup-Minded Research
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>• Research portfolios with commercial potential</li>
                          <li>• Understanding of IP commercialization</li>
                          <li>• Network access to Silicon Valley mentors</li>
                          <li>• Entrepreneurial mindset development</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Global Student Success"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg mb-8"
                  />

                  <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Success Story</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic mb-4">
                        "My DMIF research paper was the highlight of my Stanford application. The admissions committee
                        specifically mentioned it during my interview!"
                      </p>
                      <p className="font-semibold">- Sarah M., International Student</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="immigration">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-12 h-12 text-purple-500" />
                    <div>
                      <h2 className="text-3xl font-bold">For PR/Immigration Seekers</h2>
                      <p className="text-xl text-gray-600">Fast-track your global mobility</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="bg-blue-50 border-blue-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Globe className="w-6 h-6 text-blue-600" />
                          United States
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            • <strong>EB1:</strong> Extraordinary ability based on patents/publications
                          </li>
                          <li>
                            • <strong>EB2-NIW:</strong> National interest waiver for researchers
                          </li>
                          <li>
                            • <strong>O-1 Visa:</strong> Extraordinary ability in sciences
                          </li>
                          <li>• Research publications strengthen all applications</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 border-red-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="w-6 h-6 text-red-600" />
                          Canada
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            • <strong>Express Entry:</strong> Additional points for research/IP
                          </li>
                          <li>
                            • <strong>Provincial Nominee:</strong> Priority for innovators
                          </li>
                          <li>
                            • <strong>Start-up Visa:</strong> IP-based business ventures
                          </li>
                          <li>• Academic credentials boost CRS scores</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="w-6 h-6 text-green-600" />
                          UK & Australia
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            • <strong>Global Talent Visa (UK):</strong> For exceptional researchers
                          </li>
                          <li>
                            • <strong>Global Talent Visa (AU):</strong> Distinguished talent program
                          </li>
                          <li>• Research publications as evidence of expertise</li>
                          <li>• Fast-track processing for qualified applicants</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Immigration Success"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg mb-8"
                  />

                  <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-800">Success Story</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic mb-4">
                        "My DMIF patent and research papers were crucial evidence for my EB1 application. I got my green
                        card in just 8 months!"
                      </p>
                      <p className="font-semibold">- Dr. Priya S., Now in Silicon Valley</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Success by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <p className="text-gray-600">Patent/Publication Success Rate</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <p className="text-gray-600">Average Salary Increase</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                  <p className="text-gray-600">Top University Acceptance</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">70%</div>
                  <p className="text-gray-600">Immigration Success Rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Long-term Impact</h2>
            <p className="text-xl text-gray-600 mb-12">
              DMIF graduates don't just get better jobs—they create better futures
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle>5 Years Later</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li>• Leadership roles in R&D</li>
                    <li>• Multiple patent portfolios</li>
                    <li>• Startup founding experience</li>
                    <li>• Global recognition</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader>
                  <Award className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <CardTitle>10 Years Later</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li>• Industry thought leaders</li>
                    <li>• Successful entrepreneurs</li>
                    <li>• Academic professors</li>
                    <li>• Innovation consultants</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardHeader>
                  <Globe className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <CardTitle>Legacy Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li>• Creating jobs for others</li>
                    <li>• Mentoring next generation</li>
                    <li>• Solving global challenges</li>
                    <li>• Building lasting IP assets</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already started building their intellectual legacy with DMIF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link href="/apply">Start Your Journey</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              asChild
            >
              <Link href="/testimonials">Explore All Benefits</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
