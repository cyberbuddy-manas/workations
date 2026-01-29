// will add utility functions if required in future

const FLAGS: Record<string, string> = {
  Germany: '🇩🇪',
  'United States': '🇺🇸',
  Ukraine: '🇺🇦',
  Belgium: '🇧🇪',
  Spain: '🇪🇸',
  Greece: '🇬🇷',
  India: '🇮🇳',
};

export const flagFor = (country: string) => FLAGS[country] ?? '';
export const riskLabel = (risk: string) =>
  risk === 'HIGH' ? 'High risk' : risk === 'LOW' ? 'Low risk' : 'No risk';
