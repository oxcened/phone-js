import './AppIcon.css';
import phone from '../../../assets/images/app-icons/app-icon-37.png';
import browser from '../../../assets/images/app-icons/app-icon-3.png';
import messages from '../../../assets/images/app-icons/app-icon-6.png';
import music from '../../../assets/images/app-icons/app-icon-18.png';
import videoCall from '../../../assets/images/app-icons/app-icon-7.png';
import calendar from '../../../assets/images/app-icons/app-icon-15.png';
import photos from '../../../assets/images/app-icons/app-icon-13.png';
import camera from '../../../assets/images/app-icons/app-icon-21.png';
import email from '../../../assets/images/app-icons/app-icon-9.png';
import notes from '../../../assets/images/app-icons/app-icon-8.png';
import reminders from '../../../assets/images/app-icons/app-icon-14.png';
import store from '../../../assets/images/app-icons/app-icon-25.png';
import maps from '../../../assets/images/app-icons/app-icon-5.png';
import health from '../../../assets/images/app-icons/app-icon-20.png';
import wallet from '../../../assets/images/app-icons/app-icon-11.png';
import settings from '../../../assets/images/app-icons/app-icon-31.png';
import { AppIconId } from './AppIconId';

const AppIcon = ({ id, showLabel = true, onClick }: {
  id: AppIconId;
  showLabel?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div className='app-icon'>
      <img className='icon' src={icon[id]} alt={label[id]} onClick={onClick} />
      {showLabel && (
        <div className='label'>{label[id]}</div>
      )}
    </div>
  );
};

const label = {
  [AppIconId.VIDEO_CALL]: 'Video Call',
  [AppIconId.CALENDAR]: 'Calendar',
  [AppIconId.PHOTOS]: 'Photos',
  [AppIconId.CAMERA]: 'Camera',
  [AppIconId.EMAIL]: 'Email',
  [AppIconId.NOTES]: 'Notes',
  [AppIconId.REMINDERS]: 'Reminders',
  [AppIconId.STORE]: 'Store',
  [AppIconId.MAPS]: 'Maps',
  [AppIconId.HEALTH]: 'Health',
  [AppIconId.WALLET]: 'Wallet',
  [AppIconId.SETTINGS]: 'Settings',
  [AppIconId.PHONE]: 'Phone',
  [AppIconId.BROWSER]: 'Browser',
  [AppIconId.MESSAGES]: 'Messages',
  [AppIconId.MUSIC]: 'Music'
};

const icon = {
  [AppIconId.VIDEO_CALL]: videoCall,
  [AppIconId.CALENDAR]: calendar,
  [AppIconId.PHOTOS]: photos,
  [AppIconId.CAMERA]: camera,
  [AppIconId.EMAIL]: email,
  [AppIconId.NOTES]: notes,
  [AppIconId.REMINDERS]: reminders,
  [AppIconId.STORE]: store,
  [AppIconId.MAPS]: maps,
  [AppIconId.HEALTH]: health,
  [AppIconId.WALLET]: wallet,
  [AppIconId.SETTINGS]: settings,
  [AppIconId.PHONE]: phone,
  [AppIconId.BROWSER]: browser,
  [AppIconId.MESSAGES]: messages,
  [AppIconId.MUSIC]: music
};

export default AppIcon;
