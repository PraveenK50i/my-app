import PDFViewer from "@/components/pdf-viewer/pdf-viewer"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="mb-6">
          Welcome to our About Us page. We are a company dedicated to innovation and excellence in our field. 
          Our team of experts works tirelessly to bring you the best products and services.
        </p>

        <PDFViewer
          fileId="14wc6aJiZHIb5S6YE_uf-MmZlNt4ytotP"
          title="MaceQit - About Us"
          description="Our mission is to provide innovative solutions that make a positive impact on the world. We strive to exceed customer expectations and contribute to the advancement of our industry."
        />

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            Our mission is to provide innovative solutions that make a positive impact on the world. 
            We strive to exceed customer expectations and contribute to the advancement of our industry.
          </p>
        </div>
      </div>
    </div>
  )
}