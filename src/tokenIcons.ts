// Maps the `{TokenName}` placeholders returned by the backend to the icon
// files in public/img/tokens. Keys must match the token name exactly
// (case-sensitive) as it appears between the curly braces.
const TOKEN_ICON_FILES: Record<string, string> = {
  Capital: 'Capital.webp',
  CityConnection: 'CityConnection.webp',
  Culture: 'Culture.webp',
  Faith: 'Faith.webp',
  Food: 'Food.webp',
  Gold: 'Gold.webp',
  GoldenAge5: 'GoldenAge5.webp',
  GreatPeople: 'GreatPeople.webp',
  Happiness: 'Happiness.webp',
  Influence: 'Influence.webp',
  Movement5: 'Movement5.webp',
  Population: 'Population.webp',
  Production: 'Production.webp',
  RangedStrength5: 'RangedStrength5.webp',
  Science5: 'Science5.webp',
  Spy: 'Spy.webp',
  Strength5: 'Strength5.webp',
  Tourism: 'Tourism.webp',
  TradeRoute: 'TradeRoute.webp',
  Unhappiness5: 'Unhappiness5.webp',
  'Artist (Civ5)': 'Artist (Civ5).webp',
  'Engineer (Civ5)': 'Engineer (Civ5).webp',
  'Merchant (Civ5)': 'Merchant (Civ5).webp',
  'Scientist (Civ5)': 'Scientist (Civ5).webp',
}

export function getTokenIconSrc(name: string): string | undefined {
  const file = TOKEN_ICON_FILES[name]
  return file ? `/img/tokens/${encodeURIComponent(file)}` : undefined
}
