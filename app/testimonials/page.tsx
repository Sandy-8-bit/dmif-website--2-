import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Featured Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              Featured Success Stories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${testimonial.gradient} border ${testimonial.border} transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col`}
                >
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-5">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full rounded-50  object-cover ring-2 ring-white shadow-sm"
                      />
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                        {/* <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div> */}
                      </div>
                    </div>

                    <Quote className={`w-7 h-7 ${testimonial.iconColor} mb-3 opacity-70`} />

                    <blockquote className="text-base italic text-gray-700 mb-5 flex-grow leading-relaxed line-clamp-6">
                      {testimonial.quote}
                    </blockquote>

                    {/* <div className="flex flex-wrap gap-1.5 mt-auto">
                      {testimonial.badges.map((badge, i) => (
                        <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5">
                          {badge}
                        </Badge>
                      ))}
                    </div> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Extracted data for clarity and maintainability
const testimonials = [
  {
    name: "Guruprasad P V",
    title: "Distinguished Engineer, Zensar",
    image: "/guruprasad.jpg",
    gradient: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    iconColor: "text-blue-400",
    quote:
      "Dr. Madhan is a rare mentor who ignites innovation. His belief in me led to co-innovating 20+ patents. He nurtures potential with vision, rigor, and empathy, making every challenge a growth opportunity. Working with him was deeply fulfilling, and DMIF will undoubtedly inspire future scholars and researchers.",
    badges: ["IEEE Publication", "Stanford Accepted", "Full Scholarship"],
  },
  {
    name: "Dr.Sreekumar Vobugari",
    title: "Senior Principal Consultant Infosys",
    image: "/placeholder.svg?height=80&width=80",
    gradient: "from-green-50 to-green-100",
    border: "border-green-200",
    iconColor: "text-green-400",
    quote:
      "Collaborating with Dr. Madhan Kumar Srinivasan has been enriching, marked by impactful research in enterprise architecture, cloud computing, and data systems. His dedication, intellect, and 90+ patents in Cloud and ML reflect his brilliance. A visionary leader, he is poised to build world-class innovations that make India proud.",
    badges: ["Patent Filed", "Startup Founded", "Investor Interest"],
  },
  {
    name: "Gagan Deep Khosla",
    title: "ISenior Manager, Accenture",
    image: "/gagan.jpg",
    gradient: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    iconColor: "text-purple-400",
    quote:
      "Working with Dr. Madhan Srinivasan on our patent application was a transformative experience. From the very beginning, he brought remarkable clarity and direction to the process — recommending the ideal format, enriching the application with his deep technical expertise, and guiding every step with precision and insight.",
    badges: ["Startup Visa", "Silicon Valley", "Patent Portfolio"],
  },
  {
    name: "Dhruv Mittal",
    title: "BS in Data Science University of California San Diego, USA",
    image: "/dhruv.png",
    gradient: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    iconColor: "text-orange-400",
    quote:
      "Working with Dr. Madhan Institute of Future on cloud security taxonomies has been transformative. Dr. Madhan’s strategic guidance turned a rough idea into a structured academic project. His ability to link research with real-world challenges, along with DMIF’s support, has been vital in shaping impactful cloud security research.",
    badges: ["EB1 Green Card", "8 Months", "Silicon Valley"],
  },
]