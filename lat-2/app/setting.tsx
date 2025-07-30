import React, { useState } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity, Alert } from "react-native";

const SettingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode((prev) => !prev);

  const handleLogout = () => {
    Alert.alert("Logout", "Kamu yakin ingin keluar?", [
      { text: "Batal", style: "cancel" },
      { text: "Keluar", onPress: () => console.log("Logged out!") },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pengaturan</Text>

      {/* Info pengguna */}
      <View style={styles.section}>
        <Text style={styles.label}>Nama Pengguna</Text>
        <Text style={styles.value}>@Watashiwa_Gusti_Des</Text>
      </View>

      {/* Mode Gelap */}
      <View style={styles.section}>
        <Text style={styles.label}>Mode Gelap</Text>
        <Switch value={isDarkMode} onValueChange={toggleSwitch} />
      </View>

      {/* Tombol keluar */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
