import io from "socket.io-client";

let socket;

const initializeSocket = (user_id) => {
  socket = io("http://localhost:8080", {
    query: `user_id=${user_id}`,
  });
};

export { socket, initializeSocket };
