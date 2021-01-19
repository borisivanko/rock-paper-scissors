import React, { useState } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import './App.css';

function App() {
	const options = ['Rock', 'Paper', 'Scissors'];
	const [playerOption, setPlayerOption] = useState();
	return (
		<>
			<main>
				<div>
					<FaHandRock />
				</div>
				<div>
					<FaHandPaper />
				</div>
				<div>
					<FaHandScissors />
				</div>
			</main>
		</>
	);
}

export default App;
