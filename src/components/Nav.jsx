export default function Nav({languages}){
  
  return(
    <div className="d-flex py-5">
      <ul className="nav nav-pills gap-2">
    {languages.map((language) => (
        <li className="nav-item" key={language.id}>
          <button href="#" className="btn btn-primary">{language.title}</button>
        </li>
    ))}
    </ul>
    </div>
  )
}