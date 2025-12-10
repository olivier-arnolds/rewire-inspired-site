import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, FileText, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
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
  const [dimensions, setDimensions] = useState({ width: 1280, height: 720 });

  // Calculate optimal dimensions to fit 16:9 slide within viewport
  useEffect(() => {
    const calculateDimensions = () => {
      const maxWidth = window.innerWidth * 0.95;
      const maxHeight = window.innerHeight * 0.90;
      const chromeHeight = 140; // Header + Footer + Padding approx
      
      const availableSlideHeight = maxHeight - chromeHeight;
      const availableSlideWidth = maxWidth;
      
      let slideWidth, slideHeight;
      
      if (availableSlideWidth / availableSlideHeight > 16/9) {
        // Height is limiting
        slideHeight = availableSlideHeight;
        slideWidth = slideHeight * (16/9);
      } else {
        // Width is limiting
        slideWidth = availableSlideWidth;
        slideHeight = slideWidth / (16/9);
      }
      
      setDimensions({ width: slideWidth, height: slideHeight });
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, []);

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
      <DialogContent 
        className="flex flex-col p-0 gap-0 transition-all duration-200 ease-in-out"
        showCloseButton={false}
        style={{ 
          width: `${dimensions.width}px`, 
          maxWidth: '95vw',
          height: 'auto',
          maxHeight: '95vh'
        }}
      >
        <div className="flex items-center justify-between p-4 border-b shrink-0">
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

        <div className="bg-black/5 relative overflow-hidden flex items-center justify-center p-0">
          <div 
            className="relative bg-white shadow-lg overflow-hidden flex flex-col"
            style={{ width: dimensions.width, height: dimensions.height }}
          >
            <div className="w-full h-full relative">
              <iframe 
                src={slides[currentSlide]} 
                className="w-[1280px] h-[720px] border-0 absolute top-0 left-0 origin-top-left"
                style={{ 
                  transform: `scale(${dimensions.width / 1280})`,
                  width: '1280px',
                  height: '720px'
                }}
                title={`Slide ${currentSlide + 1}`}
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
