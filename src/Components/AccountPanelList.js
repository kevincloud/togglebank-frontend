import AccountPanel from "./AccountPanel";

function AccountPanelList({ accounts }) {
  return (
    <ul>
      {accounts && accounts.map(acct => {
        return (
          <li key={acct.accountNumber}>
            <AccountPanel acctName={acct.name} acctNumber={acct.accountNumber} balance={100} />
          </li>
        )
      })}  
    </ul>
  );
}

export default AccountPanelList;