import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import classNames from 'classnames'
import { Tooltip } from '@douyinfe/semi-ui'

import Styles from '../../styles/HeatGridChart.module.scss'

interface HeatGridStatProps {
  data?: Record<string, any>
}

export default function HeatGridChart(props: HeatGridStatProps) {
  const { data = {} } = props

  const [heatGridDayArr, setHeatGridDayArr] = useState<string[][]>([])
  const [heatGridMonthArr, setHeatGridMonthArr] = useState<string[]>([])
  const [heatGridStat, setHeatGridStat] = useState<Record<string, number>>({})

  useEffect(() => {
    const endOfCurrentWeek = dayjs().endOf('week').format('YYYY/MM/DD')

    let fnDay = endOfCurrentWeek
    const totalDayArr = []
    for (let x = 0; x < 12; x++) {
      const dayArr = []
      for (let y = 0; y < 7; y++) {
        dayArr.push(fnDay)
        fnDay = dayjs(fnDay).subtract(1, 'day').format('YYYY/MM/DD')
      }
      totalDayArr.push(dayArr)
    }
    totalDayArr.reverse()
    const curHeatGridDayArr = totalDayArr.map((week) => {
      return week.reverse()
    })
    setHeatGridDayArr(curHeatGridDayArr)

    const curHeatGridMonthArr = curHeatGridDayArr
      .map((week) => {
        return [...week].pop()
      })
      .map((date) => {
        return dayjs(date).format('MMM')
      })
      .reduce((acc: string[], cur) => {
        if (acc.includes(cur)) return [...acc, '']
        return [...acc, cur]
      }, [])
    setHeatGridMonthArr(curHeatGridMonthArr)
  }, [])

  // useEffect(() => {
  //   if (data) setHeatGridStat(data)
  // }, [data])

  return (
    <>
      <div className={Styles['heat-grid']} style={{ margin: '20px 0' }}>
        {heatGridDayArr.map((week, x) => {
          return (
            <div key={x} className={Styles.week}>
              {week.map((day, y) => {
                const today =
                  day === dayjs().format('YYYY/MM/DD') ? Styles.today : ''

                let curMemoCount = 0
                const daily_memo_count = heatGridStat
                if (Object.keys(daily_memo_count).includes(day)) {
                  curMemoCount = daily_memo_count[day]
                }

                const memoDepth =
                  curMemoCount > 0 && curMemoCount < 5
                    ? Styles['light-green']
                    : curMemoCount >= 5 && curMemoCount < 10
                    ? Styles.green
                    : curMemoCount >= 10
                    ? Styles['dark-green']
                    : ''

                return (
                  <Tooltip
                    key={y}
                    content={`${curMemoCount} memo on ${day}`}
                    style={{
                      borderRadius: '5px',
                      fontSize: '12px',
                    }}
                  >
                    <div className={classNames(Styles.day, today, memoDepth)} />
                  </Tooltip>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className={classNames(Styles['heat-grid'], Styles['month-box'])}>
        {heatGridMonthArr.map((month, z) => {
          return (
            <div key={z} className={Styles.month}>
              {month}
            </div>
          )
        })}
      </div>
    </>
  )
}
