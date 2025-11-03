import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale Conosco</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Estamos aqui para ajudar. Entre em contato para agendar uma conversa ou tirar suas dúvidas.
            </p>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="(00) 00000-0000" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Empresa (opcional)</Label>
                <Input id="company" placeholder="Nome da empresa" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Como podemos ajudar?" rows={5} />
              </div>
              
              <Button type="submit" size="lg" className="w-full">Enviar Mensagem</Button>
            </form>

            <div className="mt-12 pt-12 border-t">
              <h3 className="font-semibold mb-4">Outras formas de contato:</h3>
              <p className="text-muted-foreground">
                E-mail: <a href="mailto:contato@imhumanai.com" className="text-primary hover:underline">contato@imhumanai.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
