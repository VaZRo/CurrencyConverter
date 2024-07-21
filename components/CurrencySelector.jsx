import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
	{ label: 'USD', value: 'USD' },
	{ label: 'EUR', value: 'EUR' },
	{ label: 'BTN', value: 'BTN' },
	// Добавьте другие валюты по мере необходимости
];

const CurrencySelector = ({ selectedCurrency, setSelectedCurrency }) => {
	const [value, setValue] = useState(selectedCurrency);

	useEffect(() => {
		setValue(selectedCurrency);
	}, [selectedCurrency]);

	const renderItem = (item) => {
		return (
			<View className="p-3 flex-row items-center justify-center font-iextraBold">
				<Text className="font-isemibold">{item.label}</Text>
			</View>
		);
	};

	return (
		<Dropdown
			className="w-[90px] h-12 bg-white rounded-md p-4 
				shadow-md border border-gray-300 py-3"
			placeholderStyle="font-isemibold"
			fontFamily='Inter-SemiBold'
			iconStyle="hidden"
			data={data}
			search={false}
			iconColor='black'
			maxHeight={200}
			labelField="label"
			valueField="value"
			placeholder="Select currency"
			value={value}
			onChange={(item) => {
				setValue(item.value)
				setSelectedCurrency(item.value);
			}}
			renderItem={renderItem}
		/>
	);
};

export default CurrencySelector;
