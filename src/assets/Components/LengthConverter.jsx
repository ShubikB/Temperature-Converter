import { useRef, useState } from "react"

// conversation units
// kilometer km
// Meter m
// Centimeter cm
// Miles m
//Feet ft
// inch in

export default function LengthConverter() {
  const [inputValue, setInputvalue] = useState("")
  const [inputLengthUnit, setInputLengthUnit] = useState("ghhjgcgfjk")
  const [outputLengthUnit, setOutputLengthUnit] = useState("")
  const [outputValue, setOutputValue] = useState("")

  const handleInputUnitChange = (e) => {
    setInputLengthUnit(e.target.value)
  }
  console.log(`the input unit is ${inputLengthUnit}`)

  const handleOutputUnitChange = (e) => {
    setOutputLengthUnit(e.target.value)
  }
  console.log(`the output unit is ${outputLengthUnit}`)

  const handleConversion = () => {
    console.log(inputLengthUnit, outputLengthUnit, inputValue)
    if (inputLengthUnit === "km" && outputLengthUnit === "m") {
      console.log(` the output val is ${outputValue}`)

      setOutputValue(inputValue * 100)

      //
      // setOutputValue (inputValue * factor)
    }
  }
  console.log(`the output fn is after  val is ${outputValue}`)

  return (
    <div className='lengthConverterWrapper max-w-screen-2xl bg-white rounded-lg p-3 m-5'>
      <label htmlFor='LengthMeasure' className='m-3'>
        Enter length
      </label>
      <input
        type='number'
        name='inputValue'
        id='inputValue'
        className='w-full p-2 rounded-lg border border-gray-300'
        onChange={(e) => {
          setInputvalue(e.target.value)
        }}
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
