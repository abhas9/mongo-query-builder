import Parser from './parser';
import Operators from './operators';

class QueryBuilder {

    static build(str) {
        let ast = Parser.parse('a >= (b+c) && b == "test"');
        let parsed = QueryBuilder.parseTree(ast.body[0].expression);
        return parsed;
    }
    static parseTree(tree) {
        if (tree.type === 'Identifier') {
            return tree.name;
        } else if (tree.type === 'Literal') {
            return tree.value;
        } else if (tree.type === 'BinaryExpression') {
            let relationalOperators = ['>', '<', '>=', '<=', '!=', '=='];
            let arithmeticOperators = ['+', '-', '/', '%', '*'];
            let logicalOperator = ['&&', '||'];
            if (relationalOperators.indexOf(tree.operator) >= 0) {
                if (tree.operator !== '==') {
                    return {
                        [QueryBuilder.parseTree(tree.left)]: {
                            [Operators.jsToMongo[tree.operator]]: QueryBuilder.parseTree(tree.right)
                        }
                    };
                } else {
                    return {
                        [QueryBuilder.parseTree(tree.left)]: QueryBuilder.parseTree(tree.right)
                    };
                }
            } else {
                return {
                    [Operators.jsToMongo[tree.operator]]: [QueryBuilder.parseTree(tree.left), QueryBuilder.parseTree(
                        tree.right)]
                }
            }
        }
    }
}

export default QueryBuilder;
