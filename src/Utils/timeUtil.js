import moment from "moment"

export const convertMilisecond = (data)=>{
	return moment.unix(data).format("DD MMM YYYY hh:mm a")
}

