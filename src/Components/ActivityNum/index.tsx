import React, { useState, useEffect } from 'react'
import { getActivitiesNum } from '../../service/charts'
import { message } from 'antd'
import style from './style.module.scss'
import { IActivitiesNum } from '../../types/type'
import { Bullet } from '@ant-design/charts'

const ActivityNum = () => {
  const [data, setData] = useState<IActivitiesNum>({
    activityNum: 0,
    activityRunningNum: 0
  })

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = async () => {
    try {
      const { data, status } = await getActivitiesNum()
      if (status === 200) {
        setData(data)
      }
    } catch (error: any) {
      message.error(error)
    }
  }

  const config: any = {
    data: [
      {
        title: '运行中的活动',
        ranges: [data.activityNum],
        measures: [data.activityRunningNum],
        target: data.activityNum
      }
    ],
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#5B8FF9',
      target: '#3D76DD'
    },
    xAxis: {
      line: null
    },
    yAxis: false
  }

  return (
    <div className={style.activity}>
      <div className={style.num}>
        <div className={style.runningNum}>{data.activityRunningNum}</div>/
        <div className={style.allNum}>{data.activityNum}</div>
      </div>
      <div className={style.bullet}>
        <Bullet {...config} />
      </div>
    </div>
  )
}

export default ActivityNum
