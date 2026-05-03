import { useState } from 'react';
import { View, TextInput, type TextInputProps, StyleSheet } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import { colors } from '../config/theme';
import Typography from './Typography';

interface InputFieldProps extends TextInputProps {
  label: string;
  error?: string;
  icon?: LucideIcon;
}

export default function InputField({
  label,
  error,
  icon: Icon,
  onFocus,
  onBlur,
  style,
  ...rest
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Typography variant="label" style={styles.label}>
        {label}
      </Typography>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          error ? styles.inputError : null,
          style,
        ]}
      >
        {Icon && (
          <Icon
            size={20}
            color={isFocused ? colors.primary.main : colors.text.muted}
            style={styles.icon}
          />
        )}
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.text.muted}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />
      </View>
      {error ? (
        <Typography style={styles.errorText} color={colors.danger.main}>
          {error}
        </Typography>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    marginBottom: 6,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.surfaceHighlight,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  inputFocused: {
    borderColor: colors.primary.main,
    backgroundColor: colors.surface,
  },
  inputError: {
    borderColor: colors.danger.main,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: colors.text.primary,
    fontSize: 14,
    height: '100%',
  },
  errorText: {
    fontSize: 11,
    marginLeft: 4,
    marginTop: 4,
    fontWeight: '500',
  },
});
