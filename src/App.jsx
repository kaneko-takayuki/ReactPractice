import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as I from 'immutable';

import './css/App.css';
import Person from './model/Person';
import Tab from './model/Tab';
import RecordTable from './components/RecordTable';
import InputForms from './components/InputForms';
import MenuBar from './components/MenuBar';

// 「一覧」画面に表示させる人データ
const persons = I.List([
  new Person('taro', 20, ['Basket Ball', 'Math']),
  new Person('jiro', 18, ['Japanese', 'Tennis', 'Music']),
  new Person( 'saburo', 15, ['English', 'Baseball'])
]);

// タブ一覧
const tabs = I.List([
  new Tab(0, '追加フォーム'),
  new Tab(1, '一覧' ),
]);

// 選択状態の切り替え
function changeTabIndex(index) {
  this.setState({selectedTabIndex: index});
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: props.selectedTabIndex,
    };
  }

  render() {
    return (
      <div className="App">
        {/* メニューバー */}
        <div>
          <MenuBar
            onTabChange={this::changeTabIndex}
            selectedTabIndex={this.state.selectedTabIndex}
            tabs={tabs}
          />
        </div>

        {/* コンテンツ */}
        <div>
          {
            (this.state.selectedTabIndex === 0) ?
              <InputForms />
              : <RecordTable data={persons} />
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  selectedTabIndex: PropTypes.number.isRequired,
};

App.defaultProps = {
  selectedTabIndex: 0,
};

export default App;
