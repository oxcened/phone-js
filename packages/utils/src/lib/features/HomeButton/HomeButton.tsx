import './HomeButton.css';
import classNames from 'classnames';

export const HomeButton = ({ isDarkMode }: { isDarkMode?: boolean; }) => {
  return (
    <div className={classNames('home-button', { 'dark-mode': isDarkMode })}>

    </div>
  );
};
