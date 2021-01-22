import CryptoJS from 'crypto-js';
import localStorage from 'localStorage';
import SecureStorage from 'secure-web-storage';

const secureStorage = new SecureStorage(localStorage, {
  hash: function hash(key) {
    const setKey = CryptoJS.SHA256(key, process.env.REACT_APP_SECRET);
    return setKey.toString();
  },
  encrypt: function encrypt(data) {
    let setData = CryptoJS.AES.encrypt(data, process.env.REACT_APP_SECRET);
    setData = setData.toString();
    return setData;
  },
  decrypt: function decrypt(data) {
    let setData = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET);
    setData = setData.toString(CryptoJS.enc.Utf8);
    return setData;
  },
});

export default secureStorage;
