import { useRef, useState } from "react"

export default function LengthConverter() {
  // conversation units
  // kilometer
  // Meter
  // Centimeter
  // Miles
  //Feet inch

  const inputValue = useRef("")
  const [initialLengthUnit, setInitialLengthUnit] = useState("")
  const [outputLengthUnit, setoutputLengthUnit] = useState("")
  const [outputValue, setOutputValue] = useState("")

  const handleUnitChange = (e) => {
    console.log("handleUnitChange was called")
    let initialLengthUnit = e.target.value
    console.log(initialLengthUnit)
    console.log(`the input alue is ${inputValue.current.value}`)
  }

  const calculator = () => {
    console.log("calculationswill be performed ")
  }

  return (
    <div className='lengthConverterWrapper'>
      <label htmlFor='LengthMeasure' className='text-white m-3'>
        Enter length
      </label>
      <input
        ref={inputValue}
        type='number'
        name='lengthMeasure'
        id='lengthMeasure'
        className='p-2 rounded-lg'
      />

      <label htmlFor='lengthUnit' className='text-white m-3'>
        Unit
      </label>
      <select
        name='units'
        id='inputUnitLength'
        defaultValue='default'
        onChange={handleUnitChange}
        className=' rounded-lg'
      >
        <option value='km'>Kilometer (km)</option>
        <option value='m'>Meter (m)</option>
        <option value='cm'>Centimeter (cm)</option>
        <option value='mi'>Miles (mi)</option>
        <option value='ft'>Feet (ft)</option>
        <option value='in'>Inches (in)</option>
      </select>

      <div className='outputvalue w-full  bg-red-300 p-2 rounded-lg'>{calculator()}</div>
    </div>
  )
}
