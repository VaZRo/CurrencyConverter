import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CurrencySelector from '../components/CurrencySelector';
import { icons } from '../constants';


const Index = () => {
	return (
		<SafeAreaView className='h-full w-full'>
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<View className=''>
					<View className='flex-row justify-between mx-7 my-5 items-center'>
						<CurrencySelector />
						<TouchableOpacity activeOpacity={0.7}>
							<Image
								source={icons.reverse}
								tintColor='#458241'
								className='w-[30px] h-[30px]'
								resizeMode='contain'
							/>
						</TouchableOpacity>
						<CurrencySelector />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>

	)
}

export default Index