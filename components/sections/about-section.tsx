import { TeamMember } from "@/components/ui/team-member"

const founder = {
  name: "Vinícius Hener",
  role: "Fundador e Desenvolvedor",
  description:
    "Atua também como Dev na multinacional Thomson Reuters e aplica sua experiência em soluções tecnológicas dentro da VHX.",
  image: "/placeholder.svg?height=128&width=128",
}

const teamMembers = [
  {
    name: "Pessoa 1",
    role: "Função",
    description:
      "Especialista em desenvolvimento de soluções inovadoras com foco em experiência do usuário e performance.",
    image: "/placeholder.svg?height=128&width=128",
  },
  {
    name: "Pessoa 2",
    role: "Função",
    description: "Profissional com vasta experiência em gestão de projetos e implementação de soluções tecnológicas.",
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
              Nossa missão é entregar soluções tecnológicas de alta qualidade, com foco em inovação e resultados
              tangíveis para nossos clientes. Acreditamos que a tecnologia bem aplicada pode automatizar processos,
              reduzir custos e impulsionar negócios para um novo patamar de eficiência.
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
