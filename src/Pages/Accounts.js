import { useState, useEffect, useContext } from 'react';
import ls from 'local-storage';

import arrowIcon from '../img/arrow-icon.svg';
import cardIcon from '../img/card-icon.svg';
import pplIcon from '../img/ppl-icon.svg';

import AccountPanelList from '../Components/AccountPanelList';
import ActionList from '../Components/ActionList';
import ActionListItem from '../Components/ActionListItem';
import AuthContext from '../Components/Auth/AuthContext';
import { Account } from '../API';
import { LDContext } from '../Providers/LaunchDarkly/context';
import { checkCryptoPageLDFlag } from '../Utils/utils';

function Accounts() {
  const auth = useContext(AuthContext);
  const [accounts, setAccounts] = useState(null);
  const flags = useContext(LDContext);

  const actionItem1desc = checkCryptoPageLDFlag(flags) ? "" : "Coming Soon";

  useEffect(() => {
    async function getAccountsForUser() {
      const apiResponse = await Account.getByUserId(auth.id);
      const accountData = apiResponse.data;

      setAccounts(accountData);
      ls.set('LD_User_AccountData', JSON.stringify(accountData));
    }

    if (ls.get('LD_User_AccountData')) {
      const accountData = JSON.parse(ls.get('LD_User_AccountData'));
      setAccounts(accountData);
    } else {
      getAccountsForUser();
    }
  }, [auth])

  return (
    <>
      <div className="relative h-full">
        <div className="py-12">
          <div className="flex items max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-8/12 px-4">
              <AccountPanelList accounts={accounts}/>
            </div>
            <ActionList>
              <ActionListItem imgSrc={arrowIcon} text="Trade Crypto" desc={actionItem1desc} />
              <ActionListItem imgSrc={cardIcon} text="Gold Card 0% APR" />
              <ActionListItem imgSrc={pplIcon} text="Connect With Us" />
            </ActionList>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accounts;
