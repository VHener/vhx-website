import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { NeuralBackground } from "@/components/ui/neural-background"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden border-b">
      <NeuralBackground />
      <div className="container relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Soluções Tecnológicas <span className="text-primary">Sob Medida</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Transformamos ideias em soluções digitais inovadoras que impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg">Solicite um orçamento</Button>
              <Button variant="outline" size="lg">
                <MessageSquare className="mr-2 h-4 w-4" />
                Fale no WhatsApp
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="relative w-[500px] h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-lg"></div>
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=500')] bg-cover bg-center opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Tecnologia Avançada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
