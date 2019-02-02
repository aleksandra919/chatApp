
import {Component} from "react";
import React from "react";



class Messages extends Component {
    renderMessage(message) {
        let userType = (message.type === "host") ? 'Messages-message currentMember': 'Messages-message';
        return(
            <li className={userType} key={message.id}>
                <span 
                    className='avatar'
                />
                <div className='Message-content'>
                    <div className='username'>
                        {message.user} 
                    </div>
                    <div className="text">{message.text}</div>       
                </div>
            </li>
        )
    };

    render() {
        
      const {messages} = this.props;
      console.log('messages == ', this.props);
      if(messages !== undefined) {
        return (
            <ul className="Messages-list">
            {messages.map(m => this.renderMessage(m))}
            </ul>
        );
      }
    }
  }
  





export default Messages;