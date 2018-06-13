import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './css/App.css';

import RecordTable from './components/RecordTable';
import InputForms from './components/InputForms';
import MenuBar from './components/MenuBar';

const dummyData = [
  { name: 'taro', age: 20, skills: ['Basket Ball', 'Math'] },
  { name: 'jiro', age: 18, skills: ['Japanese', 'Tennis', 'Music'] },
  { name: 'saburo', age: 15, skills: ['English', 'Baseball'] }
];

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
            tabs={[
              { index: 0, name: '追加フォーム' },
              { index: 1, name: '一覧' },
            ]}
          />
        </div>

        {/* コンテンツ */}
        <div>
          {
            (this.state.selectedTabIndex === 0) ?
              <InputForms />
              : <RecordTable data={dummyData} />
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
