const ALMOST_FLOAT_REGEXP = /[-\d.]/;

export default function (value: string): boolean {
    return Boolean(parseFloat(value)) && ALMOST_FLOAT_REGEXP.test(value);
}
