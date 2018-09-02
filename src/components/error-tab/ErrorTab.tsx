import React, { PureComponent } from 'react';

import './ErrorTab.css';

export interface IProps {
    description: string;
}

export class ErrorTab extends PureComponent<IProps> {
    render() {
        return (
            <div className="error-tab">
                {this.props.description}
            </div>
        );
    }
}
