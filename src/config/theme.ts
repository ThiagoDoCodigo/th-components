import { Appearance } from 'react-native';

export const Theme = {
  light: {
    // Fundo e Superfícies
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceHighlight: '#f1f5f9',

    // Bordas
    border: '#e2e8f0',
    borderFocus: '#cbd5e1',

    // Textos
    text: {
      primary: '#1e293b',
      secondary: '#475569',
      muted: '#94a3b8',
      inverse: '#ffffff',
    },

    // Cores Principais
    primary: {
      main: '#0ea5e9',
      light: '#e0f2fe',
      faded: '#f0f9ff',
    },

    // Feedback
    success: {
      main: '#10b981',
      light: '#d1fae5',
    },
    danger: {
      main: '#ef4444',
      light: '#fee2e2',
      faded: '#fef2f2',
    },
    warning: {
      main: '#f59e0b',
      light: '#fef3c7',
      faded: '#fffbeb',
    },
    info: {
      main: '#0ea5e9',
      light: '#e0f2fe',
    },

    // Específico
    special: {
      gold: '#eab308',
      goldLight: '#fef08a',
    },
  },

  dark: {
    // Fundo e Superfícies
    background: '#0f172a',
    surface: '#1e293b',
    surfaceHighlight: '#334155',

    // Bordas
    border: '#334155',
    borderFocus: '#475569',

    // Textos
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      muted: '#64748b',
      inverse: '#ffffff',
    },

    // Cores Principais
    primary: {
      main: '#38bdf8',
      light: '#0369a1',
      faded: '#0c4a6e',
    },

    // Feedback
    success: {
      main: '#34d399',
      light: '#065f46',
    },
    danger: {
      main: '#f87171',
      light: '#991b1b',
      faded: '#7f1d1d',
    },
    warning: {
      main: '#fbbf24',
      light: '#92400e',
      faded: '#78350f',
    },
    info: {
      main: '#38bdf8',
      light: '#0369a1',
    },

    special: {
      gold: '#facc15',
      goldLight: '#854d0e',
    },
  },

  // 🌿 Tema Natureza (Com o seu verde principal)
  nature: {
    background: '#f4f5f0',
    surface: '#ffffff',
    surfaceHighlight: '#e9eddf',
    border: '#dce5ce',
    borderFocus: '#a8b88b',
    text: {
      primary: '#2d3324',
      secondary: '#4a543b',
      muted: '#828f6d',
      inverse: '#ffffff',
    },
    primary: {
      main: '#748653', // <- O verde solicitado
      light: '#a8b88b',
      faded: '#e9eddf',
    },
    success: { main: '#4ade80', light: '#dcfce7' },
    danger: { main: '#ef4444', light: '#fee2e2', faded: '#fef2f2' },
    warning: { main: '#f59e0b', light: '#fef3c7', faded: '#fffbeb' },
    info: { main: '#748653', light: '#dce5ce' },
    special: { gold: '#eab308', goldLight: '#fef08a' },
  },

  // 🟣 Tema Violeta Tech (Moderno e limpo)
  violet: {
    background: '#f5f3ff',
    surface: '#ffffff',
    surfaceHighlight: '#ede9fe',
    border: '#ddd6fe',
    borderFocus: '#a78bfa',
    text: {
      primary: '#2e1065',
      secondary: '#5b21b6',
      muted: '#8b5cf6',
      inverse: '#ffffff',
    },
    primary: {
      main: '#7c3aed',
      light: '#c4b5fd',
      faded: '#ede9fe',
    },
    success: { main: '#10b981', light: '#d1fae5' },
    danger: { main: '#f43f5e', light: '#ffe4e6', faded: '#fff1f2' },
    warning: { main: '#f59e0b', light: '#fef3c7', faded: '#fffbeb' },
    info: { main: '#8b5cf6', light: '#ddd6fe' },
    special: { gold: '#eab308', goldLight: '#fef08a' },
  },

  // 🖤 Tema Midnight (Escuro elegante de alto contraste)
  midnight: {
    background: '#000000',
    surface: '#121212',
    surfaceHighlight: '#27272a',
    border: '#3f3f46',
    borderFocus: '#71717a',
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa',
      muted: '#52525b',
      inverse: '#000000',
    },
    primary: {
      main: '#fafafa',
      light: '#d4d4d8',
      faded: '#27272a',
    },
    success: { main: '#10b981', light: '#064e3b' },
    danger: { main: '#ef4444', light: '#7f1d1d', faded: '#450a0a' },
    warning: { main: '#f59e0b', light: '#78350f', faded: '#451a03' },
    info: { main: '#38bdf8', light: '#0c4a6e' },
    special: { gold: '#fbbf24', goldLight: '#78350f' },
  },
};

export type ThemeColors = typeof Theme.light;
export type ThemeName = keyof typeof Theme;

// Puxa o tema do sistema inicialmente
const systemTheme = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

// Exporta o objeto mutável para que os componentes usem
export const colors: ThemeColors = { ...Theme[systemTheme] };

/**
 * Função para configurar e sobrescrever as cores da biblioteca globalmente.
 * Chame isso no App.tsx ou index.js do aplicativo principal.
 */
export function configureTheme(config: {
  themeName?: ThemeName;
  customColors?: Partial<ThemeColors>;
}) {
  let baseTheme = colors; // Mantém o atual como base

  // Se o app pedir um tema predefinido (ex: 'nature')
  if (config.themeName && Theme[config.themeName]) {
    baseTheme = Theme[config.themeName];
  }

  // Mescla com as cores personalizadas enviadas pelo app
  const finalColors = { ...baseTheme, ...config.customColors };

  // Atualiza as cores na memória para todos os componentes
  Object.assign(colors, finalColors);
}
