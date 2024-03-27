export class ArrayUtils {
  static reverseArray<T>(array: T[]): T[] {
    return [...array].reverse();
  }
}
