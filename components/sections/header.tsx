"use client"

import { Button } from "@/components/ui/button"
import { Code, ChevronDown, Phone, MessageSquare } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">VHX Tech</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">
            Serviços
          </Link>
          <Link href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link href="#projetos" className="text-sm font-medium hover:text-primary transition-colors">
            Projetos
          </Link>
          <Link href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Phone className="mr-2 h-4 w-4" />
            (11) 99999-9999
          </Button>
          <Button size="sm" className="hidden md:flex">
            <MessageSquare className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
