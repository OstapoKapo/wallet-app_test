// utils/dateFormat.ts

export function formatTransactionDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const day = now.getDay() === 0 ? 6 : now.getDay() - 1;
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - day);
  startOfWeek.setHours(0, 0, 0, 0);

  if (date >= startOfWeek) {
    return date.toLocaleDateString('en-US', { weekday: 'long' }) + ', ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  }
  return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' }) + ', ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
}
