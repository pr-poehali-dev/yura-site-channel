import PostCard from "@/components/PostCard";

const PostFeed = () => {
  const posts = [
    {
      title: "Будущее искусственного интеллекта: что нас ждет в 2024 году",
      excerpt:
        "Исследуем последние тенденции в области ИИ и машинного обучения, анализируем перспективы развития технологий и их влияние на повседневную жизнь.",
      author: {
        name: "Анна Козлова",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=32&h=32&fit=crop&crop=face",
        initials: "АК",
      },
      publishDate: "5 дек",
      readTime: "8 мин",
      tags: ["ИИ", "Технологии", "Будущее"],
      likes: 142,
      comments: 23,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    },
    {
      title: "Секреты продуктивности: как работать эффективнее",
      excerpt:
        "Практические советы по тайм-менеджменту, организации рабочего пространства и развитию полезных привычек для достижения максимальной продуктивности.",
      author: {
        name: "Михаил Петров",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
        initials: "МП",
      },
      publishDate: "3 дек",
      readTime: "6 мин",
      tags: ["Продуктивность", "Саморазвитие", "Работа"],
      likes: 89,
      comments: 15,
    },
    {
      title: "Устойчивое развитие: экологические инновации в бизнесе",
      excerpt:
        "Как современные компании внедряют зеленые технологии, снижают углеродный след и создают устойчивые бизнес-модели для будущих поколений.",
      author: {
        name: "Елена Смирнова",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
        initials: "ЕС",
      },
      publishDate: "1 дек",
      readTime: "10 мин",
      tags: ["Экология", "Бизнес", "Инновации"],
      likes: 67,
      comments: 8,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
    },
    {
      title: "Психология успеха: ментальные модели лидеров",
      excerpt:
        "Разбираем когнитивные паттерны успешных людей, изучаем техники принятия решений и стратегии мышления для достижения амбициозных целей.",
      author: {
        name: "Дмитрий Волков",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
        initials: "ДВ",
      },
      publishDate: "28 ноя",
      readTime: "7 мин",
      tags: ["Психология", "Лидерство", "Успех"],
      likes: 156,
      comments: 31,
    },
    {
      title: "Кибербезопасность в цифровую эпоху: защита данных",
      excerpt:
        "Обзор современных угроз информационной безопасности, методов защиты персональных данных и корпоративной информации в условиях цифровизации.",
      author: {
        name: "Алексей Новиков",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
        initials: "АН",
      },
      publishDate: "25 ноя",
      readTime: "9 мин",
      tags: ["Безопасность", "IT", "Данные"],
      likes: 93,
      comments: 12,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop",
    },
    {
      title: "Медитация и осознанность: наука о внутреннем спокойствии",
      excerpt:
        "Научные исследования о влиянии медитативных практик на мозг, здоровье и качество жизни. Практические техники для начинающих.",
      author: {
        name: "София Белова",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=32&h=32&fit=crop&crop=face",
        initials: "СБ",
      },
      publishDate: "22 ноя",
      readTime: "5 мин",
      tags: ["Медитация", "Здоровье", "Наука"],
      likes: 78,
      comments: 19,
    },
  ];

  return (
    <div className="grid gap-6 md:gap-8">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};

export default PostFeed;
