import React from 'react'
import Result from './Result'

function Results({ results, openPupup }) {
  return (
    <section className="results">
      {results.map((result) => (
        <Result key={result.imdbID} result={result} openPupup={openPupup} />
      ))}
    </section>
  )
}

export default Results
