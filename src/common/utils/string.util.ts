export class StringUtils {
  static isIphone(useAgent: string): boolean {
    return useAgent.includes('iPhone');
  }
  static compactAdd(add: string): string {
    const first = add?.substring(0, 4);
    const end = add?.substring(add?.length - 4);
    if (first && end) {
      return `${first || ''}..${end || ''}`;
    }
    return 'Connect Wallet';
  }
}
