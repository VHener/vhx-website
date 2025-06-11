import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/ui/project-card"

const projects = [
  {
    id: 1,
    title: "Sistema de gestão para clínicas",
    description: "Plataforma web com agendamento, prontuário eletrônico e painel de controle.",
    category: "Sistema",
  },
  {
    id: 2,
    title: "App para delivery local",
    description: "Aplicativo mobile para restaurantes com pedidos, pagamentos e integração com WhatsApp.",
    category: "Aplicativo",
  },
  {
    id: 3,
    title: "Dashboard de BI para indústrias",
    description: "Sistema com indicadores em tempo real, análise de desempenho e relatórios dinâmicos.",
    category: "Sistema",
  },
  {
    id: 4,
    title: "E-commerce personalizado",
    description: "Loja virtual completa com gestão de produtos, vendas e integração com marketplaces.",
    category: "Sistema",
  },
  {
    id: 5,
    title: "Consultoria em transformação digital",
    description: "Análise completa de processos e implementação de soluções tecnológicas integradas.",
    category: "Consultoria",
  },
  {
    id: 6,
    title: "App de gestão financeira",
    description: "Aplicativo para controle financeiro empresarial com relatórios e análises avançadas.",
    category: "Aplicativo",
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-16 md:py-24 border-b">
      <div className="container">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Projetos</h2>
          <p className="text-muted-foreground">
            Conheça alguns dos projetos que desenvolvemos e como ajudamos nossos clientes a alcançar seus objetivos.
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="sistemas">Sistemas</TabsTrigger>
              <TabsTrigger value="apps">Aplicativos</TabsTrigger>
              <TabsTrigger value="consultoria">Consultoria</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="todos" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sistemas" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.category === "Sistema")
                .map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="apps" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.category === "Aplicativo")
                .map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="consultoria" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.category === "Consultoria")
                .map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
