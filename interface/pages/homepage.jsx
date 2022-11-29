const React = require('react');
const {useState} = require('react');
const {render, Box, Text} = require('ink');
const TextInput = require('ink-text-input').default;

function Homepage({apiKey}) {
	const [searchTerm, setSearchTerm] = useState('');
	function onProjectSearch() {
		render(<Text>You searched for {searchTerm}</Text>);
	}

	return (
		<Box paddingX={2} paddingY={1} flexDirection="column">
			<Box flexDirection="column">
				<Text>Explore mapping projects</Text>
				<Box borderStyle="single" width="90%" paddingX={1}>
					<TextInput
						value={searchTerm}
						placeholder="Search projects..."
						onChange={setSearchTerm}
						onSubmit={onProjectSearch}
					/>
				</Box>
			</Box>
		</Box>
	);
}

module.exports = Homepage;
