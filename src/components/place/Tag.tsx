import React, { PureComponent } from 'react';

import { Chip } from '../material';

interface IProps {
    id: string;
    title: string;
}

export default class Tag extends PureComponent<IProps> {
    render() {
        const { id, title } = this.props;

        return (
            <Chip
                className={`place__tag ${id}`}
                color="primary"
                label={title}
            />
        );
    }
}
