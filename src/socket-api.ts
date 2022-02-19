import clientSocket from "socket.io-client";

export const API_URL = "http://localhost:5555";
const socket = clientSocket(`${API_URL}/orderUpdate`, {
	withCredentials: true,

});

export const subscribe = (newCallback:any):any => {
	socket.on("gustasi_job131", (result) => {
		//console.log("sub", result);
		newCallback(result);
	});
};
