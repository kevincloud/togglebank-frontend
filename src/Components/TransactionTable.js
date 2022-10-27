import { useContext } from "react";
import { format } from "date-fns";
import AccountContext from "./Account/AccountContext";

function TransactionTable() {
  const accountCtx = useContext(AccountContext);
  const headings = ["Date", "Description", "Amount"];
  const transactions = accountCtx.transactions;

  // Todo: handle length 0 arrays (no transaction data for account)
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-gray-default border-b-2">
          { headings.map(heading => <th key={heading} className="text-left py-2">{ heading }</th>) }
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-default">
        { transactions.map(transaction => (
          <tr>
            <td className="py-2">{ format(new Date(transaction.createdAt), "MMM d, yyyy") }</td>
            <td className="py-2">{ transaction.name }</td>
            <td className="py-2">{ transaction.transactionAmount }</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionTable;