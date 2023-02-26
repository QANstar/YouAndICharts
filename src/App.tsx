import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import ActivityDate from './Components/ActivityDate'
import ActivityNum from './Components/ActivityNum'
import ActivityStarType from './Components/ActivityStarType'
import ActivityType from './Components/ActivityType'
import TagNum from './Components/TagNum'
import UserNum from './Components/UserNum'
function App () {
  return (
    <div className="App">
      {/* <div className="title">You & I 统计图表</div> */}
      <div className="charts">
        <div className="left">
          <Card bordered={false}>
            <Meta
              title="每个月开始的活动数量"
              description="这里展示在每个月里开始的活动的数量"
            />
            <div className="date">
              <ActivityDate />
            </div>
          </Card>
          <div className="typeChartsMain">
            <Card className="type" bordered={false}>
              <Meta title="活动类型" description="每个活动类型数量的柱状图" />
              <ActivityType />
            </Card>
            <Card className="type" bordered={false}>
              <Meta
                title="活动收藏类型"
                description="每个活动类型的收藏数量的柱状图"
              />
              <ActivityStarType />
            </Card>
          </div>
        </div>
        <div className="right">
          <Card bordered={false}>
            <Meta title="总用户数" />
            <div className="user">
              <UserNum />
            </div>
          </Card>
          <Card className="leftChart" bordered={false}>
            <Meta title="活动数" description="正在进行的活动/总活动数" />
            <div>
              <ActivityNum />
            </div>
          </Card>
          <Card className="leftChart" bordered={false}>
            <Meta title="标签数" description="用户标签比例" />
            <div>
              <TagNum />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
