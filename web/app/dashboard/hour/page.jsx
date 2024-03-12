import Chart from '@/app/component/dashboard/chart/chart'
import React from 'react'
import data from '../../constants/data.json'

const HourSummary = () => {
  return (
    <div className="mt-5">
      <div className='font-bold flex justify-center items-center text-[24px]'>
        <h1>Staff Working Hour Summary</h1>
      </div>
      <Chart data={data} />
    </div>
  )
}

export default HourSummary
