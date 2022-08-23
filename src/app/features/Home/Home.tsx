import React from 'react';
import './Home.css';
import Dock from '../Dock/Dock';
import AppIcon from '../AppIcon/AppIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AppIconId } from '../AppIcon/AppIconId';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../core/models/AppRoute';

const Home = () => {
  const navigate = useNavigate();

  const appIcons = (
    <div className='temp'>
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
  );

  return (
    <div className='home'>
      <Swiper>
        <SwiperSlide>
          {appIcons}
        </SwiperSlide>

        <SwiperSlide>
          {appIcons}
        </SwiperSlide>

        <SwiperSlide>
          {appIcons}
        </SwiperSlide>
      </Swiper>
      <Dock />
    </div>
  );
};

export default Home;
