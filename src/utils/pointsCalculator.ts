export const calculateDailyPoints = (date: Date): string => {
  const currentMonth = date.getMonth();

  
  const seasonStartMonths = [2, 5, 8, 11];
  
 
  let startMonth = 11; 
  for (let i = 0; i < seasonStartMonths.length; i++) {
    if (currentMonth >= seasonStartMonths[i]) {
      startMonth = seasonStartMonths[i];
    }
  }

  const year = date.getFullYear();
  const seasonStartDate = new Date(year, startMonth, 1);
  
  if (currentMonth < 2 && startMonth === 11) {
    seasonStartDate.setFullYear(year - 1);
  }

  const diffInMs = date.getTime() - seasonStartDate.getTime();
  const dayOfSeason = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1;

  if (dayOfSeason === 1) return "2";
  if (dayOfSeason === 2) return "3";

  let p2 = 2; 
  let p1 = 3; 
  let current = 0;

  for (let i = 3; i <= dayOfSeason; i++) {
    current = Math.round(p2 * 1.0 + p1 * 0.6);
    p2 = p1;
    p1 = current;
  }

  if (current >= 1000) {
    return `${String(Math.round(current / 1000))}K`;
  }

  return String(current);
};