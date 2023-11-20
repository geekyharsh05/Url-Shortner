import * as crypto from 'crypto';

export function generateRandomString() {
  return crypto.randomBytes(4).toString('hex');
}
