import { describe, it } from 'mocha';
import { expect } from 'chai';
import QueryBuilder from '../src/QueryBuilder';

describe('QueryBuilder', () => {
  it('Can build query', () => {
    expect(QueryBuilder.build('a+b')).to.be.equal('a+b');
  });

});
