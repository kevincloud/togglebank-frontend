function ActionListItem({ imgSrc, text, desc }) {
  return (
    <li className="px-12 py-8">
      <img src={imgSrc} alt="" className="inline-block mr-6" />
      <p className="inline-block">{text}</p>
      { desc ? <p className="inline-block text-xs ml-1 italic">({desc})</p> : null }
    </li>
  )
}

export default ActionListItem;
