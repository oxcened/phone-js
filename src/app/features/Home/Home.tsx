import './Home.css';
import Dock from './Dock';
import AppIcon from '../AppIcon/AppIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AppIconId } from '../AppIcon/AppIconId';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../core/models/AppRoute';
import SafeArea from '../SafeArea/SafeArea';

const Home = () => {
  const navigate = useNavigate();

  const appIcons = (
    <SwiperSlide>
      <div className='page'>
        <AppIcon id={AppIconId.VIDEO_CALL} />
        <AppIcon id={AppIconId.CALENDAR} />
        <AppIcon id={AppIconId.PHOTOS} />
        <AppIcon id={AppIconId.CAMERA} />

        <AppIcon id={AppIconId.EMAIL} />
        <AppIcon id={AppIconId.NOTES} onClick={() => navigate(AppRoute.NOTES)} />
        <AppIcon id={AppIconId.REMINDERS} />
        <AppIcon id={AppIconId.STORE} />

        <AppIcon id={AppIconId.MAPS} />
        <AppIcon id={AppIconId.HEALTH} />
        <AppIcon id={AppIconId.WALLET} />
        <AppIcon id={AppIconId.SETTINGS} />
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
