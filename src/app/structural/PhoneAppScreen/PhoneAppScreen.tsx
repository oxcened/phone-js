import React, { Fragment, PropsWithChildren, useMemo } from 'react';
import SafeArea from '../SafeArea/SafeArea';
import StatusBar from '../StatusBar/StatusBar';
import HomeButton from '../HomeButton/HomeButton';

type Props = {
  isDarkMode?: boolean;
  useSafeArea?: boolean;
  showStatusBar?: boolean;
  showHomeButton?: boolean;
};

const PhoneAppScreen = (
  {
    children,
    useSafeArea = true,
    showStatusBar = true,
    isDarkMode,
    showHomeButton = true
  }: PropsWithChildren<Props>) => {

  const Wrapper = useMemo(() => {
    return useSafeArea ? SafeArea : Fragment;
  }, [useSafeArea]);

  return (
    <>
      {showStatusBar && (
        <StatusBar isDarkMode={isDarkMode} />
      )}
      <Wrapper>
        {children}
      </Wrapper>

      {showHomeButton && (
        <HomeButton isDarkMode={isDarkMode} />
      )}
    </>
  );
};

export default PhoneAppScreen;
