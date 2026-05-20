import { cn } from "../../utils/cn";

export function Button({ 
  children, 
  variant = "primary", 
  className, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-heading font-semibold transition-all duration-300 uppercase tracking-widest text-sm cursor-pointer";
  
  const variants = {
    primary: "bg-dark-bg text-off-white hover:bg-industrial-blue hover:text-off-white border border-transparent",
    outline: "border border-light-gray bg-white text-dark-bg hover:border-industrial-blue hover:text-industrial-blue",
    ghost: "text-industrial-blue hover:text-dark-bg"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
