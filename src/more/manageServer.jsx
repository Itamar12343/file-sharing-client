import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");
const ManageServer = () => {

    socket.on("h", data =>{
        console.log(data);
    });

    return ( 
        <>
        
        </>
     );
}
 
export default ManageServer;