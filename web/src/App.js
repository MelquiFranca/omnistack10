import React, { useEffect, useState } from 'react';

import './global.css';
import './Sidebar.css';
import './App.css';
import './Main.css';

import api from './services/api';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {

	const [devs, setDevs] = useState([]);

	useEffect(() => {
		async function loadDevs() {
			const response = await api.get('/devs');
			setDevs(response.data);
		}

		loadDevs();

	}, []);

	async function handleAddDev(data) {
		const response = await api.post('/devs', data);

		setDevs([...devs, response.data]);
	}

	async function handleRemoveDev(data) {
		let response = await api.delete(`/devs/${data.github_username}`);
		response = await api.get('/devs');
	}

	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>
				<DevForm onSubmit={handleAddDev}/>
			</aside>

			<main>
				<ul>
					{devs.map(dev => (
						<DevItem dev={dev} key={dev._id}/>
					))}					
				</ul>
			</main>
		</div>
	);
}

export default App;
