
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Video, Headphones, BookOpen, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

type ResourceType = "video" | "audio" | "text" | "book";

interface ResourceCardProps {
  title: string;
  description: string;
  type: ResourceType;
  link: string;
  className?: string;
  tags?: string[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  type, 
  link, 
  className,
  tags = []
}) => {
  const getIcon = () => {
    switch (type) {
      case "video":
        return <Video className="h-5 w-5" />;
      case "audio":
        return <Headphones className="h-5 w-5" />;
      case "text":
        return <FileText className="h-5 w-5" />;
      case "book":
        return <BookOpen className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case "video":
        return "bg-red-100 text-red-800";
      case "audio":
        return "bg-purple-100 text-purple-800";
      case "text":
        return "bg-blue-100 text-blue-800";
      case "book":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleResourceClick = () => {
    // Check if the link is valid before opening
    if (!link || link.includes("thepodcast.com") || link.includes("projectmanagement.com/podcasts") || 
        link.includes("charityhowto.com/podcasts") || link.includes("nonprofithub.org/podcasts")) {
      toast.warning("This resource is currently unavailable. Please try another one.");
      return;
    }
    
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="outline" className={cn("flex items-center gap-1", getTypeColor())}>
            {getIcon()}
            <span className="capitalize">{type}</span>
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={handleResourceClick}
        >
          <span className="flex items-center gap-1">
            <span>View Resource</span>
            <ExternalLink className="h-3 w-3" />
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
