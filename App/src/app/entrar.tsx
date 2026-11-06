// ENT-02 Entrar
// Acesso de quem já tem conta. Sem validação nem login real nesta fase.
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DarkGlow } from '@/components/dark-glow';
import { color, proto, radius, size, space } from '@/constants/tokens';

const SHEET_OVERLAP = 40;

function goBack() {
  if (router.canGoBack()) router.back();
  else router.replace('/boas-vindas');
}

export default function SignInScreen() {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {/* .top-dark: padding 56 16 116, gap 16 */}
      <View style={[styles.top, { paddingTop: Math.max(insets.top, proto.safeTop) + 9 }]}>
        <DarkGlow />

        <View style={styles.bar}>
          <Pressable
            onPress={goBack}
            accessibilityRole="button"
            accessibilityLabel="Voltar"
            hitSlop={space[2]}
            style={({ pressed }) => [styles.arrow, pressed && styles.pressed]}>
            <ArrowLeft size={24} color={color.offwhite} />
          </Pressable>
          <View style={styles.barCenter}>
            <Image
              source={require('@/assets/images/brand/logo-horizontal.png')}
              style={styles.barLogo}
              contentFit="contain"
              accessibilityLabel="HD Clinic"
            />
          </View>
          <View style={styles.arrow} />
        </View>

        <View style={styles.head}>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>
            Não tem conta?{' '}
            {/* Criar conta: vai para REG-01 (ainda não criada) */}
            <Text style={styles.goldLink}>Criar conta</Text>
          </Text>
        </View>
      </View>

      {/* .sheet: margin-top -40, padding 40 24 34, raio 40 */}
      <ScrollView
        style={styles.sheet}
        contentContainerStyle={[
          styles.sheetContent,
          { paddingBottom: Math.max(insets.bottom, proto.safeBottom) },
        ]}
        keyboardShouldPersistTaps="handled">
        <View style={styles.field}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="nome@email.com"
            placeholderTextColor={color.muted}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            textContentType="emailAddress"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="A sua senha"
            placeholderTextColor={color.muted}
            secureTextEntry
            autoComplete="password"
            textContentType="password"
          />
          {/* Recuperar: vai para REC-01 (ainda não criada) */}
          <Pressable accessibilityRole="button" hitSlop={space[3]}>
            <Text style={styles.forgot}>Esqueceu a senha? Recuperar</Text>
          </Pressable>
        </View>

        {/* Entrar: vai para DAS-01 (ainda não criada) */}
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.btn, pressed && styles.pressed]}>
          <Text style={styles.btnText}>Entrar</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: proto.color.screen,
  },
  top: {
    gap: space[4],
    paddingHorizontal: size.gutter,
    paddingBottom: 116,
  },
  bar: {
    height: space[10],
    flexDirection: 'row',
    alignItems: 'center',
    gap: space[3],
  },
  arrow: {
    width: space[8],
    height: space[10],
    justifyContent: 'center',
  },
  barCenter: {
    flex: 1,
    alignItems: 'center',
  },
  barLogo: {
    width: 116,
    height: 28,
  },
  head: {
    gap: space[2],
  },
  title: {
    fontFamily: proto.font.bold,
    fontSize: 26,
    lineHeight: 32,
    color: color.offwhite,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: proto.font.regular,
    fontSize: 16,
    lineHeight: 24,
    color: color.mutedDark,
    textAlign: 'center',
  },
  goldLink: {
    fontFamily: proto.font.semibold,
    color: color.gold,
  },
  sheet: {
    flex: 1,
    marginTop: -SHEET_OVERLAP,
    backgroundColor: proto.color.screen,
    borderTopLeftRadius: SHEET_OVERLAP,
    borderTopRightRadius: SHEET_OVERLAP,
  },
  sheetContent: {
    gap: space[4],
    paddingTop: SHEET_OVERLAP,
    paddingHorizontal: space[6],
  },
  field: {
    gap: space[2],
  },
  label: {
    fontFamily: proto.font.semibold,
    fontSize: 16,
    lineHeight: 24,
    color: color.graphite,
  },
  input: {
    fontFamily: proto.font.regular,
    fontSize: 18,
    height: proto.input,
    paddingHorizontal: space[4],
    borderWidth: 1,
    borderColor: color.line,
    borderRadius: radius.md,
    backgroundColor: color.white,
    color: color.graphite,
  },
  forgot: {
    fontFamily: proto.font.semibold,
    fontSize: 16,
    lineHeight: 24,
    color: color.graphite,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  btn: {
    height: proto.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    backgroundColor: color.graphite,
  },
  btnText: {
    fontFamily: proto.font.extrabold,
    fontSize: 18,
    color: color.white,
  },
  pressed: {
    opacity: 0.8,
  },
});
