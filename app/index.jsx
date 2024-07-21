import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CurrencySelector from '../components/CurrencySelector';
import { icons } from '../constants';
import Keyboard from '../components/Keyboard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import fetchRates from '../services/getCurrencies';


const Index = () => {

	const [inputString, setInputString] = useState('0.00');
	const [fromCurrency, setFromCurrency] = useState('USD');
	const [toCurrency, setToCurrency] = useState('EUR');
	const [currencyRates, setCurrencyRates] = useState({});
	const [convertedAmount, setConvertedAmount] = useState('0.00');
	const [fromCurrencyRate, setFromCurrencyRate] = useState(null);
	const [toCurrencyRate, setToCurrencyRate] = useState(null);

	const swapCurrencies = () => {
		let temp = fromCurrency;
		setFromCurrency(toCurrency);
		setToCurrency(temp);

		setInputString(convertedAmount);
		// console.log(`from: ${fromCurrency}; to: ${toCurrency}`)
	}

	useEffect(() => {
		const fetchRates = async () => {
			try {
				const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
				const rates = response.data.rates;
				setCurrencyRates(rates);
				await AsyncStorage.setItem('currencyRates', JSON.stringify(rates));
				const storedRates = await AsyncStorage.getItem('currencyRates');
			} catch (err) {
				const storedRates = await AsyncStorage.getItem('currencyRates');
				if (storedRates) {
					setCurrencyRates(JSON.parse(storedRates));
				}
			}

			// console.log(currencyRates);
		}

		fetchRates();
	}, [])

	useEffect(() => {
		const convert = () => {
			setFromCurrencyRate(currencyRates[fromCurrency]);
			setToCurrencyRate(currencyRates[toCurrency]);
			const amount = parseFloat(inputString);
			const amountTemp = amount / fromCurrencyRate * toCurrencyRate;
			setConvertedAmount(amountTemp.toFixed(2));
			// console.log(amountTemp);
		};
		convert();
	}, [inputString, fromCurrency, toCurrency, swapCurrencies])


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
					<ScrollView
						contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
						style={{ height: 230 }} // Задаем высоту ScrollView
					>
						<View className='flex-col items-center space-y-3 my-6'>
							<Text className='text-5xl font-ibold text-center'>{inputString} {fromCurrency}</Text>
							<Text className='text-3xl font-ibold text-secondary text-center mx-3'>{convertedAmount} {toCurrency}</Text>
							<Text className='text-2xl text-gray-500'>{fromCurrencyRate} {fromCurrency} = {toCurrencyRate} {toCurrency}</Text>
						</View>
					</ScrollView>
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