import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";

interface PresentationViewerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  slides: string[]; // Array of image URLs or HTML content URLs
  reportUrl: string;
}

export default function PresentationViewer({
  isOpen,
  onClose,
  title,
  slides,
  reportUrl
}: PresentationViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] flex flex-col p-0 gap-0">
        <div className="flex items-center justify-between p-4 border-b">
          <DialogTitle className="text-xl font-bold truncate flex-1 mr-4">{title}</DialogTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild className="gap-2 hidden sm:flex">
              <a href={reportUrl} target="_blank" rel="noopener noreferrer">
                Read Full Report <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 bg-black/5 relative overflow-hidden flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-4xl max-h-[calc(100%-2rem)] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <iframe 
              src={slides[currentSlide]} 
              className="w-full h-full border-0"
              title={`Slide ${currentSlide + 1}`}
            />
            
            {/* Navigation Overlays */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-full w-12 rounded-none hover:bg-black/10 text-black/50 hover:text-black"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-full w-12 rounded-none hover:bg-black/10 text-black/50 hover:text-black"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 border-t bg-background flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          
          <div className="flex items-center gap-2 sm:hidden">
            <Button variant="default" size="sm" asChild className="gap-2">
              <a href={reportUrl} target="_blank" rel="noopener noreferrer">
                Read Full Report <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
            >
              Previous
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextSlide} 
              disabled={currentSlide === slides.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
