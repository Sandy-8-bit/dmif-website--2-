import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Users, Clock, CheckCircle, Upload, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

export default function ApplyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 bg-green-100 text-green-800 border-green-200">
              Applications Open
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build IP. Create Impact. <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Launch the Future.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Apply to our next batch and start your journey from student to inventor to entrepreneur.
            </p>
          </div>
        </div>
      </section>

      {/* Cohort Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Upcoming Batch Details</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="font-bold mb-2">Start Date</h3>
                  <p className="text-gray-600">August 2025</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="font-bold mb-2">Seats Available</h3>
                  <p className="text-gray-600">30 per track</p>
                </CardContent>
              </Card>
              <Card className="text-center">
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
              <Card className="text-center">
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
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Investment in Your Future</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white px-4 py-2">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <Lightbulb className="w-16 h-16 mx-auto text-orange-500 mb-4" />
                  <CardTitle className="text-2xl">Patent Track</CardTitle>
                  <CardDescription className="text-lg">The Innovation Engine</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-400 line-through mb-2">$1,500</div>
                    <div className="text-5xl font-bold text-orange-600 mb-2">$899</div>
                    <p className="text-sm text-gray-600">Early Bird Discount - Limited Time</p>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Complete IDF + TID development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Patent filing readiness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Co-inventor recognition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Startup foundation support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Legal handover via ImagineX</span>
                    </li>
                  </ul>
                  <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                    Apply for Patent Track
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader className="text-center">
                  <Award className="w-16 h-16 mx-auto text-green-500 mb-4" />
                  <CardTitle className="text-2xl">Research Track</CardTitle>
                  <CardDescription className="text-lg">The Scholarly Explorer</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-400 line-through mb-2">$1,000</div>
                    <div className="text-5xl font-bold text-green-600 mb-2">$599</div>
                    <p className="text-sm text-gray-600">Early Bird Discount - Limited Time</p>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>IEEE/Springer/ACM ready paper</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Professional presentation deck</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Co-authorship eligibility</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Conference submission guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Q&A session coaching</span>
                    </li>
                  </ul>
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    Apply for Research Track
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                <strong>Payment Options:</strong> Full payment or installments available
              </p>
              <p className="text-sm text-gray-500">
                All prices in USD. INR payments accepted at current exchange rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Eligibility Criteria</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Academic Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Currently enrolled in undergraduate/graduate program</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Minimum 60% aggregate or equivalent GPA</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Basic English proficiency for communication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Access to computer and stable internet</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Ideal Candidates</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Curious and self-motivated learners</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Interest in innovation and entrepreneurship</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Commitment to complete the program</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Willingness to think beyond textbooks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Form</h2>
              <p className="text-lg text-gray-600">Take the first step towards building your intellectual legacy</p>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>DMIF Application</CardTitle>
                <CardDescription>Fill out all required fields to complete your application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">WhatsApp Number *</label>
                      <Input placeholder="+91 9999999999" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Country *</label>
                      <Select>
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
                      <Select>
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
                      <Input placeholder="e.g., Computer Science, Engineering" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Institution Name *</label>
                      <Input placeholder="Your college/university name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Year of Study</label>
                      <Select>
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
                      <Checkbox id="patent-track" />
                      <label
                        htmlFor="patent-track"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Patent Track - The Innovation Engine ($899)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="research-track" />
                      <label
                        htmlFor="research-track"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Research Track - The Scholarly Explorer ($599)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="both-tracks" />
                      <label
                        htmlFor="both-tracks"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
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
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Resume/CV (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="updates" />
                    <label
                      htmlFor="updates"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I want to receive updates about DMIF programs and opportunities
                    </label>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-4 pt-6">
                  <Button className="flex-1" size="lg">
                    Submit Application
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Join Waitlist</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Submit Application</h3>
                  <p className="text-sm text-gray-600">
                    Complete the online application form with all required details
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Initial Review</h3>
                  <p className="text-sm text-gray-600">Our team reviews your application within 48 hours</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Brief Interview</h3>
                  <p className="text-sm text-gray-600">15-minute call to understand your goals and motivation</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-orange-600">4</span>
                  </div>
                  <h3 className="font-bold mb-2">Confirmation</h3>
                  <p className="text-sm text-gray-600">Receive acceptance and payment instructions</p>
                </CardContent>
              </Card>
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
                  <h3 className="font-bold mb-2">What if I'm not sure which track to choose?</h3>
                  <p className="text-gray-600">
                    During the brief interview, our team will help you choose the track that best aligns with your goals
                    and interests. You can also opt for both tracks for a comprehensive experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Is there any guarantee of patent filing or publication?</h3>
                  <p className="text-gray-600">
                    Yes, we guarantee that every student who completes the program will have patent-ready documentation
                    or publication-ready research. However, actual filing/submission depends on your choice and
                    additional fees may apply.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Can I get a refund if I'm not satisfied?</h3>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee if you're not satisfied with the program quality. However,
                    we're confident you'll find immense value in the mentorship and outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">What happens after I complete the program?</h3>
                  <p className="text-gray-600">
                    You'll join our alumni network, get access to startup incubation opportunities, and can continue
                    working with our mentors on commercializing your IP or research.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Innovation Journey Starts Here</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait for the perfect moment. The perfect moment is now. Apply today and start building your
            intellectual legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Submit Application Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              asChild
            >
              <Link href="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
