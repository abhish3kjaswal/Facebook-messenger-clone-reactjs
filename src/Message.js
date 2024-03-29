import React, { forwardRef } from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
        <CardContent>
          <Typography color='white' variant='h5' component='h2'>
            {!isUser && `${message.username || 'Unknown user'}:`}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

Message.propTypes = {};

export default Message;
