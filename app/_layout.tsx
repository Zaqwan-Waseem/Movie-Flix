import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import './globals.css'
export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="white" translucent />
    </>
  )
}
