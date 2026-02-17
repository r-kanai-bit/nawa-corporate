'use client';

import Image from 'next/image';

const FloatingMascot = () => {
  return (
    <div
      className="fixed bottom-4 right-4 z-40 pointer-events-none select-none"
      style={{ opacity: 0.9 }}
    >
      <Image
        src="/mascot.png"
        alt="NAWAマスコットキャラクター"
        width={80}
        height={172}
        className="drop-shadow-lg"
        priority={false}
      />
    </div>
  );
};

export default FloatingMascot;
