'use strict';

var utils = require('../lib/utils');
var assert = require('should');

describe('utils', function() {

  describe('manifestType', function() {

      it('package.json', function() {
        utils.manifestType('https://github.com/stefanbuck/github-linker-core/blob/master/package.json').should.equal('npm');
      });

      it('bower.json', function() {
        utils.manifestType('https://github.com/stefanbuck/github-linker-core/blob/master/bower.json').should.equal('bower');
      });

      it('unknown.json', function() {
        (utils.manifestType('https://github.com/stefanbuck/github-linker-core/blob/master/unknown.json') === undefined).should.equal(true);
      });
  });

  describe('requireType', function() {

      it('file.js', function() {
        utils.requireType('https://github.com/stefanbuck/github-linker-core/blob/master/file.js').should.equal('js');
      });

      it('file.coffee', function() {
        utils.requireType('https://github.com/stefanbuck/github-linker-core/blob/master/file.coffee').should.equal('coffee');
      });

      it('file.txt', function() {
        (utils.requireType('https://github.com/stefanbuck/github-linker-core/blob/master/file.txt') === undefined).should.equal(true);
      });
  });

  describe('stripQuotes', function() {

      it('lodash', function() {
        utils.stripQuotes({html: function(){return 'lodash';}}).should.equal('lodash');
      });

      it('"lodash"', function() {
        utils.stripQuotes({html: function(){return '"lodash"';}}).should.equal('lodash');
      });

      it('\'lodash\'', function() {
        utils.stripQuotes({html: function(){return '\'lodash\'';}}).should.equal('lodash');
      });

      it('"lodash\'', function() {
        utils.stripQuotes({html: function(){return '"lodash\'';}}).should.equal('lodash');
      });

  });
});
