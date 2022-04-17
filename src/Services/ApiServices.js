import axios from "axios";

const ApiServices = () => {

	const get=(url)=>axios.get(url)
	
	const post=(url,params)=>axios.post(url,params)

	const put=(url,params)=>axios.put(url,params)

	const remove=(url)=>axios.delete(url)

	const secureGet=(url,token)=>{
		const config={
			headers: {
				'Authorization':`Bearer ${token}`,
			}
		}

		return axios.get(url,config)
	}


	return { get,secureGet,  post, put, remove };
};

export default ApiServices;
