import Cookies from 'js-cookie';
export default {
  isActive(id) {
    return Cookies.get('gdpr-' + id) === '1';
  },

  setActive(id, value) {
    Cookies.set('gdpr-' + id, value ? '1' : '0', { expires: 7 });
  }
};
