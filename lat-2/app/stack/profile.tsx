import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'; // Add this import

const ProfilePage = () => {
  const navigation = useNavigation(); // Add this hook

  const handleGoBack = () => {
    navigation.goBack(); // Add this function
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={handleGoBack}> {/* Add onPress handler */}
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <Image source={require("@/assets/images/profile.jpg")} style={styles.avatar} />
        <Text style={styles.name}>Avattar</Text>
        <Text style={styles.role}>Junior Graphic Designer</Text>
        
        <View style={styles.followContainer}>
          <View style={styles.followBox}>
            <Text style={styles.followCount}>1000</Text>
            <Text style={styles.followLabel}>Followers</Text>
          </View>
          <View style={styles.followBox}>
            <Text style={styles.followCount}>1200</Text>
            <Text style={styles.followLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Info section */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <InfoItem icon="mail-outline" label="Email" value="gibrananakbaik0@gmail.com" />
          <InfoItem icon="call-outline" label="Mobile" value="087751765260" />
          <InfoItem icon="logo-twitter" label="Twitter" value="@3Br4n" />
          <InfoItem icon="globe-outline" label="Personal Website" value="https://branprohengker.github.io/name-card-bran/ini.html" />
          <InfoItem icon="logo-tiktok" label="Facebook" value="www.tiktok.com/Br4n._" />
        </View>
      </ScrollView>
    </View>
  );
};

const InfoItem = ({ icon, label, value }: { icon: any; label: string; value: string }) => (
  <View style={styles.infoItem}>
    <View style={styles.iconContainer}>
      <Ionicons name={icon} size={20} color="#666" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

export default ProfilePage;

// ... rest of your styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#fa0079ff",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 50,
    paddingBottom: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 12,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  role: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 14,
    marginBottom: 16,
  },
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
  followBox: {
    alignItems: "center",
  },
  followCount: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  followLabel: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
    marginTop: 2,
  },
  scrollContainer: {
    flex: 1,
  },
  infoContainer: {
    padding: 20,
    paddingTop: 25,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: "#888",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
});