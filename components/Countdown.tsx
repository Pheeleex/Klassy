'use client';
import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-09-01T00:00:00Z');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="text-white text-3xl font-light tracking-wider text-center mt-4">
      {String(days).padStart(2, '0')}D:{' '}
      {String(hours).padStart(2, '0')}H:{' '}
      {String(minutes).padStart(2, '0')}M:{' '}
      {String(seconds).padStart(2, '0')}S
    </div>
  );
};

export default Countdown;
