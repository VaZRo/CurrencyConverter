import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Keyboard = ({ inputString, setInputString}) => {
	const handlePress = (value) => {
		if(value === '⌫'){
			const finalInputString = inputString.slice(0, -1);
			if(finalInputString === '') setInputString('0.00');
			else setInputString(finalInputString);
		}
		else{
			setInputString(inputString === '0.00' ? value : inputString + value);
		}
	}

	handleLongPress = () => {
		setInputString('0.00');
	}

	const renderButton = (value) => {
		return (
			<TouchableOpacity
				key={value}
				onPress={() => handlePress(value)}
				activeOpacity={0.7}
				className='border border-gray-300 rounded-lg w-[100px] h-[60px] items-center justify-center'
				onLongPress={value === '⌫' ? handleLongPress : null}
			>
				<Text className='font-isemibold text-3xl'>{value}</Text>
			</TouchableOpacity>
		)
	}

	const renderRow = (values) => {
		return (
			<View className='flex-row space-x-5'>
				{values.map((value) => renderButton(value))}
			</View>
		)

	}

	return (
		<View className='space-y-10 mt-10'>
			{renderRow(['7', '8', '9'])}
			{renderRow(['4', '5', '6'])}
			{renderRow(['1', '2', '3'])}
			{renderRow(['.', '0', '⌫'])}
		</View>
	)
}

export default Keyboard