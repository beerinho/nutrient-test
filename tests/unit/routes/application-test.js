import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupNutrient } from '../../helpers';

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  test('it exists', async function (assert) {
    await setupNutrient(this);
    let route = this.owner.lookup('route:application');
    assert.ok(route);
  });
});
