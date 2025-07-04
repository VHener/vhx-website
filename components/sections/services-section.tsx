import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Lightbulb, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Desenvolvimento de Sistemas",
    description:
      "Criamos plataformas web e sistemas personalizados para melhorar o desempenho e automatizar os processos da sua empresa.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile/Web",
    description:
      "Aplicativos modernos e responsivos, desenvolvidos para conectar empresas e clientes com eficiência e inovação.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Tecnológica",
    description:
      "Analisamos sua operação e entregamos planos de ação para transformar a tecnologia no motor de crescimento do seu negócio.",
  },
  {
    icon: BarChart3,
    title: "Transformação de Dados",
    description:
      "Integramos e organizamos dados para gerar insights valiosos, facilitando decisões estratégicas com inteligência.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-muted/30 border-b">
      <div className="container">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-muted-foreground">
            Oferecemos soluções completas e personalizadas para atender às necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
