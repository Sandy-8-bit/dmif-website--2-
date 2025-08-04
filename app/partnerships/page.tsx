import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Users, Award, TrendingUp, Download, Phone, Building, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
              Institutional Partnerships
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Partner With DMIF</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Join the future of education. Collaborate with DMIF to transform your students into innovators and
              entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional IP & Startup Enablement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Institutional IP & Startup Enablement</h2>
            <p className="text-xl text-gray-600">
              DMIF helps institutions nurture students as potential startup founders and innovation leaders.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <Building className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-center">Institution Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Enhanced NAAC/NIRF rankings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Increased patent portfolio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Research publication boost</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Innovation ecosystem development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle className="text-center">Student Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real IP creation experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Entrepreneurial mindset development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Better placement opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Global recognition potential</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader>
                <Globe className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-center">Long-term Value</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span>Alumni startup success stories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span>Industry collaboration opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span>Research commercialization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span>Innovation culture establishment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Institutions Should Collaborate */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Institutions Should Collaborate</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                        Ranking Enhancement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Boost your institution's NAAC, NIRF, and ARIIA rankings through increased research output and
                        innovation metrics.
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• Patent applications per faculty/student</li>
                        <li>• Research publications in high-impact journals</li>
                        <li>• Innovation and entrepreneurship indicators</li>
                        <li>• Industry collaboration scores</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-6 h-6 text-green-600" />
                        Academic Excellence
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Transform your academic programs with real-world innovation and research outcomes.
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• Student-led research projects</li>
                        <li>• Faculty development in innovation</li>
                        <li>• Industry-relevant curriculum enhancement</li>
                        <li>• Global collaboration opportunities</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-6 h-6 text-purple-600" />
                        Student Success
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Provide your students with competitive advantages in placements and higher education.
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• Better placement packages and opportunities</li>
                        <li>• Higher acceptance rates in top universities</li>
                        <li>• Entrepreneurial skill development</li>
                        <li>• Global mobility preparation</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="University Innovation"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MoU Models Available */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">MoU Models Available</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Program Integration Model</CardTitle>
                  <CardDescription>Integrate DMIF tracks into your curriculum</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li>• Semester-long innovation courses</li>
                    <li>• Capstone project mentorship</li>
                    <li>• Faculty co-supervision</li>
                    <li>• Student IP co-ownership</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-600">Duration: 1-2 semesters</p>
                    <p className="text-sm text-gray-600">Best for: Engineering & Science programs</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Center of Excellence Model</CardTitle>
                  <CardDescription>Establish a dedicated innovation center</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li>• Dedicated innovation lab setup</li>
                    <li>• Full-time DMIF coordinator</li>
                    <li>• Industry partnership facilitation</li>
                    <li>• Startup incubation support</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-600">Duration: 3-5 years</p>
                    <p className="text-sm text-gray-600">Best for: Universities & Large Colleges</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Faculty Development Model</CardTitle>
                  <CardDescription>Train your faculty in innovation mentorship</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li>• Faculty training workshops</li>
                    <li>• Mentorship certification program</li>
                    <li>• Research collaboration opportunities</li>
                    <li>• IP creation guidance</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-purple-600">Duration: 6 months - 1 year</p>
                    <p className="text-sm text-gray-600">Best for: All institution types</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Student Cohort Model</CardTitle>
                  <CardDescription>Dedicated batches for your students</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li>• Institution-specific cohorts</li>
                    <li>• Customized curriculum</li>
                    <li>• Flexible scheduling</li>
                    <li>• Bulk enrollment discounts</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-orange-600">Duration: 4-6 months</p>
                    <p className="text-sm text-gray-600">Best for: Quick implementation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Partnership Success Stories</h2>
            <div className="space-y-8">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <Image
                        src="/placeholder.svg?height=120&width=200"
                        alt="VIT University"
                        width={200}
                        height={120}
                        className="mx-auto"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold mb-2">VIT University Partnership</h3>
                      <p className="text-gray-600 mb-4">
                        Integrated DMIF innovation tracks into their Computer Science curriculum, resulting in 40+
                        student patents and 60+ research publications in one academic year.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <Badge variant="secondary">150+ Students</Badge>
                        <Badge variant="secondary">40 Patents</Badge>
                        <Badge variant="secondary">60 Publications</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <Image
                        src="/placeholder.svg?height=120&width=200"
                        alt="SRM University"
                        width={200}
                        height={120}
                        className="mx-auto"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold mb-2">SRM University Collaboration</h3>
                      <p className="text-gray-600 mb-4">
                        Established a Center of Excellence for Innovation, leading to improved NIRF rankings and 25%
                        increase in industry placements for participating students.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <Badge variant="secondary">CoE Established</Badge>
                        <Badge variant="secondary">NIRF Boost</Badge>
                        <Badge variant="secondary">25% Placement Increase</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Partnership Journey</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below or schedule a call to discuss how DMIF can transform your institution.
              </p>
            </div>

            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle>Partnership Inquiry Form</CardTitle>
                <CardDescription>Tell us about your institution and partnership interests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Institution Name *</label>
                    <Input placeholder="Enter institution name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Institution Type *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="university">University</SelectItem>
                        <SelectItem value="college">College</SelectItem>
                        <SelectItem value="institute">Technical Institute</SelectItem>
                        <SelectItem value="school">School</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Person *</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Designation *</label>
                    <Input placeholder="Your designation" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="your.email@institution.edu" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <Input placeholder="+91 9999999999" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Partnership Model Interest</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="program-integration">Program Integration</SelectItem>
                      <SelectItem value="center-excellence">Center of Excellence</SelectItem>
                      <SelectItem value="faculty-development">Faculty Development</SelectItem>
                      <SelectItem value="student-cohort">Student Cohort</SelectItem>
                      <SelectItem value="custom">Custom Model</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Student Strength (Approximate)</label>
                  <Input placeholder="e.g., 5000 students" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your institution's goals and how you'd like to collaborate with DMIF..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">Submit Inquiry</Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent" asChild>
                    <Link href="#">
                      <Phone className="w-4 h-4" />
                      Schedule a Call
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Partnership Resources</h2>
            <p className="text-lg text-gray-600 mb-12">
              Download detailed information about our partnership models and success stories
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Download className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="font-bold mb-2">MoU Template</h3>
                  <p className="text-sm text-gray-600 mb-4">Sample MoU document with terms and conditions</p>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Download className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="font-bold mb-2">Partnership Brochure</h3>
                  <p className="text-sm text-gray-600 mb-4">Detailed overview of all partnership models</p>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Download className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="font-bold mb-2">Success Stories</h3>
                  <p className="text-sm text-gray-600 mb-4">Case studies from partner institutions</p>
                  <Button variant="outline" size="sm">
                    Download PDF
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Institution?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading institutions worldwide in preparing students for the innovation economy. Let's build the future
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Submit Partnership Inquiry
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
