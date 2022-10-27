import Nav from "../Components/Nav/Nav";

function Page({ children }) {
  return (
    <div className="relative overflow-hidden">
      <Nav />
      { children }
    </div>
  )
}

export default Page;