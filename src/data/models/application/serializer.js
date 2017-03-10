import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  normalizeResponse() {
    console.log('serializer');
    return this._super(...arguments);
  }
});
