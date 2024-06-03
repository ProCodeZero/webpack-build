import OnlineClass from '@/assets/online-class-svgrepo-com.svg';
import raven from '@/assets/raven-2568567_1280.png';
import rose from '@/assets/rose-draught-beer-png-mug-mockup.jpg';
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
			<img width={250} src={raven} />
			<img width={250} src={rose} />
			<div>
				<OnlineClass width={250} height={250} />
			</div>
			<Outlet />
		</>
	);
};

export default App;
