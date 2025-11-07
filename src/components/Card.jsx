export default function Card({languages}){
    
  return(
    <>
    {languages.map((language) => (
      <div className="card" key={language.id}>
        <div className="card-body">
          <div className="card-title">
            <h2>{language.title}</h2>
          </div>
          <div className="card-text">
            <p>{language.description}</p>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}