import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Globe, MapPin, Calendar, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Ready to start your innovation journey? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input placeholder="Your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input placeholder="+91 9999999999" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Select>
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
                      <Textarea placeholder="Tell us how we can help you..." rows={5} />
                    </div>

                    <Button className="w-full" size="lg">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get Quick Answers</h2>
                  <div className="space-y-4">
                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <MessageSquare className="w-6 h-6 text-blue-600" />
                          <h3 className="font-semibold">Program Inquiries</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                          Have questions about our Patent or Research tracks? Want to know about eligibility,
                          curriculum, or outcomes?
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/programs">View Programs</Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-6 h-6 text-green-600" />
                          <h3 className="font-semibold">Application Process</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                          Ready to apply? Learn about our application process, requirements, and upcoming batch dates.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/apply">Apply Now</Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <MapPin className="w-6 h-6 text-purple-600" />
                          <h3 className="font-semibold">Institutional Partnerships</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                          Interested in partnering with DMIF for your institution? Explore our collaboration models.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/partnerships">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Office Hours</h3>
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">How quickly will I receive a response?</h3>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24 hours during business days. For urgent matters,
                    please call us directly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Can I schedule a call with Dr. Madhan?</h3>
                  <p className="text-gray-600">
                    Yes! We offer consultation calls for prospective students and institutional partners. Use our
                    calendar booking system or mention it in your inquiry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Do you offer campus visits or presentations?</h3>
                  <p className="text-gray-600">
                    Absolutely! We regularly conduct campus presentations and workshops. Contact us to discuss bringing
                    DMIF to your institution.
                  </p>
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
            Don't wait - your innovation journey starts with a single step. Reach out today and let's build your
            intellectual legacy together.
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
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
