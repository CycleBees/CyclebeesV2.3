export const Colors = {
  primary: '#FFD11E',
  secondary: {
    darkBlueGrey: '#2D3E50',
    lightYellow: '#FBE9A0',
    cream: '#FFF5CC',
    darkBrown: '#2F2500',
    darkOlive: '#2B2E00',
    mediumGrey: '#4A4A4A',
  },
  text: {
    primary: '#2F2500',
    secondary: '#4A4A4A',
    light: '#FFF5CC',
    white: '#FFFFFF',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FFF5CC',
    accent: '#FBE9A0',
  },
  status: {
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    info: '#2196F3',
  },
  border: {
    light: '#E0E0E0',
    medium: '#BDBDBD',
    dark: '#4A4A4A',
  },
} as const;

export type ColorKeys = keyof typeof Colors;