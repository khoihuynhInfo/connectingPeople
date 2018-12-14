import React, { Component } from 'react';
import SettingContainer from './../../containers/SettingContainer/index';

class SettingPage extends Component {
    render() {
        return (
            <div className="settings-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <SettingContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingPage;


