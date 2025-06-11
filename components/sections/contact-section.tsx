import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MessageSquare } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground">
            Estamos prontos para ajudar a transformar sua ideia em realidade. Entre em contato conosco hoje mesmo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nome
                  </label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    E-mail
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensagem
                  </label>
                  <Textarea id="message" placeholder="Como podemos ajudar?" rows={5} />
                </div>
                <Button className="w-full">Enviar mensagem</Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Fale conosco diretamente</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">E-mail</p>
                      <a
                        href="mailto:contato@vhxtech.com.br"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        contato@vhxtech.com.br
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Telefone</p>
                      <a href="tel:+551199999999" className="text-sm text-muted-foreground hover:text-primary">
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">WhatsApp</p>
                      <a
                        href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20VHX%20Tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        Iniciar conversa
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button variant="default" size="lg" className="w-full" asChild>
              <a
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20VHX%20Tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Fale no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
