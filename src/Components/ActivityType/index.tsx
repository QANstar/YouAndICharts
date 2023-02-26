import React, { useState, useEffect } from 'react'
import { getActivityTypeNum } from '../../service/charts'
import { message } from 'antd'
import style from './style.module.scss'
import { ITypeNum } from '../../types/type'
import { Column } from '@ant-design/charts'

const ActivityType = () => {
  const [data, setData] = useState<ITypeNum[]>([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = async () => {
    try {
      const { data, status } = await getActivityTypeNum()
      if (status === 200) {
        setData(data)
      }
    } catch (error: any) {
      message.error(error)
    }
  }

  const config: any = {
    data: data.map((x) => {
      return {
        type: x.type,
        sales: x.num
      }
    }),
    xField: 'type',
    yField: 'sales',
    color: '#b37feb',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6
      }
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    meta: {
      type: {
        alias: '类型'
      },
      sales: {
        alias: '数量'
      }
    }
  }

  return (
    <div className={style.type}>
      <Column {...config} />
    </div>
  )
}

export default ActivityType
