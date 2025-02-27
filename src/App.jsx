import data from './data'
import { useState } from 'react'
import { nanoid } from 'nanoid'
const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const amount = parseInt(count)
    setText(data.slice(0, amount))
  }
  return (
    <section className="section-center">
      <h2 style={{ textAlign: 'center' }}>Generate Free Paragraphs</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input
          className="form-input"
          type="number"
          name="amount"
          id="amount"
          min={1}
          step={1}
          max={8}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((para, index) => {
          return <p key={nanoid()}>{para}</p>
        })}
      </article>
    </section>
  )
}
export default App
