import { lazy, ComponentType } from 'react';
import { PhoneApp } from './PhoneApp';
import { LAUNCHER_ICON as notesIcon } from '@phone-js/notes';
import { LAUNCHER_ICON as calculatorIcon } from '@phone-js/calculator';

const phoneApps: PhoneApp<ComponentType>[] = [
  {
    id: 'notes',
    element: lazy(() => import('@phone-js/notes')),
    iconPath: notesIcon,
    title: 'Notes',
    route: 'notes/*',
    destination: 'notes'
  },
  {
    id: 'calculator',
    element: lazy(() => import('@phone-js/calculator')),
    iconPath: calculatorIcon,
    title: 'Calculator',
    route: 'calculator/*',
    destination: 'calculator'
  }
];

export default phoneApps;
