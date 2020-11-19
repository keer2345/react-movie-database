import React from 'react'

function Result({ result, openPupup }) {
  return (
    <div className="result" onClick={() => openPupup(result.imdbID)}>
      <img src={result.Poster} alt="" />
      <h3>{result.Title}</h3>
    </div>
  )
}

export default Result
