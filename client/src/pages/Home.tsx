import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, Code, GraduationCap, Users, ArrowRight } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Search,
      title: "Diagnóstico e Estratégia",
      description: "Identificamos onde a IA pode gerar o maior impacto na sua vida ou empresa.",
    },
    {
      icon: Code,
      title: "Implementação",
      description: "Executamos o plano, automatizando processos e integrando ferramentas.",
    },
    {
      icon: GraduationCap,
      title: "Educação",
      description: "Capacitamos você e sua equipe para usar a IA de forma estratégica.",
    },
    {
      icon: Users,
      title: "Mentoria",
      description: "Acesso direto ao fundador para aconselhamento contínuo.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/30">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Inteligência que humaniza.
                <br />
                Performance que liberta.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Transformamos a forma como você trabalha e vive, usando a Inteligência Artificial
                para liberar seu tempo e potencial para o que realmente importa: criar, liderar e conectar.
              </p>
              <Link href="/agendar">
                <Button size="lg" className="text-lg px-8 py-6">
                  Agendar Sessão de Alinhamento Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* O Problema */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              O Problema que Resolvemos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A maioria dos profissionais e empresas de alta performance enfrenta o mesmo dilema:
              quanto mais bem-sucedidos, mais sobrecarregados. O tempo que deveria ser dedicado à
              estratégia, à inovação e às conexões humanas é consumido por tarefas operacionais e repetitivas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              A promessa da tecnologia era nos libertar. Mas, para muitos, ela se tornou apenas mais
              uma fonte de sobrecarga. A HumanAI existe para mudar isso.
            </p>
          </div>
        </section>

        {/* Nossa Solução */}
        <section className="py-20 bg-accent/30">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Nossa Solução
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Usamos a Inteligência Artificial não como um fim, mas como um meio para alcançar algo maior:
              a humanização do trabalho. Nossos serviços são desenhados para otimizar suas operações e
              dedicar tempo para o que é estrategicamente humano.
            </p>
            <p className="text-xl font-semibold text-center mt-6">
              Não vendemos tecnologia. Vendemos tempo, clareza e performance.
            </p>
          </div>
        </section>

        {/* Por Que Somos Diferentes */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Por Que a HumanAI é Diferente
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nascemos da experiência real nos ambientes mais críticos e complexos da medicina:
              a linha de frente da Medicina de Emergência, a Terapia Intensiva e a direção de grandes
              prontos-socorros. Essa vivência nos deu a disciplina para entregar soluções de IA validadas,
              seguras e que geram performance tangível em qualquer setor.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              <strong>Nosso fundador, Lucas Wilson</strong>, é médico, gestor hospitalar e especialista
              em ambientes de alta complexidade. Ele traz para o mundo dos negócios a seriedade, a disciplina
              e o foco de um profissional que lida com decisões de vida ou morte todos os dias.
            </p>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-20 bg-accent/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Nossos Serviços
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Link href="/servicos">
                <Button variant="outline" size="lg">
                  Ver Todos os Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para libertar seu potencial?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende uma Sessão de Alinhamento gratuita e descubra como a IA pode
              transformar sua vida e seu trabalho.
            </p>
            <Link href="/agendar">
              <Button size="lg" className="text-lg px-8 py-6">
                Agendar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
