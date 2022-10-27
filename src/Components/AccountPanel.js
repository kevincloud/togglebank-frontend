import linkIcon from '../img/link-icon.svg';
import { Transaction } from "../API/index";
import React, { useEffect, useState } from "react";
import AccountContext from "./Account/AccountContext";
import OverlayContext from "./Overlay/OverlayContext";
import Panel from './Panel';

// acctName - Name of the account, string, e.g. "Checking" "Savings"
// acctNumber - Account number, could be string but probably integer in db
function AccountPanel({acctName, acctNumber}) {
  let accountCtx = React.useContext(AccountContext);
  let overlayCtx = React.useContext(OverlayContext);
  let [acctBalance, setAcctBalance] = useState("0.00");
  let [hasFetchedBalance, setHasFetchedBalance] = useState(false);

  useEffect(() => {
    async function fetchBalance() {
      try {
        if (!hasFetchedBalance) {
          const apiResponse = await Transaction.getAccountBalance(acctNumber);
          const apiBalance = apiResponse.data[0].accountBalance;

          setAcctBalance(apiBalance);
          setHasFetchedBalance(true);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchBalance();
  }, [acctBalance, hasFetchedBalance, acctNumber]);

  const handleClick = async () => {
    // Only make API request if the account changes from what's stored in context
    if (acctNumber !== accountCtx.account.number) {
      const transactions = await Transaction.getAllForAccount(acctNumber);

      accountCtx.updateAccount({
        name: acctName,
        number: acctNumber
      });
      try {
        accountCtx.updateTransactions(transactions.data);
        accountCtx.updateBalance(acctBalance);
      } catch (err) {
        console.error(err); // Handle this better in the future
      }
    }
    overlayCtx.setDrawerComponent('account');
    overlayCtx.toggleDrawerOpen();
  }

  return (
    <Panel
      clickHandler={() => handleClick()}
      // stayActiveCondition={accountCtx.account.number === acctNumber && accountCtx.drawerOpen}
      stayActiveCondition={false}
    >
      <p>{acctName} ({acctNumber})</p>
      <div className="flex flex-row justify-between">
        <p className="inline-block mr-6">${acctBalance}</p>
        <img src={linkIcon} className="inline-block" alt=""/>
      </div>
    </Panel>
  );
}

export default AccountPanel;
