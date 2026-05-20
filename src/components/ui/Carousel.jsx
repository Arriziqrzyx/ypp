import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from "../../utils/cn";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Carousel({ 
  items, 
  renderItem, 
  className,
  slidesPerView = 1,
  breakpoints = {},
  autoplay = false
}) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className={cn("relative group", className)}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        loop={true}
        autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
        pagination={{ 
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return `<span class="inline-flex items-center justify-center bg-dark-bg/80 backdrop-blur-md text-white text-[10px] font-heading font-bold tracking-[0.2em] px-4 py-1.5 rounded-full uppercase shadow-lg">
                      FOTO <span class="${currentClass} mx-1"></span> / <span class="${totalClass} ml-1"></span>
                    </span>`;
          }
        }}
        navigation={{
          prevEl,
          nextEl,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevEl;
          swiper.params.navigation.nextEl = nextEl;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="pb-16" // Space for pagination
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button 
        ref={(node) => setPrevEl(node)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-dark-bg hover:text-primary-red rounded-full shadow-md transition-all duration-300 opacity-0 md:group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} strokeWidth={2} />
      </button>
      <button 
        ref={(node) => setNextEl(node)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-dark-bg hover:text-primary-red rounded-full shadow-md transition-all duration-300 opacity-0 md:group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight size={24} strokeWidth={2} />
      </button>

      {/* Override default swiper pagination styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-fraction { 
          bottom: 24px !important; 
          left: 50% !important; 
          transform: translateX(-50%); 
          width: auto !important;
          z-index: 20;
        }
      `}} />
    </div>
  );
}
