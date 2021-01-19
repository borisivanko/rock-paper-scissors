import React, { useState } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import './App.css';

function App() {
	const options = ['Rock', 'Paper', 'Scissors'];

	const [playerOption, setPlayerOption] = useState();
	const [computerOption, setComputerOption] = useState();
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);
	const [message, setMessage] = useState();

	const selectOption = (player) => {
		setPlayerOption(player);
		setComputerOption(options[Math.floor(Math.random() * options.length)]);

		if (playerOption === 'Rock') {
			if (computerOption === 'Scissors') {
				setMessage('You won!');
				setPlayerScore(playerScore + 1);
			} else if (computerOption === 'Paper') {
				setMessage('You lost!');
				setComputerScore(computerScore + 1);
			} else {
				setMessage('Tie!');
			}
		}

		if (playerOption === 'Paper') {
			if (computerOption === 'Rock') {
				setMessage('You won!');
				setPlayerScore(playerScore + 1);
			} else if (computerOption === 'Scissors') {
				setMessage('You lost!');
				setComputerScore(computerScore + 1);
			} else {
				setMessage('Tie!');
			}
		}

		if (playerOption === 'Scissors') {
			if (computerOption === 'Paper') {
				setMessage('You won!');
				setPlayerScore(playerScore + 1);
			} else if (computerOption === 'Rock') {
				setMessage('You lost!');
				setComputerScore(computerScore + 1);
			} else {
				setMessage('Tie!');
			}
		}
	};

	return (
		<>
			<main className='centered'>
				<section className='wrapper score'>
					<h2>Player: {playerScore}</h2>
					<h2>Computer: {computerScore}</h2>
				</section>
				<section className='wrapper'>
					<div className='options' onClick={() => selectOption('Rock')}>
						<FaHandRock className='option' />
					</div>
					<div className='options' onClick={() => selectOption('Paper')}>
						<FaHandPaper className='option' />
					</div>
					<div className='options' onClick={() => selectOption('Scissors')}>
						<FaHandScissors className='option' />
					</div>
				</section>
				<section className='wrapper message'>
					{message ? (
						<h1>{message}</h1>
					) : (
						<h1>Select one of the above to start game!</h1>
					)}
				</section>
			</main>
		</>
	);
}

export default App;
