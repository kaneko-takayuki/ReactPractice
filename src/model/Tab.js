import * as I from 'immutable';

const TabRecord = I.Record({
  index: null,
  name: null,
});

class Tab extends TabRecord {
  constructor(index, name) {
    super({
      index,
      name,
    });
  }
}

export default Tab;
