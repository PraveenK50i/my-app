import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    { title: "Web Development", description: "Custom websites tailored to your needs." },
    { title: "Mobile Apps", description: "Native and cross-platform mobile applications." },
    { title: "UI/UX Design", description: "User-centered design for optimal user experience." },
    { title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure." },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <p className="text-xl">Explore the range of services we offer to help your business grow.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}