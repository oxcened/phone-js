import './StatusBar.css';
import signal from '../../../assets/images/system-icons/signal.png';
import battery from '../../../assets/images/system-icons/battery.png';
import Clock from './Clock';

const StatusBar = () => {
  return (
    <div className='status-bar'>
      <Clock />
      <img src={signal} alt='Signal' height={10} className='signal' />
      <img src={battery} alt='Signal' height={10} className='battery' />
    </div>
  );
};

export default StatusBar;
