import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { AppBar, SwipeViews, Tab, Tabs } from '../material';

import tabsConfig from './tabs-config';

import './App.css';

export class App extends PureComponent<RouteComponentProps<{}>> {
    render() {
        return (
            <div className="app">
                <AppBar
                    className="app__bar"
                    position="fixed"
                    color="default"
                >
                    <Tabs
                        value={this.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth={true}
                    >
                        {tabsConfig.tabs.map(tab => (
                            <Tab
                                key={tab.path}
                                icon={tab.icon}
                                label={tab.label}
                                value={tab.path}
                            />
                        ))}
                    </Tabs>
                </AppBar>
                <SwipeViews
                    className="app__tabs"
                    slideClassName="app__tab"
                    index={this.index}
                    onChangeIndex={this.handleChangeIndex}
                    resistance={true}
                    animateHeight={true}
                >
                    {tabsConfig.tabs.map(tab => (
                        <tab.Component key={tab.path}/>
                    ))}
                </SwipeViews>
            </div>
        );
    }

    handleChange = (event: any, path: string) => {
        this.props.history.push(path);
    }

    handleChangeIndex = (index: number) => {
        const path = App.paths[index];

        this.props.history.push(path);
    }

    static get defaultPath() {
        return tabsConfig.defaultTab;
    }

    static get paths() {
        return tabsConfig.tabs.map(tab => tab.path);
    }

    get value() {
        const { pathname } = this.props.location;

        return App.paths.includes(pathname) ? pathname : App.defaultPath;
    }

    get index() {
        return App.paths.indexOf(this.value);
    }
}
