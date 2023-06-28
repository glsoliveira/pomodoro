import { useEffect, useState } from 'react'

function avisarAPI() {
  console.log('Saved list')
}

export function UseEffect() {
  const [list, setList] = useState<string[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    avisarAPI()
  }, [list])

  useEffect(() => {
    fetch('https://api.github.com/users/diego3g/repos')
      .then((response) => response.json())
      .then((data) => {
        setList(data.map((item: any) => item.full_name))
      })
  }, [])

  const filteredList = list.filter((item) => item.includes(filter))

  function addToList() {
    setList((state) => [...state, 'New item'])
  }
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <ul>
        {filteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={addToList}>Add to list</button>
    </div>
  )
}
