import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileTabHome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman Profile (Tab Home)</Text>
      <Button title="Kembali ke Home" onPress={() => router.push('/home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 10 },
});
