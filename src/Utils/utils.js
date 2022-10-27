import ls from 'local-storage';


export function handleAlert({ response, alert, type, message, callback, timeout }){
  if(response instanceof Error) {
    return alert.error(response.message);
  }

  alert.show(message, {
    type,
    timeout: timeout ? timeout : 3000
  });

  setTimeout(() => {
     if(callback) {
       callback()
     }
   }, 3000);
}

export function getLDUser() {
  return ls('LD_User') ? { key: ls('LD_User') } : { anonymous: true };
};

export function displayCentsAsDollars(cents) {
  return (parseInt(cents) / 100).toFixed(2);
}

export function checkCryptoPageLDFlag(flags){
  return flags.flags.show_cryptocurrency_page;
}

export function clearLocalStorage() {
  ls.remove('LD_User');
  ls.remove('LD_User_ID');
  ls.remove('LD_User_AccountData');
}

export function checkRegisterPageLDFlag(flags){
  return flags.flags.show_register_page;
}
