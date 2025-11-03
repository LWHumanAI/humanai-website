import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Schedule() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Agendar Sessão de Alinhamento
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Agende uma conversa gratuita de 30 minutos para entendermos seus desafios e como a IA pode ajudar.
            </p>
            
            <div className="bg-accent/30 rounded-lg p-12">
              <p className="text-muted-foreground mb-6">
                Sistema de agendamento será integrado em breve.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Por enquanto, entre em contato diretamente conosco.
              </p>
              <Button size="lg" asChild>
                <a href="/contato">Ir para Contato</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
