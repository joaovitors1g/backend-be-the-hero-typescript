import crypto from 'crypto';

export default function generateRandomId() {
  return crypto.randomBytes(4).toString('hex');
}
