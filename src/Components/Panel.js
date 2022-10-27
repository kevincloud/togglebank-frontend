// clickHandler - The function that should run when the panel is clicked (applies to whole div)
// stayActiveCondition - This is a boolean expression that will dictate when the panel stays highlighted
//     e.g. if clicking the panel opens a modal, you'll provide the conditions that must be met for the modal to be open
//     You can hardcode this as `false` or omit it if you don't want this behavior

function Panel({ children, clickHandler, stayActiveCondition}) {
  return (
    <div className={`flex flex-row justify-between w-full mb-4 px-8 py-8 rounded-lg bg-blue-default text-white-default text-xl cursor-default hover:bg-blue-dark hover:cursor-pointer ${stayActiveCondition ? "bg-blue-dark" : ""}`} onClick={clickHandler}>
      { children }
    </div>
  )
}

export default Panel;