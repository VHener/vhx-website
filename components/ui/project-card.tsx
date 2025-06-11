import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ProjectCardProps {
  id: number
  title: string
  description: string
  category: string
}

export function ProjectCard({ id, title, description, category }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={`/placeholder.svg?height=200&width=400&text=${title}`} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <div className="flex gap-2">
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{category}</span>
        </div>
      </CardContent>
    </Card>
  )
}
