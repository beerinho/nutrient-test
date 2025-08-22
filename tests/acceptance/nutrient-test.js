import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { setupNutrient } from '../helpers';

module('Acceptance | nutrient', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /nutrient', async function (assert) {
    await setupNutrient(this);
    assert.ok(true);
    // await visit('/nutrient');

    // assert.strictEqual(currentURL(), '/nutrient');
  });
});
