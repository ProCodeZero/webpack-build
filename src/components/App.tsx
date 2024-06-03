import Weather from '@/assets/circle-heat-svgrepo-com.svg';
import raven from '@/assets/raven-2568567_1280.png';
import rose from '@/assets/rose-draught-beer-png-mug-mockup.jpg';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as styles from './App.module.scss';

// TREE SHAKING - оптимизация приложения за счет исключения неиспользуемых частей приложения
// таких как функция ниже, она в сборку не попадает, т.к. она не используется
const TODO = function () {
	console.log('TODOFUNCTION');
};

const App = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	// Пример использования глобальной переменной для отображения нужной части приложения

	// if (__PLATFORM__ === 'desktop') {
	// 	return <div>IsDeskpot</div>;
	// }

	// if (__PLATFORM__ === 'mobile') {
	// 	return <div>IsMobile</div>;
	// }

	return (
		<>
			<div>
				<h1>PLATFORM: {__PLATFORM__}</h1>
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
				<Weather color="brown" width={250} height={250} />
			</div>
			<Outlet />
		</>
	);
};

export default App;
