import PropTypes from 'prop-types';
import React, { Component } from 'react';

// レコード1つ分のコンポーネント
export default class Record extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="recordContainer">
        {/* 氏名 */}
        <div>
          <span className="title">Name: </span>
          <span className="content">{data.name}</span>
        </div>

        {/* 年齢 */}
        <div>
          <span className="title">Age: </span>
          <span>{data.age}</span>
        </div>

        {/* スキル */}
        <div>
          <span className="title">Skills: </span>
          <span>{data.skills.map((skill, i) => <div key={`${data.name}-skill-${i}`}>- {skill}</div>)}</span>
        </div>
      </div>
    );
  }
}

Record.propTypes = {
  data: PropTypes.object.isRequired
};
