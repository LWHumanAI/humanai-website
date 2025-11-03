import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">HumanAI</h3>
            <p className="text-sm text-muted-foreground">
              Inteligência que humaniza.
              <br />
              Performance que liberta.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Diagnóstico e Estratégia</li>
              <li className="text-muted-foreground">Implementação</li>
              <li className="text-muted-foreground">Educação e Treinamento</li>
              <li className="text-muted-foreground">Mentoria</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contato@imhumanai.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  contato@imhumanai.com
                </a>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-foreground transition-colors">
                  Formulário de Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} HumanAI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
