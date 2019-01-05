import { camelCase, isArray, isPlainObject } from 'lodash';

const ALMOST_FLOAT_REGEXP = /^-?[0-9]*(.[0-9]+)?$/;

export function isFloatString(value: string): boolean {
    return Boolean(parseFloat(value)) && ALMOST_FLOAT_REGEXP.test(value);
}

export function camelCaseRecursive(object: any): any {
    if (isArray(object)) {
        return object.map(item => camelCaseRecursive(item));
    }

    if (isPlainObject(object)) {
        const camelCaseObject = {};

        for (const key of Object.keys(object)) {
            camelCaseObject[camelCase(key)] = camelCaseRecursive(object[key]);
        }

        return camelCaseObject;
    }

    return object;
}
