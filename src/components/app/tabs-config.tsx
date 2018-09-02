import React from 'react';

import { FavouriteIcon, SettingsIcon } from 'components/material';

import ChoiceTab from 'components/choice-tab';
import FavouritesTab from 'components/favourites-tab';
import SettingsTab from 'components/settings-tab';

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
