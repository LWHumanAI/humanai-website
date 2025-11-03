import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, Code, GraduationCap, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Diagnóstico e Estratégia",
      description: "Mapeamos seus processos e identificamos oportunidades para implementação de IA.",
    },
    {
      icon: Code,
      title: "Implementação e Desenvolvimento",
      description: "Executamos o plano, automatizamos processos e integramos ferramentas de IA.",
    },
    {
      icon: GraduationCap,
      title: "Educação e Treinamento",
      description: "Capacitamos você e sua equipe para usar a IA de forma estratégica.",
    },
    {
      icon: Users,
      title: "Mentoria e Aconselhamento",
      description: "Acesso direto ao fundador como seu conselheiro estratégico de IA.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-accent/30">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Soluções de IA desenhadas para liberar seu tempo e potencial.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent/30">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
            <Link href="/agendar">
              <Button size="lg">Agendar Sessão Gratuita</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
