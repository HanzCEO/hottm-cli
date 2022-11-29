const React = require('react');
const {useState} = require('react');
const {render, Box, Text} = require('ink');
const TextInput = require('ink-text-input').default;

const Login = require('import-jsx')('./pages/login.jsx');

function Index() {
	const [apiKey, setApiKey] = useState('');
	function onApiKeyChange(newVal) {
		setApiKey(newVal);
	}

	return (<Login apiKey={apiKey} onApiKeyChange={onApiKeyChange} />);
}

render(<Index />);
