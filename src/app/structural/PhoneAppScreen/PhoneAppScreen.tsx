import React, { Fragment, PropsWithChildren, useMemo } from 'react';
import SafeArea from '../SafeArea/SafeArea';
import StatusBar from '../StatusBar/StatusBar';
import HomeButton from '../HomeButton/HomeButton';

type Props = {
  /** Toggles dark mode - Determinates color of status bar items and home button */
  isDarkMode?: boolean;

  /** Toggles safe area - Places margins to avoid notch and screen corners in general */
  useSafeArea?: boolean;

  /** Toggles status bar in the top screen */
  showStatusBar?: boolean;

  /** Toggles home button in the bottom screen */
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
