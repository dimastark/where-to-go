import React, { PureComponent } from 'react';

import { Spin } from '../material';

import './SpinTab.css';

export class SpinTab extends PureComponent {
    render() {
        return (
            <div className="spin-tab">
                <Spin size={60} />
            </div>
        );
    }
}
