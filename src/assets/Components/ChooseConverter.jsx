import TemperatureConverter from "./TempratureConverter"
import LengthConverter from "./LengthConverter"
import MassConverter from "./MassConverter"

import { useState } from "react"

export default function ChooseConverter() {
  const [isLandingPage, setIsLandingPage] = useState(true)
  const [selectedConverter, setSelectedConverter] = useState("")

  return (
    <div className='chooseConverterContainer w-screen h-screen bg-slate-800 flex pt-[200px] items-center flex-col'>
      {isLandingPage ? (
        <label
          htmlFor='welcomeMessage'
          className='block mb-2 text-base font-medium text-gray-900 dark:text-white '
        >
          Welcome to <br /> <span className='text-orange-900 text-5xl'>Easy Converter</span>
        </label>
      ) : (
        <label
          htmlFor='large'
          className='block mb-2 text-base font-medium text-gray-900 dark:text-white '
        >
          {selectedConverter === "length"
            ? "Length Convertor"
            : selectedConverter === "temperature"
            ? "Temperature Convertor"
            : "Weight Convertor"}
        </label>
      )}

      <select
        name='converterType'
        id='converterType'
        defaultValue='default'
        onChange={(e) => {
          setSelectedConverter(e.target.value)
          console.log(e.target.value)

          setIsLandingPage(false)
        }}
        className='block w-96 px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        {/* <option selected>Choose a converter</option> */}
        <option disabled value='default'>
          Select a convertor
        </option>
        <option value='length'>Length Converter</option>
        <option value='temperature'>Temperatature Converter</option>
        <option value='mass'>Mass Converter</option>
      </select>

      <div className=' w-full flex justify-center items-center'>
        {selectedConverter === "temperature" && <TemperatureConverter />}
        {selectedConverter === "length" && <LengthConverter />}
        {selectedConverter === "mass" && <MassConverter />}
      </div>
    </div>
  )
}
