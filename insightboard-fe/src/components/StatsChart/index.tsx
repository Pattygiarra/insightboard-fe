import { LineChart, type LineSeries } from "@mui/x-charts"
import { useGetStatsQuery } from "../../api/logger"
import { useEffect, useState } from "react"

const StatsChart = () => {
    const { data } = useGetStatsQuery({}, {
        pollingInterval: 5000,
    })
    const [localStatistic, setLocalStatistic] = useState<LineSeries[]>([])


    useEffect(() => {
        if (!data) return
        if (localStatistic.length > 0) {
            const newStats: LineSeries[] = []
            Object.entries(data)?.forEach(([k, v]) => {
                if (k === 'timestamp') return;
                const currentStat = localStatistic.find(ls => ls.id === k)
                if (currentStat) {
                    newStats.push({
                        ...currentStat,
                        data: [...(currentStat.data || []), v]
                    })
                }
            }
            )

            if (newStats) {
                setLocalStatistic(newStats)
                return
            }
        }
        const arr: LineSeries[] = []
        Object.entries(data).forEach(([k, v]) => {
            if (k.includes('timestamp')) return
            arr.push({
                id: k,
                label: k,
                data: [v]
            })
        })
        setLocalStatistic(arr)
    }, [data])


    return (
        <>
            {localStatistic ? <LineChart
                series={localStatistic || []}
                height={300}
                width={1000}
            /> : 'NO DATA'
            }
        </>)
}

export default StatsChart;