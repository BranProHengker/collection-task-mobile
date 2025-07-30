import { View, Text, StyleSheet } from 'react-native';

export default function ExplorePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});
