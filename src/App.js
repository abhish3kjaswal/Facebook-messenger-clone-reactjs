import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    // run code here on condition
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // all the logic to send a message
    setInput('');
  };
  return (
    <div className='App container'>
      <div className='row1'>
        <img
          src='https://images.squarespace-cdn.com/content/v1/595d69672e69cf27605f00ba/1500581458507-VENSIRVTVGOM3H77NZ0K/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/facebook-messenger-logo-preview.png?format=500w'
          style={{ width: '120px', height: '120px', marginTop: '5px' }}
        />
        <h1>MESSENGER</h1>
        <h2>WELCOME: {username}</h2>
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message}></Message>
          ))}
        </FlipMove>
      </div>
      <div className='row2'>
        <form className='app__form'>
          <FormControl className='app__formControl'>
            <Input
              className='app__input'
              placeholder='Enter a message...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></Input>

            <IconButton
              className='app__iconButton'
              variant='contained'
              type='submit'
              disabled={!input}
              onClick={sendMessage}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default App;
