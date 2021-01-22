import CryptoJS from 'crypto-js';

export function encrypt(params) {
  return CryptoJS.AES.encrypt(
    JSON.stringify(params),
    process.env.REACT_APP_SECRET,
  );
}

export function decrypt(params) {
  if (!params) {
    return null;
  }

  const bytes = CryptoJS.AES.decrypt(
    params.toString(),
    process.env.REACT_APP_SECRET,
  );
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
