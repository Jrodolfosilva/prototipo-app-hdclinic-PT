// ENT-01 Boas-vindas
// Carrossel de 3 slides: a imagem fica fixa, só a frase muda.
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DarkGlow } from '@/components/dark-glow';
import { color, proto, radius, size, space } from '@/constants/tokens';

// Textos de info-brand/hd-clinic.md e do protótipo (index.html).
const PHRASES = [
  'Realçamos a sua beleza natural com cuidados personalizados, do primeiro contacto ao resultado final.',
  'Sempre em busca da inovação e da excelência para oferecer uma experiência diferenciada.',
  'Descubra a jornada estética que redefine a sua beleza e revela a melhor versão de si.',
];

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();
  const [pageWidth, setPageWidth] = useState(0);
  const [active, setActive] = useState(0);

  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    if (pageWidth === 0) return;
    const index = Math.round(event.nativeEvent.contentOffset.x / pageWidth);
    if (index !== active) setActive(index);
  }

  return (
    <View style={styles.screen}>
      {/* .welcome-top: padding 62 16 72, meia-lua de 64 */}
      <View style={[styles.top, { paddingTop: Math.max(insets.top, proto.safeTop) + 15 }]}>
        <DarkGlow glowRy={0.4} curve={64} />

        <Image
          source={require('@/assets/images/brand/logo-mark.png')}
          style={styles.logo}
          contentFit="contain"
          accessibilityLabel="HD Clinic"
        />

        <Image
          source={require('@/assets/images/brand/boas-vindas.jpg')}
          style={styles.image}
          contentFit="cover"
          accessibilityLabel="Mulher com a pele cuidada"
        />

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={onScroll}
          onLayout={(e) => setPageWidth(e.nativeEvent.layout.width)}
          style={styles.carousel}>
          {PHRASES.map((phrase) => (
            <View key={phrase} style={{ width: pageWidth }}>
              <Text style={styles.phrase}>{phrase}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.dots}>
          {PHRASES.map((phrase, index) => (
            <View key={phrase} style={[styles.dot, index === active && styles.dotOn]} />
          ))}
        </View>
      </View>

      {/* .welcome-bottom: padding 24 16 34, gap 12 */}
      <View style={[styles.bottom, { paddingBottom: Math.max(insets.bottom, proto.safeBottom) }]}>
        <Pressable
          onPress={() => router.push('/entrar')}
          accessibilityRole="button"
          style={({ pressed }) => [styles.btn, styles.btnPrimary, pressed && styles.pressed]}>
          <Text style={[styles.btnText, styles.btnTextPrimary]}>Entrar</Text>
        </Pressable>

        {/* Criar conta: vai para REG-01 (ainda não criada) */}
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.btn, styles.btnLine, pressed && styles.pressed]}>
          <Text style={[styles.btnText, styles.btnTextLine]}>Criar conta</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: proto.color.screen,
  },
  top: {
    flex: 1,
    gap: space[4],
    paddingHorizontal: size.gutter,
    paddingBottom: 72,
  },
  logo: {
    width: 120,
    height: 88,
    alignSelf: 'center',
  },
  image: {
    height: 256,
    flexShrink: 1,
    minHeight: 160,
    borderRadius: radius.md,
  },
  carousel: {
    flexGrow: 0,
    flexShrink: 0,
  },
  phrase: {
    fontFamily: proto.font.regular,
    fontSize: 20,
    lineHeight: 28,
    color: color.offwhite,
    textAlign: 'center',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: space[2],
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: radius.full,
    backgroundColor: color.lineDark,
  },
  dotOn: {
    backgroundColor: color.gold,
  },
  bottom: {
    gap: space[3],
    paddingTop: space[6],
    paddingHorizontal: size.gutter,
  },
  btn: {
    height: proto.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
  },
  btnPrimary: {
    backgroundColor: color.graphite,
  },
  btnLine: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.graphite,
  },
  btnText: {
    fontFamily: proto.font.extrabold,
    fontSize: 18,
  },
  btnTextPrimary: {
    color: color.white,
  },
  btnTextLine: {
    color: color.graphite,
  },
  pressed: {
    opacity: 0.8,
  },
});
