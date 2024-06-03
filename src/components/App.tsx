import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as styles from './App.module.scss';

const App = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<>
			<div>
				<h1>{count}</h1>
				<button className={styles.btn} onClick={increment}>
					Increment
				</button>
				<Link to="/about">To about</Link>
				<Link to="/shop">To shop</Link>
			</div>
			<Outlet />
		</>
	);
};

export default App;
