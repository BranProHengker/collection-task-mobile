import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Profile',
            title: 'Profile',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
