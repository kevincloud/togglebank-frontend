import { useContext } from "react";
import TransactionTable from "./TransactionTable";
import AccountContext from "./Account/AccountContext";

function AccountDetails() {
  const accountCtx = useContext(AccountContext);
  return (
    <>
      <div className="bg-white-default p-12 rounded-md h-4/5 w-4/5 text-black-default">
        <h2 className="text-2xl font-semibold w-full border-b-gray-default border-b-2 py-4">Account Details</h2>
        <div className="flex justify-between text-lg font-medium w-full border-b-gray-default border-b-2 py-4">
          <p>{ accountCtx.account.name }</p>
          <p>${ accountCtx.balance }</p>
        </div>
        <TransactionTable/>
      </div>
    </>
  )
}

export default AccountDetails;