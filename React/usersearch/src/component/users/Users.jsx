import React, { Component } from 'react';
import Useritem from '../users/Useritem.jsx';
import Card from '../Card/card.jsx';

class Users extends Component {
  state = {
    // state is an Object // state can not be sent
    users: [
      {
        id: 1,
        login: 'mjombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      },
      {
        id: 2,
        login: 'defunkt',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt'
      },
      {
        id: 3,
        login: 'pjhyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett'
      }
    ],
    cards: [
      {
        img:
          'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'House 1',
        text: 'Some quick example about the House in Question.'
      },
      {
        img:
          'https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        title: 'House 2',
        text: 'Some quick example about the House in Question.'
      },
      {
        img:
          'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070__340.jpg',
        title: 'House 3',
        text: 'Some quick example about the House in Question.'
      }
    ]
  };

  render() {
    const userStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gridGap: '1rem'
    };
    return (
      <>
        {
          <div style={userStyle}>
            {this.state.users.map(user => (
              <Useritem key={user.id} user={user} />
              //needs key for each element that will be returned // so react can identify the element when it needs to be changed
            ))}
          </div>
        }
        <div style={userStyle}>
          {this.state.cards.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </>
    );
  }
}

export default Users;
