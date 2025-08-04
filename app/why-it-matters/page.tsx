import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, Brain, Globe, Award, Download, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WhyItMattersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 bg-purple-100 text-purple-800 border-purple-200">
              The Future is Creative
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Can Replicate. <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Only You Can Create.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              In the ChatGPT era, originality is power. Students who create IP or publish research will lead the future.
            </p>
          </div>
        </div>
      </section>

      {/* From IP to Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From IP to Impact</h2>
            <p className="text-xl text-gray-600 mb-12">
              Students today need more than marks — they need ownership. DMIF helps learners move from problem-solvers
              to product-builders and change-makers.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-orange-200">
                <CardHeader>
                  <Brain className="w-12 h-12 mx-auto text-orange-500 mb-4" />
                  <CardTitle className="text-xl">Traditional Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• Memorization-based learning</li>
                    <li>• Standardized assessments</li>
                    <li>• Job-seeking mindset</li>
                    <li>• Consumer of knowledge</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-purple-200 transform scale-105">
                <CardHeader>
                  <Zap className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                  <CardTitle className="text-xl">DMIF Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• Creation-based learning</li>
                    <li>• Original IP development</li>
                    <li>• Entrepreneur mindset</li>
                    <li>• Producer of innovation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <Award className="w-12 h-12 mx-auto text-green-500 mb-4" />
                  <CardTitle className="text-xl">Future Outcome</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• Global recognition</li>
                    <li>• Startup opportunities</li>
                    <li>• Innovation leadership</li>
                    <li>• Economic impact</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Creative Economy */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The $3.1 Trillion Creative Economy</h2>
              <p className="text-xl text-gray-600 mb-8">
                By 2030, the creative economy is projected to cross $5 Trillion. It already outpaces AI, Blockchain, and
                EdTech.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Creative Economy Growth"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Economic Comparison (2024)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-semibold">Creative Economy</span>
                    <span className="text-2xl font-bold text-green-600">$3.1T</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-semibold">AI Market</span>
                    <span className="text-xl font-bold text-blue-600">$150B</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-semibold">Blockchain</span>
                    <span className="text-xl font-bold text-purple-600">$67B</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-semibold">EdTech</span>
                    <span className="text-xl font-bold text-orange-600">$89B</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                  <p className="font-bold text-green-800">
                    The Creative Economy is 20x larger than AI and growing faster than any other sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">IP & Research vs Conventional Jobs</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Career Path</TableHead>
                    <TableHead>Ownership</TableHead>
                    <TableHead>Scalability</TableHead>
                    <TableHead>Long-Term Value</TableHead>
                    <TableHead>Global Recognition</TableHead>
                    <TableHead>Startup Potential</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-red-50">
                    <TableCell className="font-medium">Software Developer</TableCell>
                    <TableCell>❌ No IP ownership</TableCell>
                    <TableCell>⚠️ Medium</TableCell>
                    <TableCell>⚠️ High-effort, replaceable</TableCell>
                    <TableCell>❌ Limited</TableCell>
                    <TableCell>⚠️ Depends on skills</TableCell>
                  </TableRow>
                  <TableRow className="bg-yellow-50">
                    <TableCell className="font-medium">Government Jobs</TableCell>
                    <TableCell>❌ No ownership</TableCell>
                    <TableCell>❌ Low</TableCell>
                    <TableCell>✅ Stable</TableCell>
                    <TableCell>❌ Local only</TableCell>
                    <TableCell>❌ Very limited</TableCell>
                  </TableRow>
                  <TableRow className="bg-green-50">
                    <TableCell className="font-medium">Creative/IP Economy</TableCell>
                    <TableCell>✅ Full IP ownership</TableCell>
                    <TableCell>✅ High</TableCell>
                    <TableCell>✅ Enduring, scalable</TableCell>
                    <TableCell>✅ Global reach</TableCell>
                    <TableCell>✅ Natural pathway</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-gray-700 mb-4">
                Most students graduate with a certificate. Few graduate with IP. That's your global advantage.
              </p>
              <Button asChild>
                <Link href="#" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Full Report
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How Research/IP Improves Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How Research/IP Improves Jobs, Salaries, Startups & Immigration
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                  <CardTitle className="text-center">Better Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• R&D positions</li>
                    <li>• Innovation labs</li>
                    <li>• Product leadership roles</li>
                    <li>• Technical consulting</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <Award className="w-12 h-12 mx-auto text-green-500 mb-4" />
                  <CardTitle className="text-center">Higher Salaries</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 30-50% salary premium</li>
                    <li>• Equity participation</li>
                    <li>• Licensing royalties</li>
                    <li>• Consulting income</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <Zap className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                  <CardTitle className="text-center">Startup Edge</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• IP-based ventures</li>
                    <li>• Investor attraction</li>
                    <li>• Technical credibility</li>
                    <li>• Market differentiation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <Globe className="w-12 h-12 mx-auto text-orange-500 mb-4" />
                  <CardTitle className="text-center">Immigration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• EB1/EB2/NIW (US)</li>
                    <li>• Express Entry (Canada)</li>
                    <li>• Global Talent Visa (UK/AU)</li>
                    <li>• Startup visas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Creativity in the AI Era */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Creativity in the AI Era</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">What AI Can Do</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Replicate existing patterns</li>
                    <li>• Process vast amounts of data</li>
                    <li>• Automate routine tasks</li>
                    <li>• Generate variations of existing content</li>
                    <li>• Follow established frameworks</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600">What Only Humans Can Create</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Original inventions and IP</li>
                    <li>• Novel research insights</li>
                    <li>• Creative problem-solving approaches</li>
                    <li>• Breakthrough innovations</li>
                    <li>• Entrepreneurial vision</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">The Human Advantage</h3>
              <p className="text-lg text-gray-700 mb-4">
                While AI excels at optimization and automation, humans excel at origination and innovation. The future
                belongs to those who can create what has never existed before.
              </p>
              <p className="text-lg font-semibold text-blue-600">
                DMIF trains you to be irreplaceable in the age of AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Lead the Creative Economy?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't just adapt to the future—create it. Join DMIF and build your intellectual legacy in the age of AI.
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
