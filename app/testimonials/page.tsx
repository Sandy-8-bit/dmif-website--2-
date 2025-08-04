import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Award, TrendingUp, Users, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 bg-purple-100 text-purple-800 border-purple-200">
              Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Testimonials & Achievements</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Hear from students who transformed their futures through DMIF's mentorship program
            </p>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Success Stories</h2>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Priya Sharma"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Priya Sharma</h3>
                      <p className="text-gray-600">B.Tech CSE, VIT University</p>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "I never imagined I could co-author a paper in college! DMIF's research track helped me publish my
                    first IEEE paper on machine learning applications in healthcare. This became the highlight of my
                    Stanford application, and I got accepted with a full scholarship."
                  </blockquote>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">IEEE Publication</Badge>
                    <Badge variant="secondary">Stanford Accepted</Badge>
                    <Badge variant="secondary">Full Scholarship</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Arjun Kumar"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Arjun Kumar</h3>
                      <p className="text-gray-600">B.Tech ECE, IIT Delhi</p>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-green-400 mb-4" />
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "My idea became a full invention under Dr. Madhan's mentorship — and now I'm building a product
                    around it. The patent track gave me not just IP ownership, but the entrepreneurial mindset to turn
                    my invention into a startup. We're now in talks with investors!"
                  </blockquote>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">Patent Filed</Badge>
                    <Badge variant="secondary">Startup Founded</Badge>
                    <Badge variant="secondary">Investor Interest</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Sarah Mitchell"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Sarah Mitchell</h3>
                      <p className="text-gray-600">International Student, Canada</p>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "This invention became the base of my startup. DMIF didn't just teach me to innovate—it taught me to
                    think like an entrepreneur from day one. My patent portfolio helped me secure a startup visa and I'm
                    now building my company in Silicon Valley."
                  </blockquote>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">Startup Visa</Badge>
                    <Badge variant="secondary">Silicon Valley</Badge>
                    <Badge variant="secondary">Patent Portfolio</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Dr. Rajesh Patel"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Dr. Rajesh Patel</h3>
                      <p className="text-gray-600">Now in Silicon Valley</p>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-orange-400 mb-4" />
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "After DMIF, I got incubated with my research-based idea. My DMIF patent and research papers were
                    crucial evidence for my EB1 application. I got my green card in just 8 months and now work at a
                    leading tech company in Silicon Valley."
                  </blockquote>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">EB1 Green Card</Badge>
                    <Badge variant="secondary">8 Months</Badge>
                    <Badge variant="secondary">Silicon Valley</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Student Outcomes by Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Success by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-600">Students Mentored</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <p className="text-gray-600">Success Rate</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <p className="text-gray-600">Patents Filed</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 mx-auto text-orange-600 mb-4" />
                  <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
                  <p className="text-gray-600">Publications</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* More Student Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">More Student Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Ananya Reddy",
                  role: "B.Tech Biotech, BITS Pilani",
                  story:
                    "Published my first research paper on sustainable agriculture through DMIF. Now pursuing PhD at MIT with full funding.",
                  achievement: "MIT PhD",
                  rating: 5,
                },
                {
                  name: "Karthik Menon",
                  role: "M.Tech AI/ML, IIT Bombay",
                  story:
                    "My AI patent from DMIF helped me get placed at Google Research with a 60% higher package than my peers.",
                  achievement: "Google Research",
                  rating: 5,
                },
                {
                  name: "Lisa Chen",
                  role: "International Student, Singapore",
                  story:
                    "DMIF's research track gave me the academic edge I needed. Got accepted to Harvard, Oxford, and Cambridge!",
                  achievement: "Triple Ivy Accept",
                  rating: 5,
                },
                {
                  name: "Rohit Sharma",
                  role: "B.E. Mechanical, Anna University",
                  story: "From a small town to Silicon Valley - my DMIF patent opened doors I never imagined possible.",
                  achievement: "Silicon Valley",
                  rating: 5,
                },
                {
                  name: "Maria Rodriguez",
                  role: "Computer Science, Spain",
                  story: "The entrepreneurial mindset from DMIF helped me launch my startup. We're now valued at $2M!",
                  achievement: "$2M Valuation",
                  rating: 5,
                },
                {
                  name: "Vikram Singh",
                  role: "B.Tech CSE, NIT Trichy",
                  story:
                    "My research paper became the foundation for my PhD thesis. Now a professor at IIT at just 28!",
                  achievement: "IIT Professor",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.story}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <Badge variant="secondary" className="mt-2">
                        {testimonial.achievement}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patent & Publication Showcase */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Patent & Publication Showcase</h2>
            <p className="text-lg text-gray-600 mb-12">Real patents and publications created by DMIF students</p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-blue-600" />
                    Recent Patents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-sm">AI-Powered Healthcare Diagnostic System</h4>
                      <p className="text-xs text-gray-600">Patent Application: US20240XXXXX</p>
                      <p className="text-xs text-gray-500">Student: Priya K., VIT University</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-sm">Smart Agriculture Monitoring Device</h4>
                      <p className="text-xs text-gray-600">Patent Application: US20240XXXXX</p>
                      <p className="text-xs text-gray-500">Student: Arjun M., IIT Delhi</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-sm">Blockchain Supply Chain Tracker</h4>
                      <p className="text-xs text-gray-600">Patent Application: US20240XXXXX</p>
                      <p className="text-xs text-gray-500">Student: Sarah L., International</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-green-600" />
                    Recent Publications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-sm">Machine Learning for Climate Prediction</h4>
                      <p className="text-xs text-gray-600">IEEE Conference on Climate Informatics 2024</p>
                      <p className="text-xs text-gray-500">Co-author: Ananya R., BITS Pilani</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-sm">Sustainable Energy Optimization Systems</h4>
                      <p className="text-xs text-gray-600">Springer Nature Energy Journal</p>
                      <p className="text-xs text-gray-500">Co-author: Vikram S., NIT Trichy</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-sm">Social Media Impact on Mental Health</h4>
                      <p className="text-xs text-gray-600">ACM Digital Health Conference</p>
                      <p className="text-xs text-gray-500">Co-author: Lisa C., International</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Partner Feedback */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Institutional Partner Feedback</h2>
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Dr. Rajesh Kumar"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Dr. Rajesh Kumar</h3>
                      <p className="text-gray-600">Dean of Engineering, VIT University</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <blockquote className="text-lg italic text-gray-700">
                    "DMIF has transformed how our students think about innovation. In just one year, we've seen a 300%
                    increase in patent applications and our NIRF ranking improved significantly. Dr. Madhan's mentorship
                    approach is exactly what modern education needs."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Prof. Meera Sharma"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Prof. Meera Sharma</h3>
                      <p className="text-gray-600">Head of Research, SRM University</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-green-400 mb-4" />
                  <blockquote className="text-lg italic text-gray-700">
                    "The quality of research output from students who've gone through DMIF is exceptional. They don't
                    just complete projects—they create intellectual property. Our industry partnerships have
                    strengthened because of the innovation mindset DMIF instills."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Fame */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Wall of Fame</h2>
            <p className="text-lg text-gray-600 mb-12">Celebrating our students' achievements and recognitions</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <Card key={i} className="bg-white p-4">
                  <Image
                    src={`/placeholder.svg?height=120&width=120&query=achievement badge or certificate ${i}`}
                    alt={`Achievement ${i}`}
                    width={120}
                    height={120}
                    className="mx-auto rounded-lg"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submit Your Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your DMIF Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Are you a DMIF graduate? We'd love to hear about your journey and achievements!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Submit Your Experience</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/apply">Join Our Next Batch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have already transformed their futures through DMIF. Your success story could
            be next.
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
              <Link href="/programs">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
