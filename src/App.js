import { useState } from 'react'
import Time from './components/Time'

function App() {
  const [selectedTz, setSelectedTz] = useState(null)
  const [color, setColor] = useState(null)

  return <>
    <select onChange={(e) => setSelectedTz(e.target.value)}>
      <option value="">Select a time zone</option>
      <option value="Europe/Budapest">Budapest</option>
      <option value="America/New_York">New York</option>
      <option value="Asia/Tokyo">Tokyo</option>
    </select>
    <br />
    <select onChange={(e) => setColor(e.target.value)}>
      <option value="">Select an optional color</option>
      <option value="lightgreen">Green</option>
      <option value="lightpink">Red</option>
      <option value="lightblue">Blue</option>
    </select>
    <br />
    {selectedTz && <Time color={color} timeZone={selectedTz} />}
  </>
}

export default App
