import React, { useState, useEffect } from 'react'
import { getUserNum } from '../../service/charts'
import { message } from 'antd'
import style from './style.module.scss'

const UserNum = () => {
  const [data, setData] = useState<number>(0)

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = async () => {
    try {
      const { data, status } = await getUserNum()
      if (status === 200) {
        setData(data)
      }
    } catch (error: any) {
      message.error(error)
    }
  }

  return <div className={style.user}>{data}</div>
}

export default UserNum
