import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class MenuBar extends Component {
  render() {
    return (
      <div className="menuBarContainer">
        <div className="tabButtonContainer">
          {
            // タブボタンのリストを生成
            this.props.tabs.map((tab) => {
              const selected = (tab.index === this.props.selectedTabIndex);
              return (
                <button
                  key={`tab-button-${tab.index}`}
                  className={selected ? "active" : "notActive"}
                  onClick={() => this.props.onTabChange(tab.index)}
                >
                  {tab.name}
                </button>
              )
            })
          }
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  onTabChange: PropTypes.func.isRequired,
  selectedTabIndex: PropTypes.number.isRequired,
  tabs: PropTypes.object.isRequired,
};
