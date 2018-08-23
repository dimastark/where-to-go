import React, { PureComponent } from 'react';

import './Error.css';

interface IProps {
    description: string,
}

export default class Error extends PureComponent<IProps> {
    render() {
        const { description } = this.props;

        return (
            <div className="error">
                {description}
            </div>
        );
    }
}
