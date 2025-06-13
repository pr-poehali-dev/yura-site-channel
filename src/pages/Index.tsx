import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PostFeed from "@/components/PostFeed";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      <main className="container px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-gray-900 mb-2">
                Свежие статьи
              </h2>
              <p className="text-gray-600">
                Последние публикации от наших авторов
              </p>
            </div>
            <PostFeed />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
