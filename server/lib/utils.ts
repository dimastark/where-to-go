import _ from 'lodash';

const ALMOST_FLOAT_REGEXP = /^-?[0-9]*(.[0-9]+)?$/;

export function isFloatString(value: string): boolean {
    return Boolean(parseFloat(value)) && ALMOST_FLOAT_REGEXP.test(value);
}

export function camelCaseRecursive(object: any): any {
    if (_.isArray(object)) {
        return object.map((item) => camelCaseRecursive(item));
    }

    if (_.isPlainObject(object)) {
        const camelCaseObject = {};

        _.forEach(object, (value, key) => {
            camelCaseObject[_.camelCase(key)] = camelCaseRecursive(value);
        });

        return camelCaseObject;
    }

    return object;
}
