import { StyleSheet, Text, View } from "react-native";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>Profile Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfilePage;
