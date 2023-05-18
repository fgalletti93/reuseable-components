import { useState } from "react"
import { Dropdown } from "../components/Dropdown"

export const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option)
  }

  const options = [
    {label: 'red', value: 'red'},
    {label: 'yellow', value: 'yellow'},
    {label: 'orange', value: 'orange'},
    {label: 'purple', value: 'purple'},
  ]
  return(
    <Dropdown options={options} value={selection} onChange={handleSelect}/>
  )
}