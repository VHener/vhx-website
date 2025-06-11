import { TeamMember } from "@/components/ui/team-member"

const founder = {
  name: "Vinícius Hener",
  role: "Fundador e Desenvolvedor",
  description:
    "Fundador da VHX Tech e desenvolvedor de sistemas com experiência nacional e internacional. Atua também como Dev na multinacional Thomson Reuters, levando para a VHX as melhores práticas do mercado global.",
  image: "/placeholder.svg?height=128&width=128",
}

const teamMembers = [
  {
    name: "Ana Costa",
    role: "UX Designer",
    description: "Responsável pelas interfaces modernas e experiências intuitivas dos projetos entregues pela VHX.",
    image: "/placeholder.svg?height=128&width=128",
  },
  {
    name: "Lucas Almeida",
    role: "Arquiteto de Soluções",
    description:
      "Especialista em infraestrutura e arquitetura de sistemas, garantindo segurança, performance e escalabilidade.",
    image: "/placeholder.svg?height=128&width=128",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 border-b">
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a VHX Tech</h2>
            <p className="text-muted-foreground">
              A VHX Tech é uma empresa de tecnologia que entrega soluções digitais sob medida, com foco em inovação,
              performance e resultados reais. Nossa missão é transformar ideias em soluções tecnológicas eficientes,
              conectando estratégia com execução e aproximando empresas do seu potencial digital máximo. Acreditamos que
              a tecnologia deve ser clara, útil e escalável — e é isso que oferecemos.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Quem faz a VHX acontecer</h3>

            {/* Founder - Destacado no topo */}
            <div className="flex justify-center mb-12">
              <div className="max-w-md">
                <TeamMember {...founder} featured />
              </div>
            </div>

            {/* Other team members */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
