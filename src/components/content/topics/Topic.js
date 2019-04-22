import React from 'react';
import s from './Topic.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Message from "../messages/Message";


const Topic = (props) => {
    debugger;
    let messagesElements = props.messages.map(t => <Message topicId={t.topicId}
                                                            messageId={t.messageId}
                                                            text={t.text}
                                                            subscribe={props.subscribe}/>);
    let newMessage = React.createRef();

    return (
        <BrowserRouter>
            <div className={s.topic}>
                <NavLink to={'/topics/' + props.topicId}>
                    <h3>{props.title}</h3>
                </NavLink>
               <Route exact path={'/topics'}
               render={()=> <div className={s.message}>
                    {messagesElements[0]}
                </div>}/>
            </div>
            <Route path={'/topics/' + props.topicId}
                   render={() => <div>
                       {messagesElements}
                       <NavLink to={'/topics'}>
                           close
                       </NavLink>
                       {/*<textarea ref={newMessage} onChange={onMessageChange} value={props.newFirstMessage}/>*/}
                   </div>}/>
        </BrowserRouter>
    );
}
export default Topic;
