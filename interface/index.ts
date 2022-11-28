import React, {useState} from 'react';
import {render, Box, Text} from 'ink';
import TextInput from 'ink-text-input';

import Login from './pages/login';

const [apiKey, setApiKey] = useState('');

render(<Login apiKey={apiKey} setApiKey={setApiKey}/>);
