import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../config/theme';
import Typography from './Typography';
import { ChevronRight, type LucideIcon } from 'lucide-react-native';

interface CustomCardProps {
  title: string;
  description: string;
  image?: string;
  subDescription?: string;
  subIcon?: LucideIcon;
  onPressBottom?: () => void;
  bottomButtonText?: string;
  onPressRight?: () => void;
  rightIcon?: LucideIcon;
}

export default function CustomCard({
  title,
  description,
  image,
  subDescription,
  subIcon: SubIcon,
  onPressBottom,
  bottomButtonText = 'Acessar Detalhes',
  onPressRight,
  rightIcon: RightIcon,
}: CustomCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.contentRow}>
        {!!image && (
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}

        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Typography
              variant="title"
              color={colors.text.primary}
              style={styles.title}
              numberOfLines={1}
            >
              {title}
            </Typography>

            {RightIcon && onPressRight && (
              <TouchableOpacity
                onPress={onPressRight}
                activeOpacity={0.6}
                style={styles.actionIconButton}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <RightIcon size={18} color={colors.text.muted} />
              </TouchableOpacity>
            )}
          </View>

          <Typography
            variant="body"
            color={colors.text.secondary}
            style={styles.description}
            numberOfLines={2}
          >
            {description || 'Nenhuma descrição informada.'}
          </Typography>

          {subDescription && (
            <View style={styles.badgeContainer}>
              {SubIcon && (
                <SubIcon
                  size={12}
                  color={colors.primary.main}
                  style={{ marginRight: 4 }}
                />
              )}
              <Typography
                variant="caption"
                weight="bold"
                color={colors.primary.main}
                numberOfLines={1}
                style={{ letterSpacing: 0.2 }}
              >
                {subDescription.toUpperCase()}
              </Typography>
            </View>
          )}
        </View>
      </View>

      {onPressBottom && (
        <TouchableOpacity
          onPress={onPressBottom}
          activeOpacity={0.7}
          style={styles.bottomActionRow}
        >
          <Typography variant="body" weight="bold" color={colors.primary.main}>
            {bottomButtonText}
          </Typography>
          <ChevronRight size={18} color={colors.primary.main} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imageWrapper: {
    width: 76,
    height: 76,
    marginRight: 16,
    borderRadius: 18,
    backgroundColor: colors.surfaceHighlight,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    flex: 1,
    fontSize: 18,
    paddingRight: 8,
    letterSpacing: -0.3,
  },
  actionIconButton: {
    padding: 6,
    backgroundColor: colors.surfaceHighlight,
    borderRadius: 12,
  },
  description: {
    marginBottom: 10,
    lineHeight: 20,
  },

  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.primary.faded,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  bottomActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.surfaceHighlight,
  },
});
