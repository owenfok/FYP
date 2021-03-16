const mocha = require('mocha');
const assert = require('assert');
const {util} = require('@google-cloud/common');
const Compute = require('@google-cloud/compute');


describe('Firewall', () => {
  let firewall = Compute.Firewall();

  const Compute = {
    projectId: 'project-id',
    createFirewall: util.noop,
  };
  const firewallName = 'web';
  const DEFAULT_FIREWALL_NETWORK = 'global/networks/default';


  describe(' firewall', () => {
    it('should localize compute instance', () => {
      assert.strictEqual(firewall.compute, Compute);
    });

    it('should localize the firewall name', () => {
      assert.strictEqual(firewall.name, firewallName);
    });

  });
});