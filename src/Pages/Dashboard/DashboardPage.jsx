import React from 'react'
import { FiMail, FiSend, FiUsers } from 'react-icons/fi'
import { StatsWithIconComponent } from '../../Components/Stats/StatsWithIconComponent'

function DashboardPage() {
	const stats = [
		{
			icon: FiUsers,
			label: 'Total Subscribers',
			value: '71,887',
			delta: {
				value: '320',
				isUpwardsTrend: true,
			},
		},
		{
			icon: FiMail,
			label: 'Avg. Open Rate',
			value: '56.87%',
			delta: {
				value: '2.3%',
				isUpwardsTrend: true,
			},
		},
		{
			icon: FiSend,
			label: 'Avg. Click Rate',
			value: '12.87%',
			delta: {
				value: '0.1%',
				isUpwardsTrend: false,
			},
		},
	]

	return (
		<>
			<StatsWithIconComponent data={stats} />
		</>
	)
}

export default DashboardPage