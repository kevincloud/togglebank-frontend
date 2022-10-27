function ActionList({ children }) {
  return (
      <div className="w-4/12 px-4">
        <div className="flex flex-col w-full rounded-lg bg-blue-dark text-white-default text-xl">
          <ul className="divide-y ">
            { children }
          </ul>
        </div>
      </div>
    )
}

export default ActionList;