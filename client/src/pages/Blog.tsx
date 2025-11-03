import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights sobre IA, produtividade, liderança e humanização do trabalho.
            </p>
            <div className="mt-12">
              <p className="text-muted-foreground">Em breve: artigos e conteúdos exclusivos.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
