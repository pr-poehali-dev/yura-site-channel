import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="w-5 h-5 text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl text-gray-900">
              Канал
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Статьи
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Авторы
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              О нас
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-64">
            <Icon name="Search" className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Поиск статей..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          <Button variant="outline" size="sm" className="hidden md:flex">
            <Icon name="PenTool" className="w-4 h-4" />
            Написать
          </Button>

          <Button size="sm">Войти</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
