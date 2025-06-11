import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/ui/project-card"

const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição breve do projeto e seus principais resultados para o cliente.",
    category: "Consultoria",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição breve do projeto e seus principais resultados para o cliente.",
    category: "Aplicativo",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição breve do projeto e seus principais resultados para o cliente.",
    category: "Sistema",
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Descrição breve do projeto e seus principais resultados para o cliente.",
    category: "Aplicativo",
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "Descrição breve do projeto e seus principais resultados para o cliente.",
    category: "Consultoria",
  },
  {
    id: 6,
    title: "Projeto 6",
    description: "Descrição breve do projeto e seus principais resultados para o cliente.",
    category: "Sistema",
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
