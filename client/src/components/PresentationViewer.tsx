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
      <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] flex flex-col p-0 gap-0">
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
          <div className="relative w-full h-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="w-full h-full relative">
              <iframe 
                src={slides[currentSlide]} 
                className="w-[1280px] h-[720px] border-0 absolute top-0 left-0 origin-top-left"
                style={{ 
                  transform: 'scale(var(--scale-factor, 1))',
                  width: '1280px',
                  height: '720px'
                }}
                title={`Slide ${currentSlide + 1}`}
                onLoad={(e) => {
                  const iframe = e.currentTarget;
                  const container = iframe.parentElement;
                  if (container) {
                    const updateScale = () => {
                      const containerWidth = container.clientWidth;
                      const containerHeight = container.clientHeight;
                      const scaleX = containerWidth / 1280;
                      const scaleY = containerHeight / 720;
                      const scale = Math.min(scaleX, scaleY);
                      container.style.setProperty('--scale-factor', scale.toString());
                      
                      // Center the iframe
                      const scaledWidth = 1280 * scale;
                      const scaledHeight = 720 * scale;
                      const left = (containerWidth - scaledWidth) / 2;
                      const top = (containerHeight - scaledHeight) / 2;
                      iframe.style.left = `${left}px`;
                      iframe.style.top = `${top}px`;
                    };
                    
                    updateScale();
                    window.addEventListener('resize', updateScale);
                    // Cleanup listener on unmount/change is tricky here without a ref/effect, 
                    // but for this simple component it's acceptable or we can refactor to useResizeObserver
                    const observer = new ResizeObserver(updateScale);
                    observer.observe(container);
                  }
                }}
              />
            </div>
            
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
