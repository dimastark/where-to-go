import React, { PureComponent } from 'react';

import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from 'components/material';
import { PlaceCategory } from 'shared/places-api';
import { ISettingsState } from 'store/reducers/settings';

import './SettingsTab.css';

export interface IStateFromProps {
    settings: ISettingsState;
}

export interface IDispatchFromProps {
    setCategory: (category: PlaceCategory) => void;
    setRadius: (radius: number) => void;
}

export interface IProps extends IStateFromProps, IDispatchFromProps {
}

export class SettingsTab extends PureComponent<IProps> {
    render() {
        const { settings } = this.props;

        return (
            <div className="settings-tab">
                <FormControl className="settings-tab__field">
                    <InputLabel shrink={true}>Категория заведения</InputLabel>
                    <Select
                        value={settings.category}
                        onChange={this.handleChangeCategory}
                    >
                        <MenuItem value="eat-drink">Любая еда</MenuItem>
                        <MenuItem value="restaurant">Ресторан</MenuItem>
                        <MenuItem value="coffee-tea">Кафе</MenuItem>
                        <MenuItem value="snacks-fast-food">Фаст-фуд</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    className="settings-tab__field"
                    label="Радиус поиска"
                    value={settings.radius}
                    onChange={this.handleChangeRadius}
                    type="number"
                />
                <Button
                    color="primary"
                    size="medium"
                    variant="outlined"
                    onClick={this.handleRefresh}
                >
                    Перезапросить данные
                </Button>
            </div>
        );
    }

    handleChangeCategory = (event: any) => {
        this.props.setCategory(event.target.value);
    }

    handleChangeRadius = (event: any) => {
        this.props.setRadius(event.target.value);
    }

    handleRefresh = () => {
        window.location.hash = '';
        window.location.reload();
    }
}
