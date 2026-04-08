export const calculateDailyPoints = (date: Date): string => {
  const currentMonth = date.getMonth(); 
  const year = date.getFullYear();

  let startMonth = 11; 
  if (currentMonth >= 2 && currentMonth <= 4) {
    startMonth = 2; 
  } else if (currentMonth >= 5 && currentMonth <= 7) {
    startMonth = 5;
  } else if (currentMonth >= 8 && currentMonth <= 10) {
    startMonth = 8; 
  }

  const startYear = currentMonth < 2 ? year - 1 : year;

  const seasonStart = Date.UTC(startYear, startMonth, 1);
  const targetDate = Date.UTC(year, currentMonth, date.getDate());

  const msPerDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.floor((targetDate - seasonStart) / msPerDay);
  const dayOfSeason = diffInDays + 1;

  if (dayOfSeason === 1) return "2";
  if (dayOfSeason === 2) return "3";

  let prev2 = 2;
  let prev1 = 3; 
  let currentPoints = 0;

  for (let i = 3; i <= dayOfSeason; i++) {
    currentPoints = prev2 + (prev1 * 0.6);
    prev2 = prev1;
    prev1 = currentPoints;
  }

  const finalPoints = Math.round(currentPoints);

  if (finalPoints >= 1000) {
    return String(Math.round(finalPoints / 1000)) + 'K';
  }

  return String(finalPoints);
};