import { View, StyleSheet } from 'react-native';
import { Typography, ActionButton } from 'react-native-th-components';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography variant="h1" align="center" color="#0ea5e9">
        th-components
      </Typography>

      <Typography variant="body" align="center" style={styles.subtitle}>
        Biblioteca instalada e rodando com sucesso!
      </Typography>

      <ActionButton
        label="Testar Botão"
        onPress={() => console.log('Botão da lib funcionando!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 32,
  },
});
