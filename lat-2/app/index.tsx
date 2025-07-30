import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router"; // ✅ import router
import { styles } from "@/constants/input-styles"; // ✅ pastikan path benar

const IndexPage = () => {
  const router = useRouter(); // ✅ inisialisasi router

  const handleGoToProfile = () => {
    router.push("/stack/profile"); // ✅ navigasi ke page profile
  };

  return (
    <View style={styles.container}>
      <Text>Halaman Contact</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoToProfile}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndexPage;
