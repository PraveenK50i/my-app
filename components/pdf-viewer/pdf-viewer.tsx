"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, ExternalLink } from "lucide-react"

interface PDFViewerProps {
  fileId: string
  title: string
  description?: string
}

export default function PDFViewer({ fileId, title, description }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const viewerUrl = `https://drive.google.com/file/d/${fileId}/preview`
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleLoadError = () => {
    setError("Failed to load the PDF. Please try the download link.")
    setIsLoading(false)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[16/9] w-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary text-center p-4">
              <p>{error}</p>
            </div>
          ) : (
            <iframe
              src={viewerUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              onLoad={() => setIsLoading(false)}
              onError={handleLoadError}
            />
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" asChild>
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
              Download PDF <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}