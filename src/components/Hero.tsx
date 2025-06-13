import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 md:py-24">
      <div className="container px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6 leading-tight">
            Место для{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              умных
            </span>{" "}
            идей
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Открывайте новые знания, делитесь опытом и находите вдохновение в
            сообществе мыслящих людей
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="px-8 py-4 text-lg">
              <Icon name="BookOpen" className="w-5 h-5" />
              Начать читать
            </Button>

            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Icon name="Users" className="w-5 h-5" />
              Присоединиться
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Icon name="Users" className="w-4 h-4" />
              <span>15,000+ авторов</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="FileText" className="w-4 h-4" />
              <span>50,000+ статей</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="w-4 h-4" />
              <span>1M+ читателей</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
