import logo from './logo.svg';
import './App.css';
import { InputText } from 'primereact/inputtext';
import {useRef, useState} from 'react';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/button';
import {Toast} from 'primereact/toast';
import * as wasm from './static/wasm.js';

function App() {
	const [text, setText] = useState('');
	const toastRef = useRef();
	const onButtonClick = () => {
		if (text) {
			toastRef.current.show({severity: 'info', summary: 'Success', detail: text});
		} else {
			toastRef.current.show({severity: 'error', summary: 'Error', detail: 'Value is required'});
		}
	}
	const onCrossClick = () => {
		setText('');
		wasm.add(2,5);
	}
	const whitespace = ' ';
	return (
		<div className="App">
			<Toast ref={toastRef} />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<InputText value={text} onChange={e => setText(e.target.value)}/>
				<div className="row">
					<Button type="button" icon="pi pi-times" onClick={onCrossClick}></Button>
					{whitespace}
					<Button type="button" icon="pi pi-check" onClick={onButtonClick}></Button>
				</div>
			</header>
		</div>
	);
}

export default App;
