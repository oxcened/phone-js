import './Home.css';
import Dock from './Dock';
import AppIcon from '../AppIcon/AppIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import SafeArea from '../SafeArea/SafeArea';
import { useMemo } from 'react';
import phoneApps from '../../phoneApps/phoneApps';
import videoCall from 'assets/images/app-icons/app-icon-7.png';
import calendar from 'assets/images/app-icons/app-icon-15.png';
import photos from 'assets/images/app-icons/app-icon-13.png';
import camera from 'assets/images/app-icons/app-icon-21.png';
import email from 'assets/images/app-icons/app-icon-9.png';
import reminders from 'assets/images/app-icons/app-icon-14.png';
import store from 'assets/images/app-icons/app-icon-25.png';
import maps from 'assets/images/app-icons/app-icon-5.png';
import health from 'assets/images/app-icons/app-icon-20.png';
import wallet from 'assets/images/app-icons/app-icon-11.png';
import settings from 'assets/images/app-icons/app-icon-31.png';

const Home = () => {
  const navigate = useNavigate();

  const functioningApps = useMemo(() => {
    return phoneApps.map(app => {
      const onClick = () => navigate(app.destination);

      return (
        <AppIcon key={app.id} title={app.title} iconPath={app.iconPath} disable={false} onClick={onClick} />
      );
    });
  }, [phoneApps]);

  const appIcons = (
    <SwiperSlide>
      <div className='page'>
        {functioningApps}
        <AppIcon title='Video Call' iconPath={videoCall} />
        <AppIcon title='Calendar' iconPath={calendar} />
        <AppIcon title='Photos' iconPath={photos} />
        <AppIcon title='Camera' iconPath={camera} />
        <AppIcon title='Email' iconPath={email} />
        <AppIcon title='Reminders' iconPath={reminders} />
        <AppIcon title='Store' iconPath={store} />
        <AppIcon title='Maps' iconPath={maps} />
        <AppIcon title='Health' iconPath={health} />
        <AppIcon title='Wallet' iconPath={wallet} />
        <AppIcon title='Settings' iconPath={settings} />
      </div>
    </SwiperSlide>
  );

  return (
    <div className='home'>
      <SafeArea>
        <Swiper>
          {appIcons}
          {appIcons}
          {appIcons}
        </Swiper>
        <Dock />
      </SafeArea>
    </div>
  );
};

export default Home;
