/**
 * Format a date
 */
export function formatDate(date: Date | string, locale = 'pt-BR'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale);
}
