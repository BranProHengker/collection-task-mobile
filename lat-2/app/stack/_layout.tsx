import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Contact" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
};

export default StackLayout;
