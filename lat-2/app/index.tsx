
import { StyleSheet,Text, TouchableOpacity, View } from "react-native";
import { styles } from "@/constants/input-styles"; // pastikan path ini benar
const IndexPage = () => {
  return (
    <View style={styles.container}>
      <Text>Halaman Contact</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
      );
};



export default IndexPage;
