import { ComponentType, LazyExoticComponent } from 'react';

export type PhoneApp<T extends ComponentType> = {
  /** Unique identifier */
  id: string;

  /** Index component - You have to use React.lazy() for this */
  element: LazyExoticComponent<T>;

  /** Title to display below the launcher icon */
  title: string;

  /** Path of the icon to display on the home */
  iconPath: string;

  /** Route associated to the index component */
  route: string;

  /** Route to navigate when clicking on the launcher icon - Usually matches [route] */
  destination: string;
};
