import { useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const useSocket = (onMessage) => {
    useEffect(() => {
        socket.on("taskUpdated", onMessage);

        return () => {
            socket.off("taskUpdated", onMessage);
        };
    }, [onMessage]);

    return socket; // Return the socket instance
};

export default useSocket;