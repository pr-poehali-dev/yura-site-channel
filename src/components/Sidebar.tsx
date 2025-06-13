import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Sidebar = () => {
  const popularTags = [
    { name: "ИИ", count: 234 },
    { name: "Технологии", count: 189 },
    { name: "Саморазвитие", count: 156 },
    { name: "Бизнес", count: 142 },
    { name: "Психология", count: 128 },
    { name: "Здоровье", count: 97 },
    { name: "Наука", count: 84 },
    { name: "Инновации", count: 73 },
  ];

  const topAuthors = [
    {
      name: "Анна Козлова",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=32&h=32&fit=crop&crop=face",
      initials: "АК",
      articles: 45,
      followers: "12.3k",
    },
    {
      name: "Михаил Петров",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      initials: "МП",
      articles: 38,
      followers: "8.7k",
    },
    {
      name: "Елена Смирнова",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      initials: "ЕС",
      articles: 29,
      followers: "6.1k",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Популярные теги */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-montserrat flex items-center gap-2">
            <Icon name="Hash" className="w-5 h-5 text-purple-600" />
            Популярные теги
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-purple-50 hover:border-purple-200 transition-colors"
              >
                {tag.name} ({tag.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Топ авторы */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-montserrat flex items-center gap-2">
            <Icon name="Star" className="w-5 h-5 text-purple-600" />
            Топ авторы
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {topAuthors.map((author, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback className="text-sm">
                    {author.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-sm text-gray-900">
                    {author.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {author.articles} статей • {author.followers} подписчиков
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-xs">
                Подписка
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Подписка на рассылку */}
      <Card className="bg-gradient-to-br from-purple-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-lg font-montserrat flex items-center gap-2">
            <Icon name="Mail" className="w-5 h-5 text-purple-600" />
            Еженедельная рассылка
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Получайте лучшие статьи недели прямо на почту
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="ваш@email.com"
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Button className="w-full">Подписаться</Button>
          </div>
        </CardContent>
      </Card>

      {/* Статистика */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-montserrat flex items-center gap-2">
            <Icon name="TrendingUp" className="w-5 h-5 text-purple-600" />
            Статистика платформы
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Статей опубликовано</span>
            <span className="font-semibold text-purple-600">50,247</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Активных авторов</span>
            <span className="font-semibold text-purple-600">15,394</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Читателей в месяц</span>
            <span className="font-semibold text-purple-600">1.2M</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
