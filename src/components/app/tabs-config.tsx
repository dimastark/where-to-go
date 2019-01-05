import React from 'react';

import { FavouriteIcon, SettingsIcon } from '../material';

import ChoiceTab from '../choice-tab';
import FavouritesTab from '../favourites-tab';
import SettingsTab from '../settings-tab';

export default {
    defaultTab: '/choice',
    tabs: [
        {
            Component: ChoiceTab,
            label: 'Куда пойдем?',
            path: '/choice',
        },
        {
            Component: FavouritesTab,
            icon: <FavouriteIcon/>,
            path: '/favourites',
        },
        {
            Component: SettingsTab,
            icon: <SettingsIcon/>,
            path: '/settings',
        },
    ],
};
