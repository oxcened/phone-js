import React from 'react';
import { PhoneApp } from './PhoneApp';
import notesIcon from 'assets/images/app-icons/app-icon-8.png'

const phoneApps: PhoneApp<any>[] = [
  {
    id: 'notes',
    element: React.lazy(() => import('./Notes/Notes')),
    iconPath: notesIcon,
    title: 'Notes',
    route: 'notes/*',
    destination: 'notes'
  }
];

export default phoneApps;
