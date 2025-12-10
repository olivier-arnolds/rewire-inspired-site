import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Newspaper } from "lucide-react";

interface NewsItem {
  title: string;
  source: string;
  date: string;
  summary: string;
  category: string;
  url?: string;
  fullContent?: string;
}

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  newsItem: NewsItem | null;
}

export default function NewsModal({ isOpen, onClose, newsItem }: NewsModalProps) {
  if (!newsItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-card border-border">
        <DialogHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs font-normal">
              {newsItem.category}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{newsItem.date}</span>
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold mb-2">{newsItem.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-2 text-primary font-medium">
            <Newspaper className="w-4 h-4" />
            {newsItem.source}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-muted-foreground leading-relaxed">
            {newsItem.fullContent || newsItem.summary}
          </p>
        </div>

        <DialogFooter className="sm:justify-between items-center gap-4 border-t border-border/50 pt-4 mt-2">
          <p className="text-xs text-muted-foreground hidden sm:block">
            Read the full story on the original website
          </p>
          <Button asChild className="gap-2">
            <a href={newsItem.url || "#"} target="_blank" rel="noopener noreferrer">
              Read Full Article <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
