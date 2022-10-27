import { useState } from 'react';
import AccountContext from './AccountContext';

function AccountProvider({ children }) {
  let [account, setAccount] = useState({});
  let [transactions, setTransactions] = useState([]);
  let [balance, setBalance] = useState(0);

  let updateAccount = (acct) => {
    setAccount(acct);
  }

  let updateTransactions = (txns) => {
    setTransactions(txns);
  }

  let updateBalance = (amount) => {
    if (amount) {
      let formattedAmount = parseFloat(amount).toFixed(2);
      setBalance(formattedAmount.toString());
    } else {
      setBalance("0.00");
    }
  }

  let value = { account, transactions, balance, updateAccount, updateTransactions, updateBalance };

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
}

export default AccountProvider;
