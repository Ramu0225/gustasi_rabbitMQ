import clientSocket from "socket.io-client";

export const API_URL = "http://localhost:5555";
const socket = clientSocket(`${API_URL}/calc`, {
	withCredentials: true,

});

export const subscribe = (newCallback:any):any => {
	socket.on("job1", (result) => {
		result = JSON.parse(result);
		newCallback(result);
	});
};
