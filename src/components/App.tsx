import {
    useState,
} from 'react';
import {
    Link,
    Outlet,
} from 'react-router-dom';
import styles from './App.module.scss'
import png from '@/assets/AndroidPng.png'
import jpg from '@/assets/AndroidJpg.jpg'
import Svg from '@/assets/Android.svg'
export const App = () => {
    const [count, setCount] = useState(0);
    if(typeof  count === '')
    return (
        <div>
            <div className={styles.navbar} data-testid={'NavBar-data-test-id'}>
                <Link to={'/about'}>about</Link>
                <Link to={'/shop'}>shop</Link>
            </div>
            <img src={png} />
            <img src={jpg} />
          <Svg  width={500} height={500}/>
            <p>Значение: {count}</p>

            <button className={styles.button} onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>

            <Outlet />
        </div>
    );
};
