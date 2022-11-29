const React = require('react');
const {useState} = require('react');
const {render, Box, Text} = require('ink');
const TextInput = require('ink-text-input').default;

// Next step
const Homepage = require('import-jsx')('./homepage.jsx');

function Login({apiKey, onApiKeyChange}) {
	const onApiKeySubmit = (newVal) => {
		onApiKeyChange(newVal);
		render(<Homepage apiKey={apiKey} />);
	}

	return (
		<Box flexDirection="column">
			<Text>Your API Key:</Text>
			<TextInput value={apiKey} onChange={onApiKeyChange} onSubmit={onApiKeySubmit} />
		</Box>
	);
}

module.exports = Login;
