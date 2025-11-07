import { useState } from "react"

export default function Nav({ languages }) {

  const [id, setId] = useState(languages[0].id);

  return (
    <div>
      <div className="d-flex py-5">
        <ul className="nav nav-pills gap-3">
          {languages.map((language) => (
            <li className="nav-item" key={language.id}>
              <button href="#" className="btn btn-primary" onClick={() => setId(language.id)}>{language.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>{languages.find(item => item.id === id).title}</h3>
          </div>
          <div className="card-text">
            <p>{languages.find(item => item.id === id).description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}