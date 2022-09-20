import './StatusBar.css';
import signal from '../../assets/signal.png';
import battery from '../../assets/battery.png';
import Clock from './Clock';
import classNames from 'classnames';

export const StatusBar = ({ isDarkMode }: { isDarkMode?: boolean; }) => {
  return (
    <div className={classNames('status-bar', { 'dark-mode': isDarkMode })}>
      <Clock />
      <img src={signal} alt='Signal' height={10} className='signal' />
      <img src={battery} alt='Signal' height={10} className='battery' />
    </div>
  );
};
