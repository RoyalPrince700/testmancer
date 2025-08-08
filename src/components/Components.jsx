import React from 'react';

// Primary Gamified Button with Bounce Effect
const PrimaryButton = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-primary text-white font-poppins font-semibold py-3 px-6 rounded-full hover:bg-primary-light active:bg-primary-dark transition-all duration-200 transform hover:scale-105 active:scale-95 animate-bounce-pulse ${className}`}
  >
    {children}
  </button>
);

// Secondary Gamified Button with Gradient and Hover Glow
const SecondaryButton = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-gradient-to-r from-gradientFun-start to-gradientFun-end text-white font-poppins font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-secondary-light/50 transition-all duration-300 transform hover:scale-105 active:scale-95 ${className}`}
  >
    {children}
  </button>
);

// Gold Badge with Shiny Effect
const GoldBadge = ({ label = 'Gold Achiever' }) => (
  <div
    className="bg-gold text-bgDark font-poppins font-bold py-2 px-4 rounded-full text-center bg-[length:200%_100%] bg-shiny-gradient animate-shine shadow-md"
    title="Gold Badge for top-tier achievements"
  >
    {label}
  </div>
);

// Silver Badge with Subtle Shine
const SilverBadge = ({ label = 'Silver Star' }) => (
  <div
    className="bg-silver text-bgDark font-poppins font-bold py-2 px-4 rounded-full text-center bg-[length:200%_100%] bg-shiny-gradient animate-shine shadow-md"
    title="Silver Badge for great efforts"
  >
    {label}
  </div>
);

// Bronze Badge with Simple Shine
const BronzeBadge = ({ label = 'Bronze Hero' }) => (
  <div
    className="bg-bronze text-bgDark font-poppins font-bold py-2 px-4 rounded-full text-center bg-[length:200%_100%] bg-shiny-gradient animate-shine shadow-md"
    title="Bronze Badge for solid progress"
  >
    {label}
  </div>
);

// Trophy Component with Spinning Animation
const TrophyBadge = ({ label = 'Trophy Winner' }) => (
  <div
    className="bg-trophy text-bgDark font-poppins font-bold py-2 px-4 rounded-full text-center flex items-center justify-center space-x-2 shadow-md"
    title="Trophy for special achievements"
  >
    <span className="animate-spin-slow">🏆</span>
    <span>{label}</span>
  </div>
);

// Example Usage Component for Preview
const ThemePreview = () => (
  <div className="bg-bgLight min-h-screen p-8 flex flex-col gap-6">
    {/* Button Previews */}
    <div className="flex gap-4">
      <PrimaryButton>Play Now!</PrimaryButton>
      <SecondaryButton>Claim Reward</SecondaryButton>
    </div>
    {/* Badge Previews */}
    <div className="flex gap-4 flex-wrap">
      <GoldBadge />
      <SilverBadge />
      <BronzeBadge />
      <TrophyBadge />
    </div>
  </div>
);

export { PrimaryButton, SecondaryButton, GoldBadge, SilverBadge, BronzeBadge, TrophyBadge, ThemePreview };