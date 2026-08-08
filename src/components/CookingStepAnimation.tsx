import React from 'react';
import { motion } from 'motion/react';

export type CookingMethod = 'pressure-cooker' | 'electric-cooker' | 'open-pot';

interface CookingStepAnimationProps {
  stepNumber: number;
  method: CookingMethod;
}

export default function CookingStepAnimation({ stepNumber, method }: CookingStepAnimationProps) {

  // Map step and method to a specific image asset
  const getAssetPath = () => {
    switch (stepNumber) {
      case 1:
        return method === 'electric-cooker' ? '/assets/cooking/plastic_cooker_cup.png' : '/assets/cooking/measuring_cup_rice.png';
      case 2:
        return '/assets/cooking/bowl_washing_rice.png';
      case 3:
        return '/assets/cooking/timer_clock.png'; // Using timer for all soaking to show time passing
      case 4:
        return '/assets/cooking/water_pitcher.png';
      case 5:
        return method === 'pressure-cooker' ? '/assets/cooking/pressure_cooker_idle.png' 
             : method === 'electric-cooker' ? '/assets/cooking/electric_cooker_idle.png'
             : '/assets/cooking/open_pot_boiling.png';
      case 6:
        return method === 'pressure-cooker' ? '/assets/cooking/pressure_cooker_idle.png'
             : method === 'electric-cooker' ? '/assets/cooking/electric_cooker_idle.png'
             : '/assets/cooking/open_pot_boiling.png';
      case 7:
        return method === 'electric-cooker' ? '/assets/cooking/electric_spatula_rice.png'
             : method === 'pressure-cooker' ? '/assets/cooking/wooden_paddle_rice.png'
             : '/assets/cooking/fork_fluffing_rice.png';
      default:
        return '/assets/cooking/measuring_cup_rice.png';
    }
  };

  // Define physics-based animations for the image based on step action
  const getImageAnimation = () => {
    switch (stepNumber) {
      case 1: // Pouring
        return { rotate: [-10, 5, -10], y: [-2, 2, -2] };
      case 2: // Washing/Swirling
        return { rotate: [-3, 3, -3], scale: [1, 1.05, 1] };
      case 3: // Soaking/Timer
        return { scale: [0.95, 1.05, 0.95] };
      case 4: // Adding Water
        return { rotate: [10, -5, 10], x: [0, 5, 0] };
      case 5: // Cooking (Vibrating/Boiling)
        return { x: [-1.5, 1.5, -1.5], y: [-1, 1, -1] };
      case 6: // Resting (Gentle pulse)
        return { opacity: [0.8, 1, 0.8], scale: [0.98, 1, 0.98] };
      case 7: // Fluffing (Lifting action)
        return { y: [5, -5, 5], rotate: [-2, 2, -2] };
      default:
        return {};
    }
  };

  const getOverlayText = () => {
    if (method === 'pressure-cooker') {
      switch (stepNumber) {
        case 1: return '1 Cup Aged Rice';
        case 2: return 'Rinse 2-3 times';
        case 3: return '20-30 Mins';
        case 4: return '1 : 2.5 or 3 Ratio';
        case 5: return '3-4 Whistles';
        case 6: return 'Rest 10-15 Mins';
        case 7: return 'Fluff & Serve';
      }
    } else if (method === 'electric-cooker') {
      switch (stepNumber) {
        case 1: return '1 Provided Cup';
        case 2: return 'Separate Bowl';
        case 3: return '20-30 Mins';
        case 4: return 'Line / 1 : 2.5';
        case 5: return 'Cook Mode';
        case 6: return 'Warm 10 Mins';
        case 7: return 'Fluff & Serve';
      }
    } else {
      switch (stepNumber) {
        case 1: return '1 Cup Rice';
        case 2: return 'Drain Milky Water';
        case 3: return '30 Mins';
        case 4: return '1 : 4 or 5 Ratio';
        case 5: return 'Boil & Drain';
        case 6: return 'Rest 5 Mins';
        case 7: return 'Fluff & Serve';
      }
    }
    return '';
  };

  const assetPath = getAssetPath();
  const animProps = getImageAnimation();
  const overlayText = getOverlayText();

  // Define transition speeds based on the action intensity
  const getDuration = () => {
    if (stepNumber === 5) return 0.2; // Fast vibration for cooking/boiling
    if (stepNumber === 2) return 3;   // Slow swirl
    if (stepNumber === 6) return 4;   // Very slow pulse for resting
    return 2.5;                       // Default smooth action
  };

  return (
    <div className="w-48 h-32 bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-sm relative group flex items-center justify-center">
      
      {/* Background ambient glow based on step */}
      <div className={`absolute inset-0 opacity-20 bg-gradient-to-br 
        ${stepNumber === 5 ? 'from-rose-500 to-amber-500' : 
          stepNumber === 4 ? 'from-blue-400 to-cyan-400' : 
          'from-emerald-400 to-teal-400'}`} 
      />

      {/* The Animated High-Fidelity Image */}
      <motion.img 
        src={assetPath}
        alt={`Step ${stepNumber} illustration`}
        className="relative z-10 w-full h-full object-contain p-2 drop-shadow-xl"
        animate={animProps}
        transition={{ repeat: Infinity, duration: getDuration(), ease: "easeInOut" }}
      />

      {/* Ultra-Premium Glassmorphism Overlay */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] z-20">
        <div className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm rounded-lg px-2 py-1.5 flex items-center justify-center text-center">
          <span className="text-[10px] font-bold text-stone-800 uppercase tracking-wider leading-none">
            {overlayText}
          </span>
        </div>
      </div>
    </div>
  );
}
