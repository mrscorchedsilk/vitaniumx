
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
  
  // Create autoplay plugin instance outside of useEmblaCarousel to have more control
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: false // Changed to false to manually start after initialization
  };
  
  const autoplayPlugin = Autoplay(autoplayOptions);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align: "start",
      slidesToScroll: 1,
    },
    [autoplayPlugin]
  );

  // Safely handle autoplay initialization after the carousel is fully mounted
  useEffect(() => {
    // Only attempt to access plugins when emblaApi is defined
    if (emblaApi) {
      // Wait a short time to ensure carousel is fully initialized
      const timer = setTimeout(() => {
        try {
          // Optionally slow down the carousel movement itself
          emblaApi.reInit({
            duration: 50 // This slows down the transition animation (higher value = slower)
          });
          
          // Start autoplay after the carousel is fully initialized
          autoplayPlugin.play();
        } catch (error) {
          console.error("Error initializing carousel:", error);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [emblaApi, autoplayPlugin]);

  // Ensure carousel continues after interaction
  const onPointerDown = useCallback(() => {
    if (!emblaApi) return;
    
    // Resume autoplay after user interaction
    setTimeout(() => {
      try {
        autoplayPlugin.play();
      } catch (error) {
        console.error("Error resuming autoplay:", error);
      }
    }, 100);
  }, [emblaApi, autoplayPlugin]);

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
