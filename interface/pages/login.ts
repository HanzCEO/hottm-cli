import React, {useState} from 'react';
import {render, Box, Text} from 'ink';
import TextInput from 'ink-text-input';

// Next step
import Homepage from './homepage';

export default function Login({apiKey, setApiKey}) {
	function onApiKeyChange(newVal) {
		setApiKey(newVal);
		render(<Homepage apiKey={apiKey} />);
	}

	return (
		<Box>
			<Text>Your API Key:</Text>
			<TextInput onChange={onApiKeyChange} />
		</Box>
	);
}
