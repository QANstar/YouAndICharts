import React, { useState, useEffect } from 'react'
import { getTagNum } from '../../service/charts'
import { message } from 'antd'
import style from './style.module.scss'
import { ITagNum } from '../../types/type'
import { Pie } from '@ant-design/charts'

const TagNum = () => {
  const [data, setData] = useState<ITagNum[]>([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = async () => {
    try {
      const { data, status } = await getTagNum()
      if (status === 200) {
        setData(data)
      }
    } catch (error: any) {
      message.error(error)
    }
  }

  const config: any = {
    appendPadding: 10,
    data: data.map((x) => {
      return {
        type: x.name,
        value: x.num
      }
    }),
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center'
      }
    },
    interactions: [
      {
        type: 'element-active'
      }
    ]
  }

  return (
    <div className={style.tag}>
      <Pie {...config} />
    </div>
  )
}

export default TagNum
