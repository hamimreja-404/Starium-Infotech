import { ShieldCheck, Cloud, BrainCircuit, Bot, Code, BarChart3, Network, Workflow  } from 'lucide-react';
import { useRef,useState,useEffect } from 'react';
const iconComponents = {
  Cybersecurity: ShieldCheck,
  CloudSolutions: Cloud,
  AiMl: BrainCircuit,
  Automation: Bot,
  WebDev: Code,
  CognitiveOps: Workflow,
  DataAnalytics: BarChart3,
  NetworkSolutions: Network,
};
const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Trigger animation only once
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};

// --- Reusable Service Card Component with Animations ---
const ServiceCard = ({ icon, title, introduction, benefits, useCases, animationDelay, theme }) => {
  const IconComponent = iconComponents[icon];
  // Use our custom hook to trigger the animation
  const [cardRef, isInView] = useInView({ threshold: 0.1 });

  const cardClasses = theme === 'dark' 
    ? 'bg-[#032032] border border-[#276859] shadow-lg shadow-[#07e2d9]/10'
    : 'bg-white border border-gray-200 shadow-lg shadow-gray-300/40';
    
  const titleColor = theme === 'dark' ? 'text-[#cfd6d8]' : 'text-gray-800';
  const textColor = theme === 'dark' ? 'text-[#8a979e]' : 'text-gray-600';
  const iconColor = theme === 'dark' ? 'text-[#07e2d9]' : 'text-teal-500';

  const buttonClasses = theme === 'dark'
    ? 'bg-[#25bc7b] text-[#032032] hover:bg-[#07e2d9] hover:shadow-[#07e2d9]/50'
    : 'bg-teal-500 text-white hover:bg-teal-600 hover:shadow-teal-500/50';

  return (
    <div
      ref={cardRef}
      className={`rounded-lg p-6 flex flex-col h-full group transition-all duration-500 ease-out transform ${cardClasses}
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <div className="flex items-center mb-4">
        {IconComponent && (
            <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <IconComponent className={`h-12 w-12 ${iconColor}`} strokeWidth={1.5} />
            </div>
        )}
        <h3 className={`text-2xl font-bold ml-4 ${titleColor}`}>{title}</h3>
      </div>
      <p className={`${textColor} mb-4 flex-grow`}>{introduction}</p>
      
      <div className="mb-4">
          <h4 className={`font-semibold mb-2 ${titleColor}`}>Key Benefits:</h4>
          <ul className={`list-disc list-inside space-y-1 ${textColor}`}>
              {benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
          </ul>
      </div>
      
      <div className="mb-6">
          <h4 className={`font-semibold mb-2 ${titleColor}`}>Use Cases:</h4>
          <p className={`${textColor} italic`}>{useCases}</p>
      </div>

      <div className="mt-auto">
          <a 
              href="#contact" 
              className={`inline-block w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1 ${buttonClasses}`}
          >
              Contact Us to Know More
          </a>
      </div>
    </div>
  );
};


export {ServiceCard}
