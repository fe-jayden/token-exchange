'use client';

import * as CryptoJS from 'crypto-js';

const secret_key = process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY || 'secret_key';

export class HashUtils {
  static encrypt(text: string): string {
    const ciphered = CryptoJS.AES.encrypt(text, secret_key).toString();
    return ciphered;
  }

  static decrypt(ciphered: string): string {
    const bytes = CryptoJS.AES.decrypt(ciphered, secret_key);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8 || '');
    return plaintext;
  }
}
