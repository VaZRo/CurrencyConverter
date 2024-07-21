import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CurrencySelector from '../components/CurrencySelector';
import { icons } from '../constants';
import Keyboard from '../components/Keyboard';


const Index = () => {

	const [inputString, setInputString] = useState('0.00');
	const [fromCurrency, setFromCurrency] = useState('USD');
	const [toCurrency, setToCurrency] = useState('EUR');
	const [currencyList, setCurrencyList] = useState(null);
	const [currencyRates, setCurrencyRates] = useState({});

	const swapCurrencies = () => {
		const currencyTemp = fromCurrency;
		setFromCurrency(toCurrency);
		setToCurrency(currencyTemp);
		// console.log(`from: ${fromCurrency}; to: ${toCurrency}`)
	}

	return (
		<SafeAreaView className='h-full w-full'>
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<View className=''>
					<View className='flex-row justify-between mx-7 my-5 items-center'>
						<CurrencySelector
							selectedCurrency={fromCurrency}
							setSelectedCurrency={setFromCurrency}
						/>
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={swapCurrencies}
						>
							<Image
								source={icons.reverse}
								tintColor='#458241'
								className='w-[30px] h-[30px]'
								resizeMode='contain'
							/>
						</TouchableOpacity>
						<CurrencySelector
							selectedCurrency={toCurrency}
							setSelectedCurrency={setToCurrency}
						/>
					</View>
					<View className='flex-col items-center space-y-3 my-6'>
						<Text className='text-5xl font-ibold'>{inputString} {fromCurrency}</Text>
						<Text className='text-3xl font-ibold text-secondary'>0.00 {toCurrency}</Text>
						<Text className='text-2xl text-gray-500'>1 {fromCurrency} = 0.85 {toCurrency}</Text>
					</View>
					<View className='items-center'>
						<Keyboard
							inputString={inputString}
							setInputString={setInputString}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>

	)
}

export default Index