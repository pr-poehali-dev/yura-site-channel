import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface PostCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
  };
  publishDate: string;
  readTime: string;
  tags: string[];
  likes: number;
  comments: number;
  image?: string;
}

const PostCard = ({
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  tags,
  likes,
  comments,
  image,
}: PostCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      {image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="text-xs">
              {author.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">{author.name}</span>
            <span>•</span>
            <span>{publishDate}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>

        <h3 className="font-montserrat font-semibold text-xl leading-tight text-gray-900 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Icon name="Heart" className="w-4 h-4" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="MessageCircle" className="w-4 h-4" />
              <span>{comments}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Icon name="Bookmark" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Icon name="Share2" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
