// ABE-01 Tela de abertura
// Mostra o logo enquanto o app carrega e segue sozinha para ENT-01.
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DarkGlow } from '@/components/dark-glow';
import { proto, size } from '@/constants/tokens';

const OPENING_MS = 1500;

export default function OpeningScreen() {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const timer = setTimeout(() => router.replace('/boas-vindas'), OPENING_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={[
        styles.screen,
        {
          paddingTop: Math.max(insets.top, proto.safeTop),
          paddingBottom: Math.max(insets.bottom, proto.safeBottom),
        },
      ]}>
      {/* .phone-black: brilho só nos primeiros 300 px */}
      <DarkGlow glowHeight={300} />
      <View style={styles.body}>
        <Image
          source={require('@/assets/images/brand/logo-horizontal.png')}
          style={styles.logo}
          contentFit="contain"
          accessibilityLabel="HD Clinic"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: size.gutter,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 240,
    height: 58,
  },
});
