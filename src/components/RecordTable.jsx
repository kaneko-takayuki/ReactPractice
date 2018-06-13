import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Record from './Record';

// テーブルコンポーネント
export default class RecordTable extends Component {
  render() {
    return (
      <div className="recordTableContainer">
        {
          this.props.data.map((obj, i) => <Record key={`record-${i}`} data={obj}/>)
        }
      </div>
    );
  }
}

RecordTable.propTypes = {
  data: PropTypes.object.isRequired
};
