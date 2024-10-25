import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const projects = [
    { title: "E-commerce Platform", image: "/public/images/sv.svg?height=200&width=300" },
    { title: "Social Media App", image: "/public/images/sv.svg?height=200&width=300" },
    { title: "Personal Portfolio", image: "/public/images/sv.svg?height=200&width=300" }, 
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Our Portfolio</h1>
      <p className="text-xl">Check out some of our recent projects.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-auto" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}