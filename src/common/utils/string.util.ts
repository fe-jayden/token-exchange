export class StringUtils {
  static isIphone(useAgent: string): boolean {
    return useAgent.includes('iPhone');
  }
}
