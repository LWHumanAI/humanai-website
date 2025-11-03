import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const values = [
    "Honestidade como Princípio",
    "Humanização Acima de Tudo",
    "Inconformismo Positivo",
    "Inovação com Propósito",
    "Seriedade e Compromisso",
    "Excelência como Hábito",
    "Parceria de Longo Prazo",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-accent/30">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a HumanAI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Nascemos da crença de que a tecnologia só tem valor quando serve
              para ampliar a capacidade humana, não para substituí-la.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                A HumanAI foi fundada em 2025 por Lucas Wilson, médico com
                vasta experiência em gestão hospitalar e medicina de emergência.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent/20">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Humanizar a tecnologia para libertar profissionais de saúde,
              permitindo que dediquem mais tempo ao que realmente importa:
              cuidar de pessoas.
            </p>
            <h2 className="text-3xl font-bold mb-6">Nossa Visão</h2>
            <p className="text-lg text-muted-foreground">
              Ser a plataforma de inteligência artificial mais confiável e
              humanizada para profissionais de saúde no Brasil até 2030,
              reconhecida por transformar a prática médica através da tecnologia
              ética e centrada no ser humano.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para conhecer a HumanAI?
            </h2>
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
