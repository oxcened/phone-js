import './AppIcon.css';
import classNames from 'classnames';

const AppIcon = ({ title, iconPath, showLabel = true, disable = true, onClick }: {
  title: string;
  iconPath: string;
  showLabel?: boolean;
  disable?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div className={classNames('app-icon', { 'disable': disable })}>
      <img className='icon' src={iconPath} alt={title} onClick={onClick} />
      {showLabel && (
        <div className='label'>{title}</div>
      )}
    </div>
  );
};

export default AppIcon;
