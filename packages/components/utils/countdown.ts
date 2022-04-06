const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const countdown = (end: Date) => {
  const now = new Date();
  // @ts-ignore
  const distance = end - now;

  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / _day),
    hours: Math.floor((distance % _day) / _hour),
    minutes: Math.floor((distance % _hour) / _minute),
    seconds: Math.floor((distance % _minute) / _second)
  };
};
