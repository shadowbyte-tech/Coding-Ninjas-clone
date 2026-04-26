import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CompanyLogo = React.memo(({ name, src, size = 'md' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getInitials = (n) => {
    return n ? n.substring(0, 2).toUpperCase() : 'CN';
  };

  const dimensions = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-16 h-16 text-lg',
    lg: 'w-24 h-24 text-2xl',
  }[size];

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      className={`relative rounded-2xl flex items-center justify-center overflow-hidden shrink-0 shadow-lg border border-white/10 ${dimensions}`}
    >
      {/* Fallback & Loading State Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />

      {isLoading && !hasError && (
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        />
      )}

      {hasError || !src ? (
        <span className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-tr from-orange-400 to-rose-400">
          {getInitials(name)}
        </span>
      ) : (
        <img
          src={src}
          alt={`${name} logo`}
          className={`relative z-10 w-full h-full object-contain p-2 transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}
    </motion.div>
  );
});

CompanyLogo.displayName = 'CompanyLogo';
