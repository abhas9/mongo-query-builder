import { describe, it } from 'mocha';
import { expect } from 'chai';
import QueryBuilder from '../src/QueryBuilder';

describe('QueryBuilder', () => {
    it('Can build query', () => {
        expect(QueryBuilder.build('a >= (b+c) && b == "test"')).to.deep.equal({
            '$and': [{
                'a': {
                    '$gte': {
                        '$sum': ['b', 'c']
                    }
                }
            }, {
                'b': "test"
            }]
        });
    });

});
