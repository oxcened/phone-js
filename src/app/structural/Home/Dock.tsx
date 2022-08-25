import './Dock.css';
import AppIcon from '../AppIcon/AppIcon';
import phone from 'assets/images/app-icons/app-icon-37.png';
import browser from 'assets/images/app-icons/app-icon-3.png';
import messages from 'assets/images/app-icons/app-icon-6.png';
import music from 'assets/images/app-icons/app-icon-18.png';

const Dock = () => {
  return (
    <div className='dock'>
      <AppIcon title='Dialer' iconPath={phone} showLabel={false} />
      <AppIcon title='Browser' iconPath={browser} showLabel={false} />
      <AppIcon title='Messages' iconPath={messages} showLabel={false} />
      <AppIcon title='Music' iconPath={music} showLabel={false} />
    </div>
  );
};

export default Dock;
