import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import Index from './index'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		"Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
		"Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
		"Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
		"Inter-ExtraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
		"Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
		"Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
		"Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
		"Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
		"Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
	});

	useEffect(() => {
		if (error) throw error;
		if (fontsLoaded) SplashScreen.hideAsync();
	}, [fontsLoaded, error]);

	if (!fontsLoaded && !error) return null;

	return (
		<View style={{ flex: 1, backgroundColor: '#ffffff' }}>
			<Index />

			<StatusBar backgroundColor="#ffffff" style='dark' />
		</View>
	)
}

export default RootLayout