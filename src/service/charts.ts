import { IActivitiesNum, IDateNum, ITagNum, ITypeNum } from '../types/type'
import request from './request'

// 获取用户数量
export const getUserNum = () => request.get<number>('/api/Charts/GetUserNum')

// 获取活动数量数据
export const getActivitiesNum = () =>
  request.get<IActivitiesNum>('/api/Charts/GetActivitiesNum')

// 获取标签数量数据
export const getTagNum = () => request.get<ITagNum[]>('/api/Charts/GetTagNum')

// 获取活动类型数据
export const getActivityTypeNum = () =>
  request.get<ITypeNum[]>('/api/Charts/GetActivityTypeNum')

// 获取活动收藏类型数据
export const getActivityStarNum = () =>
  request.get<ITypeNum[]>('/api/Charts/GetActivityStarNum')

// 活动日期
export const getActivityDateNum = () =>
  request.get<IDateNum[]>('/api/Charts/GetActivityDateNum')
