import { useState } from 'react';
import * as styles from './App.module.scss';

const App = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button className={styles.btn} onClick={increment}>
				Increment
			</button>
		</div>
	);
};

export default App;
