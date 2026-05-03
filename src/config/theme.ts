import { Appearance } from 'react-native';

// 1. Reestruturação: Família do Tema -> Modo (light / dark)
export const Themes = {
  // 🌿 Tema Natureza (Verde ajustado para alto contraste em botões e inputs)
  default: {
    light: {
      background: '#f4f5f0',
      surface: '#ffffff',
      surfaceHighlight: '#e8ebe1',
      border: '#d1d9c5',
      borderFocus: '#748653',
      text: {
        primary: '#2b331f',
        secondary: '#4b5938',
        muted: '#7e8c6c',
        inverse: '#ffffff',
      },
      primary: { main: '#748653', light: '#a6b887', faded: '#e5ebd9' },
      success: { main: '#10b981', light: '#dcfce7' },
      danger: { main: '#ef4444', light: '#fee2e2', faded: '#fef2f2' },
      warning: { main: '#f59e0b', light: '#fef3c7', faded: '#fffbeb' },
      info: { main: '#748653', light: '#e5ebd9' },
      special: { gold: '#eab308', goldLight: '#fef08a' },
    },
    dark: {
      background: '#161a12',
      surface: '#20261a',
      surfaceHighlight: '#2b3323',
      border: '#3a452f',
      borderFocus: '#8ba861',
      text: {
        primary: '#ebf0e6',
        secondary: '#c2cca8',
        muted: '#8b9973',
        inverse: '#ffffff',
      },
      primary: { main: '#8ba861', light: '#a8c481', faded: '#2d3821' },
      success: { main: '#34d399', light: '#064e3b' },
      danger: { main: '#f87171', light: '#7f1d1d', faded: '#450a0a' },
      warning: { main: '#fbbf24', light: '#78350f', faded: '#451a03' },
      info: { main: '#8ba861', light: '#2d3821' },
      special: { gold: '#facc15', goldLight: '#854d0e' },
    },
  },
  // 🔵 Tema Padrão (Azul)
  blue: {
    light: {
      background: '#f8fafc',
      surface: '#ffffff',
      surfaceHighlight: '#f1f5f9',
      border: '#e2e8f0',
      borderFocus: '#0ea5e9',
      text: {
        primary: '#1e293b',
        secondary: '#475569',
        muted: '#94a3b8',
        inverse: '#ffffff',
      },
      primary: { main: '#0ea5e9', light: '#e0f2fe', faded: '#f0f9ff' },
      success: { main: '#10b981', light: '#d1fae5' },
      danger: { main: '#ef4444', light: '#fee2e2', faded: '#fef2f2' },
      warning: { main: '#f59e0b', light: '#fef3c7', faded: '#fffbeb' },
      info: { main: '#0ea5e9', light: '#e0f2fe' },
      special: { gold: '#eab308', goldLight: '#fef08a' },
    },
    dark: {
      background: '#0f172a',
      surface: '#1e293b',
      surfaceHighlight: '#334155',
      border: '#334155',
      borderFocus: '#38bdf8',
      text: {
        primary: '#f8fafc',
        secondary: '#cbd5e1',
        muted: '#64748b',
        inverse: '#ffffff',
      },
      primary: { main: '#38bdf8', light: '#0369a1', faded: '#0c4a6e' },
      success: { main: '#34d399', light: '#065f46' },
      danger: { main: '#f87171', light: '#991b1b', faded: '#7f1d1d' },
      warning: { main: '#fbbf24', light: '#92400e', faded: '#78350f' },
      info: { main: '#38bdf8', light: '#0369a1' },
      special: { gold: '#facc15', goldLight: '#854d0e' },
    },
  },

  // 🟣 Tema Violeta Tech
  violet: {
    light: {
      background: '#fcfaff',
      surface: '#ffffff',
      surfaceHighlight: '#f3e8ff',
      border: '#e9d5ff',
      borderFocus: '#9333ea',
      text: {
        primary: '#2e1065',
        secondary: '#5b21b6',
        muted: '#8b5cf6',
        inverse: '#ffffff',
      },
      primary: { main: '#9333ea', light: '#c084fc', faded: '#faf5ff' },
      success: { main: '#10b981', light: '#d1fae5' },
      danger: { main: '#f43f5e', light: '#ffe4e6', faded: '#fff1f2' },
      warning: { main: '#f59e0b', light: '#fef3c7', faded: '#fffbeb' },
      info: { main: '#9333ea', light: '#f3e8ff' },
      special: { gold: '#eab308', goldLight: '#fef08a' },
    },
    dark: {
      background: '#0f0a14',
      surface: '#1b112c',
      surfaceHighlight: '#2e1d47',
      border: '#4c2d7a',
      borderFocus: '#a855f7',
      text: {
        primary: '#f5f3ff',
        secondary: '#ddd6fe',
        muted: '#a78bfa',
        inverse: '#ffffff',
      },
      primary: { main: '#a855f7', light: '#c084fc', faded: '#3b2163' },
      success: { main: '#34d399', light: '#064e3b' },
      danger: { main: '#fb7185', light: '#881337', faded: '#4c0519' },
      warning: { main: '#fbbf24', light: '#78350f', faded: '#451a03' },
      info: { main: '#a855f7', light: '#3b2163' },
      special: { gold: '#facc15', goldLight: '#854d0e' },
    },
  },
};

// 2. Tipagens
export type ThemeFamily = keyof typeof Themes;
export type ThemeColors = typeof Themes.default.light;

// 3. Controle de Estado Interno da Biblioteca
let activeFamily: ThemeFamily = 'default';
let customColorsOverride: Partial<ThemeColors> = {};

// Função para descobrir qual é o tema do celular agora (Dark/Light)
const getSystemScheme = () =>
  Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

// 4. O OBJETO EXPORTADO: Todos os seus componentes olham para cá
export const colors: ThemeColors = {
  ...Themes[activeFamily][getSystemScheme()],
};

// Função interna que junta a Família escolhida com o Modo do Celular
function applyColors(scheme: 'light' | 'dark') {
  const baseColors = Themes[activeFamily][scheme];
  const finalColors = { ...baseColors, ...customColorsOverride };

  // Atualiza as chaves do objeto exportado mantendo a mesma referência de memória
  Object.assign(colors, finalColors);
}

/**
 * 5. A Função de Configuração Global
 * Chame isso no App.tsx ou index.js do aplicativo principal.
 */
export function configureTheme(config: {
  themeName?: ThemeFamily;
  customColors?: Partial<ThemeColors>;
}) {
  if (config.themeName && Themes[config.themeName]) {
    activeFamily = config.themeName;
  }
  if (config.customColors) {
    customColorsOverride = config.customColors;
  }

  // Já aplica as cores de acordo com o tema do celular logo na inicialização
  applyColors(getSystemScheme());
}

// 6. O ESPIÃO: Ouve quando o usuário muda o tema do celular
Appearance.addChangeListener(({ colorScheme }) => {
  applyColors(colorScheme === 'dark' ? 'dark' : 'light');
});
