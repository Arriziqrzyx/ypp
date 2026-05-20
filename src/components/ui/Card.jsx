import { cn } from "../../utils/cn";

export function Card({ 
  children, 
  className,
  imageSrc,
  imageAlt = "Card Image",
  ...props
}) {
  return (
    <div 
      {...props}
      className={cn(
        "group relative overflow-hidden bg-white border border-dark-bg/10 transition-all duration-500 hover:border-primary-red",
        className
      )}
    >
      {imageSrc && (
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-dark-bg/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
      )}
      <div className="p-8 relative z-20">
        {children}
      </div>
    </div>
  );
}
