import React, { useEffect, useState } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client-node"; // Import from sockjs-client-node

function Notifications() {
    const [notification, setNotification] = useState("");

    useEffect(() => {
        const socket = new SockJS("http://localhost:8383/ws"); // Use SockJS from sockjs-client-node
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, () => {
            stompClient.subscribe("/topic/new-invoice", (message) => {
                // Set notification state
                setNotification("New invoice created!");

                // Display browser notification
                if (Notification.permission === "granted") {
                    new Notification("New Invoice", {
                        body: "A new invoice has been created!",
                    });
                } else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then((permission) => {
                        if (permission === "granted") {
                            new Notification("New Invoice", {
                                body: "A new invoice has been created!",
                            });
                        }
                    });
                }
            });
        });

        return () => {
            stompClient.disconnect();
        };
    }, []);

    return (
        <div>
            {notification && <div>{notification}</div>}
            <h1>test</h1>
            {/* Your other components */}
        </div>
    );
}

export default Notifications;
