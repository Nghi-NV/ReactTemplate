import LocalizedStrings from 'react-localization';

let langs = new LocalizedStrings({
  en: {
    login: "Login",
    register: 'Register'
  },
  vn: {
    login: "Đăng nhập",
    register: "Đăng kí"
  }
});

export default langs;
