import { useRef, useState } from "react"

// conversation units
// kilometer km
// Meter m
// Centimeter cm
// Miles m
//Feet ft
// inch in

const factor = () => {}
export default function LengthConverter() {
  const inputValue = useRef("")
  const [inputLengthUnit, setInputLengthUnit] = useState("")
  const [outputLengthUnit, setOutputLengthUnit] = useState("")
  const [outputValue, setOutputValue] = useState("")

  const factors = {}

  const handleInputUnitChange = (e) => {
    setInputLengthUnit(e.target.value)
    console.log(`the input unit is ${e.target.value}`)
    let outputValue = inputValue + 23.3434
  }
  // console.log(inputValue.current.value)
  console.log(inputLengthUnit)

  const handleOutputUnitChange = (e) => {
    setOutputLengthUnit(e.target.value)
    console.log(`the output unit is ${e.target.value}`)
  }
  // console.log(outputValue)

  const handleConversion = (e) => {
    let value = e.target.value
    console.log(value + "value ")
    setOutputValue(23)
    return outputValue
  }

  return (
    <div className='lengthConverterWrapper max-w-screen-2xl bg-white rounded-lg p-3 m-5'>
      <label htmlFor='LengthMeasure' className='m-3'>
        Enter length
      </label>
      <input
        ref={inputValue}
        type='number'
        name='inputValue'
        id='inputValue'
        className='w-full p-2 rounded-lg border border-gray-300'
      />
      <label htmlFor='lengthUnit' className=' m-3'>
        Unit
      </label>
      <select
        name='units'
        id='inputLengthUnit'
        defaultValue='default'
        // value={inputLengthUnit}
        onChange={handleInputUnitChange}
        className=' m-2 rounded-lg'
      >
        <option disabled value='default'>
          select unit
        </option>
        <option value='km'>Kilometer (km)</option>
        <option value='m'>Meter (m)</option>
        <option value='cm'>Centimeter (cm)</option>
        <option value='mi'>Miles (mi)</option>
        <option value='ft'>Feet (ft)</option>
        <option value='in'>Inches (in)</option>
      </select>

      <div>
        <label htmlFor='outputLengthUnit' className=' m-3'>
          Convert To
        </label>
        <select
          name='units'
          id='outputLengthUnit'
          defaultValue='default'
          onChange={handleOutputUnitChange}
          className=' rounded-lg'
        >
          <option disabled value='default'>
            select unit
          </option>
          <option value='km'>Kilometer (km)</option>
          <option value='m'>Meter (m)</option>
          <option value='cm'>Centimeter (cm)</option>
          <option value='mi'>Miles (mi)</option>
          <option value='ft'>Feet (ft)</option>
          <option value='in'>Inches (in)</option>
        </select>
      </div>
      <button
        type='button'
        className='bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
        onClick={handleConversion}
      >
        Convert
      </button>

      <label htmlFor='outputLengthMeasure' className='text-white m-3'>
        Converted length
      </label>
      <input
        value={outputValue}
        type='text'
        name='outputValue'
        id='outputValue'
        disabled
        className='w-full p-2 rounded-lg border border-gray-300'
      />
    </div>
  )
}
