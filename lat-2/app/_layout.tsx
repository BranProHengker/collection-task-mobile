import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "teal",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Login",
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <AntDesign name="login" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="stack"
        options={{
          title: "Contact",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
