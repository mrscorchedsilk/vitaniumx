
import React, { useEffect, useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

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
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  );

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {extendedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_16.666%] min-w-0 pl-4"
              >
                <div
                  className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 flex items-center justify-center h-24
                           shadow-[0_10px_20px_-5px_rgba(139,92,246,0.15)] transition-all duration-300
                           hover:shadow-[0_15px_30px_-5px_rgba(139,92,246,0.25)] hover:scale-105"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-16 max-w-full object-contain" 
                    width={logo.width || 'auto'} 
                    height={logo.height || 'auto'} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
