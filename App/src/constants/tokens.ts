/**
 * Tokens da marca HD Clinic.
 * Fonte única: style-brand/tokens.json. Manter os dois iguais.
 */

export const color = {
  gold: '#C9A546',
  goldLight: '#FCF6A5',
  goldDeep: '#C1983D',
  goldText: '#7D6219',
  black: '#050505',
  graphite: '#2E2E2E',
  offwhite: '#FAFAFA',
  white: '#FFFFFF',
  muted: '#6B6B6B',
  mutedDark: '#A8A8A8',
  line: '#E8E8E8',
  lineDark: '#2E2E2E',
  whatsapp: '#00CF4B',
  success: '#1D982E',
  error: '#B3261E',
} as const;

export const space = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

export const radius = {
  none: 0,
  sm: 4,
  md: 12,
  lg: 16,
  full: 999,
} as const;

export const type = {
  display: { fontFamily: 'DMSans_500Medium', fontSize: 38, lineHeight: 46 },
  h1: { fontFamily: 'DMSans_500Medium', fontSize: 32, lineHeight: 40 },
  h2: { fontFamily: 'DMSans_500Medium', fontSize: 26, lineHeight: 32 },
  h3: { fontFamily: 'DMSans_500Medium', fontSize: 20, lineHeight: 28 },
  bodyLg: { fontFamily: 'Roboto_400Regular', fontSize: 18, lineHeight: 26 },
  body: { fontFamily: 'Roboto_400Regular', fontSize: 16, lineHeight: 24 },
  label: { fontFamily: 'DMSans_500Medium', fontSize: 14, lineHeight: 20 },
  caption: { fontFamily: 'Roboto_400Regular', fontSize: 12, lineHeight: 16 },
} as const;

/**
 * Valores do protótipo (index.html), usados para ficar pixel perfect.
 * Fonte Manrope e alturas 60 vêm do protótipo, não de tokens.json.
 */
export const proto = {
  font: {
    regular: 'Manrope_400Regular',
    semibold: 'Manrope_600SemiBold',
    bold: 'Manrope_700Bold',
    extrabold: 'Manrope_800ExtraBold',
  },
  color: {
    screen: '#F6F6F6',
  },
  /** Área segura de referência do protótipo (iPhone 390 x 844). */
  safeTop: 47,
  safeBottom: 34,
  button: 60,
  input: 60,
} as const;

export const size = {
  gutter: 16,
  header: 56,
  tabBar: 56,
  button: 52,
  input: 48,
  touch: 48,
} as const;
