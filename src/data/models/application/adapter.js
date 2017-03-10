import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: '/',
  namespace: 'api',

  findAll() {
    console.log('adapter:application findAll');
    return this._super(...arguments);
  }
});
