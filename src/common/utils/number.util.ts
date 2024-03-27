import { isNaN, isUndefined, toNumber } from 'lodash';

export class NumberUtils {
  /**
   * @param {number} number
   * @returns a string
   */
  static formatMoney(number: number): string {
    return Math.round(number).toLocaleString('en-GB');
  }

  static convertQueryParam = (param: string | number | undefined | null): number | null => {
    const numParam = Number(param);
    return typeof numParam === 'number' && !isNaN(numParam) ? numParam : null;
  };

  /**
   * @param {unknown} number
   * @returns returns a number or 0.
   */
  static parseToNumber(number: unknown): number {
    if (isUndefined(number)) {
      return 0;
    }
    const isNumber = toNumber(number);
    if (isNaN(isNumber)) {
      return 0;
    }
    return isNumber;
  }
  static matchIsNumeric(text: string) {
    const isNumber = typeof text === 'number';
    return (isNumber || text !== '') && !isNaN(Number(text));
  }

  private static suffixes = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 }
  ];

  /**
   * The function `formatSuffix` formats a number with a suffix based on its magnitude.
   * @param {number} num - The `num` parameter is a number that you want to format with a suffix.
   * @param [precision=1] - The `precision` parameter is an optional parameter that specifies the number
   * of decimal places to include in the formatted number. If no value is provided for `precision`, it
   * defaults to 1.
   * @returns The function `formatSuffix` returns a string or a number.
   */
  static formatSuffix(num: number, precision = 1): string | number {
    const found = this.suffixes.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted = (num / found.threshold).toFixed(precision);
      return parseFloat(formatted) === parseInt(formatted)
        ? parseInt(formatted) + found.suffix
        : formatted + found.suffix;
    }

    return num;
  }
}
