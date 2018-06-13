import createClass from 'create-react-class';
import React from 'react';

const InputForms = createClass({
  // 初期状態をセットする
  getInitialState() {
    return {
      name: '',
      age: '',
      hobby: '音楽',
    };
  },

  // 「名前」を変更する
  changeName(event) {
    this.setState({name: event.target.value});
  },

  // 「年齢」を変更する
  changeAge(event) {
    this.setState({age: event.target.value});
  },

  // 「趣味」を変更する
  changeHobby(event) {
    this.setState({hobby: event.target.value});
  },

  // 「登録」ボタンが押下された
  submit() {
    console.log(`名前: ${this.state.name}`);
    console.log(`年齢: ${this.state.age}`);
    console.log(`趣味: ${this.state.hobby}`);
    console.log('------------')
  },

  render: function() {
    // 入力妥当性チェック
    const nameEntered = (this.state.name.length > 0);
    const ageEntered = (this.state.age.length > 0);
    const ageValid = (!isNaN(Number(this.state.age)) && Number(this.state.age) > 0);

    return (
      <div className="inputContainer">
        {/* 名前 */}
        <div className="inputContainer">
          <span className="title">名前: </span>
          <input
            type="text"
            placeholder="名前を入力してください"
            value={this.state.name}
            onChange={this::this.changeName}
          />
        </div>

        {/* 年齢 */}
        <div className="inputContainer">
          <span className="title">年齢: </span>
          <input
            type="text"
            placeholder="年齢を入力してください"
            value={this.state.age}
            onChange={this::this.changeAge}
          />
          {
            // 数値以外のものが入力された時のみエラーメッセージを出力
            (ageEntered && !ageValid) ?
              <span className="errorMessage">数値を入力して下さい</span>
              : null
          }
        </div>

        {/* 趣味 */}
        <div className="inputContainer">
          <span className="title">趣味: </span>
          <select
            value={this.state.hobby}
            onChange={this::this.changeHobby}
          >
            <option value="音楽">音楽</option>
            <option value="映画">映画</option>
            <option value="読書">読書</option>
          </select>
        </div>

        {/* 登録ボタン(「名前」と「年齢」が正しく入力された時のみ有効) */}
        <div className="inputContainer">
          <button
            onClick={this::this.submit}
            disabled={!(nameEntered && ageEntered && ageValid)}
          >
            登録
          </button>
        </div>
      </div>
    );
  }
});

export default InputForms;
