import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  description: string
  image: string
  featured?: boolean
}

export function TeamMember({ name, role, description, image, featured = false }: TeamMemberProps) {
  return (
    <Card className={`bg-card/50 backdrop-blur ${featured ? "ring-2 ring-primary/20 shadow-lg" : ""}`}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className={`rounded-full overflow-hidden mb-4 ${featured ? "w-40 h-40" : "w-32 h-32"}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={featured ? 160 : 128}
            height={featured ? 160 : 128}
            className="object-cover"
          />
        </div>
        <h4 className={`font-bold ${featured ? "text-2xl" : "text-xl"}`}>{name}</h4>
        <p className={`text-primary font-medium ${featured ? "text-lg" : ""}`}>{role}</p>
        <p className={`text-muted-foreground mt-2 ${featured ? "text-base" : "text-sm"}`}>{description}</p>
      </CardContent>
    </Card>
  )
}
