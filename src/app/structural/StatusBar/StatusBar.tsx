import './StatusBar.css';
import signal from 'assets/images/system-icons/signal.png';
import battery from 'assets/images/system-icons/battery.png';
import Clock from './Clock';
import classNames from 'classnames';

const StatusBar = ({ isDarkMode }: { isDarkMode?: boolean; }) => {
  return (
    <div className={classNames('status-bar', { 'dark-mode': isDarkMode })}>
      <Clock />
      <img src={signal} alt='Signal' height={10} className='signal' />
      <img src={battery} alt='Signal' height={10} className='battery' />
    </div>
  );
};

export default StatusBar;
