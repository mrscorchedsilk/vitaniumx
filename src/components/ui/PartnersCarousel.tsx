
import React, { useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

interface PartnersCarouselProps {
  logos: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  className?: string;
}

const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ logos, className }) => {
  // Duplicate logos to create a seamless loop effect
  const extendedLogos = [...logos, ...logos];
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align: "start",
      slidesToScroll: 1,
      speed: 5, // Slower animation speed (higher number = slower)
    },
    [
      Autoplay({ 
        delay: 0, // No delay between movements for continuous scrolling
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      })
    ]
  );

  // Adjust the autoplay speed after initialization for smoother, slower scrolling
  useEffect(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        // Set a slower playback speed
        autoplay.options.playbackSpeed = 0.5; // Slower speed (lower number = slower)
      }
    }
  }, [emblaApi]);

  // Ensure carousel continues after interaction
  const onPointerDown = useCallback(() => {
    if (!emblaApi) return;
    
    // Resume autoplay after user interaction
    setTimeout(() => {
      emblaApi.plugins().autoplay?.play();
    }, 100);
  }, [emblaApi]);

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <Carousel 
        opts={{ 
          loop: true,
          align: "start",
          containScroll: "trimSnaps"
        }}
        className="w-full"
      >
        <CarouselContent 
          ref={emblaRef} 
          className="flex items-center -ml-2 md:-ml-4" 
          onPointerDown={onPointerDown}
        >
          {extendedLogos.map((logo, index) => (
            <CarouselItem 
              key={index} 
              className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 shrink-0"
            >
              <motion.div
                className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 flex items-center justify-center h-24
                         shadow-[0_10px_20px_-5px_rgba(139,92,246,0.15)] transition-all duration-300
                         hover:shadow-[0_15px_30px_-5px_rgba(139,92,246,0.25)]"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 }
                }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-16 max-w-full object-contain" 
                  width={logo.width || 'auto'} 
                  height={logo.height || 'auto'} 
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PartnersCarousel;
