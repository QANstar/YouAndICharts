import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/plots'
import { getActivityDateNum } from '../../service/charts'
import { message } from 'antd'
import { IDateNum } from '../../types/type'

const ActivityDate = () => {
  const [data, setData] = useState<IDateNum[]>([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = async () => {
    try {
      const { data, status } = await getActivityDateNum()
      if (status === 200) {
        setData(data)
      }
    } catch (error: any) {
      message.error(error)
    }
  }

  const config: any = {
    data,
    padding: 'auto',
    xField: 'date',
    yField: 'num',
    smooth: true
  }

  return <Line {...config} />
}

export default ActivityDate
