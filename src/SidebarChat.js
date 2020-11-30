import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from './firebase';
import './SidebarChat.css';

const SidebarChat = ({ id, name, addNewChat }) => {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('');

    useEffect(() => {
        if (id) {
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                )
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.ceil(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat room");

        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            })
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p><span style={{ marginRight: "auto" }}>{messages[0]?.message}</span> <span style={{ paddingLeft: "20px", fontWeight: "bold", fontSize: "xx-small" }}>{new Date(messages[0]?.timestamp?.toDate()).toLocaleTimeString()}</span></p>
                </div>
            </div>
        </Link>
    ) : (
            <div
                onClick={createChat}
                className="sidebarChat">
                <h2>Add new chat</h2>
            </div>
        );
};

export default SidebarChat;