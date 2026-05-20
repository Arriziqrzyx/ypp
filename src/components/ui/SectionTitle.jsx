import { cn } from "../../utils/cn";

export function SectionTitle({ 
  title, 
  subtitle, 
  className,
  alignment = "left"
}) {
  return (
    <div className={cn(
      "flex flex-col gap-4 mb-16",
      alignment === "center" && "items-center text-center",
      alignment === "right" && "items-end text-right",
      className
    )}>
      {subtitle && (
        <span className="uppercase tracking-[0.2em] text-primary-red text-sm font-semibold">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-bg tracking-tight uppercase relative">
        {title}
        <span className={cn(
          "absolute -bottom-6 h-1 w-24 bg-industrial-blue block",
          alignment === "center" && "left-1/2 -translate-x-1/2",
          alignment === "right" && "right-0"
        )} />
      </h2>
    </div>
  );
}
