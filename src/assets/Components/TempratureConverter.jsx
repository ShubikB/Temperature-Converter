import React, { useState } from "react"

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("")
  const [fahrenheit, setFahrenheit] = useState("")
  const [kelvin, setKelvin] = useState("")

  const handleCelsiusChange = (e) => {
    const value = e.target.value
    setCelsius(value)
    setFahrenheit(value !== "" ? (value * 9) / 5 + 32 : "")
    setKelvin(value !== "" && parseFloat(value) + 273.15)
  }

  const handleFahrenheitChange = (e) => {
    const value = e.target.value
    setFahrenheit(value)
    setCelsius(value !== "" ? ((value - 32) * 5) / 9 : "")
    setKelvin(value !== "" ? ((value - 32) * 5) / 9 + 273.15 : "")
  }

  const handleKelvinChange = (e) => {
    const { value } = e.target
    setKelvin(value)
    setCelsius(value !== "" ? value - 273.15 : "")
    setFahrenheit(value !== "" ? ((value - 273.15) * 9) / 5 + 32 : "")
  }

  const resetFields = () => {
    setCelsius("")
    setFahrenheit("")
    setKelvin("")
  }

  return (
    <div className='flex justify-center items-center container w-full mx-auto mt-10'>
      <div className='w-full bg-white shadow-lg rounded-lg p-6'>
        <h2 className='text-2xl font-bold text-center mb-6'>Temperature Converter</h2>
        <div className='space-y-4'>
          <div>
            <label htmlFor='celsius' className='block text-sm font-medium mb-1'>
              Celsius (°C)
            </label>
            <input
              type='number'
              id='celsius'
              className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              value={celsius}
              onChange={handleCelsiusChange}
              placeholder='Enter Celsius'
            />
          </div>
          <div>
            <label htmlFor='fahrenheit' className='block text-sm font-medium mb-1'>
              Fahrenheit (°F)
            </label>
            <input
              type='number'
              id='fahrenheit'
              className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              placeholder='Enter Fahrenheit'
            />
          </div>
          <div>
            <label htmlFor='kelvin' className='block text-sm font-medium mb-1'>
              Kelvin (°K)
            </label>
            <input
              type='number'
              id='kelvin'
              className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              value={kelvin}
              onChange={handleKelvinChange}
              placeholder='Enter Kelvin'
            />
          </div>
          <button
            className='w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition-colors'
            onClick={resetFields}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default TemperatureConverter
