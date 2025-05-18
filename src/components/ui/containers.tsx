
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

export const HeroSection = ({ 
  children, 
  className = "", 
  backgroundImage,
  overlay = true
}: HeroSectionProps) => {
  return (
    <section className={`relative min-h-[60vh] flex items-center ${className}`}>
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${backgroundImage})` }} 
          />
          {overlay && <div className="absolute inset-0 bg-black/50 z-0" />}
        </>
      )}
      <div className="container-custom relative z-10">
        {children}
      </div>
    </section>
  );
};
