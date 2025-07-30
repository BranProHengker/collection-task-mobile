import { StyleSheet, View, Text } from "react-native";

const SettingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default SettingPage;
