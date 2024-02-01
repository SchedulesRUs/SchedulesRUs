import Chart from '@/app/component/dashboard/chart/chart'
import React from 'react'
import data from '../../constants/data.json'

const HourSummary = () => {
  return (
    <div className="mt-5">
      <Chart data={data} />
    </div>
  )
}

export default HourSummary
