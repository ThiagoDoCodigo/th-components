````markdown
# th-components 🚀

Um Design System (Biblioteca de Componentes UI) Padrão Ouro para React Native, focado em consistência visual, alta performance e animações fluidas. Desenvolvido para acelerar a criação de aplicativos complexos com uma interface padronizada.

## 📦 Instalação

Como a biblioteca está hospedada no GitHub, você pode instalá-la diretamente no seu aplicativo principal usando:

```sh
npm install github:ThiagoDoCodigo/th-components
````

### Dependências Obrigatórias (Peer Dependencies)

Esta biblioteca utiliza animações nativas de alta performance e ícones vetoriais. Certifique-se de instalar as seguintes dependências no seu aplicativo principal para que tudo funcione perfeitamente:

```sh
npm install lucide-react-native react-native-reanimated react-native-safe-area-context react-native-svg
```

*(Nota: Lembre-se de configurar o plugin do `react-native-reanimated` no `babel.config.js` do seu aplicativo principal\!)*

## 🛠️ Componentes Disponíveis

Nossa biblioteca exporta componentes prontos para uso e fortemente tipados com TypeScript:

  - `Typography` - Textos padronizados com suporte a variantes (h1, h2, body, caption, etc).
  - `Button` - Botões customizáveis com suporte a ícones do Lucide.
  - `ActionButton` - Botão avançado com estados animados integrados (idle, loading, success, error).
  - `CustomCard` - Cards elegantes para exibição de listas e dados.
  - `AlertMessage` - Alertas em formato "toast" animados (sucesso, erro, info, warning).
  - `AlertModal` & `ConfirmationModal` - Modais interativos, acessíveis e padronizados.
  - `InputField` - Campos de texto com tratamento visual de foco e erros.
  - `Header` - Cabeçalho padronizado para as telas do app.
  - `TabNavigation` - Navegação em abas visuais.
  - `EmptyState` - Componente amigável para listas ou telas sem conteúdo.

### 🎨 Tema Exportado

Além dos componentes, exportamos nosso objeto de tema `colors`. Use-o no seu `StyleSheet` local para garantir 100% de consistência visual com a biblioteca:

```tsx
import { colors } from 'react-native-th-components';
// Exemplo: backgroundColor: colors.surfaceHighlight
```

## 💻 Como Usar

Aqui está um exemplo básico de como importar e utilizar os componentes na sua tela:

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Mail } from 'lucide-react-native';
import { Typography, Button, colors } from 'react-native-th-components';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography variant="h1" color={colors.primary.main}>
        Bem-vindo!
      </Typography>
      
      <Typography variant="body" style={styles.subtitle}>
        Este é um teste do nosso novo Design System em ação.
      </Typography>

      <Button 
        label="Enviar Convite" 
        icon={Mail} 
        variant="primary"
        onPress={() => console.log('Botão pressionado!')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 32,
  }
});
```

## 🤝 Contribuindo

  - [Fluxo de Desenvolvimento](https://www.google.com/search?q=CONTRIBUTING.md%23development-workflow)
  - [Código de Conduta](https://www.google.com/search?q=CODE_OF_CONDUCT.md)

## 📄 Licença

MIT

-----

Desenvolvido por [ThiagoDoCodigo](https://www.google.com/search?q=https://github.com/ThiagoDoCodigo)

```
```