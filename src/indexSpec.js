/**
 * Created by karl on 19/7/16.
 */
'use strict';

const chai = require('chai');
const expect = chai.expect;
var index = require('./index');

describe('app', () => {
    it('should fail', () => {
        expect(index.ret).to.equal('app');
    });
});
