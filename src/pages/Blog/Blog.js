import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
         <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header> what is cors?</Accordion.Header>
                <Accordion.Body>
                 CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API.
                 Cross-Origin Resource Sharing  is an HTTP-header based mechanism that allows a server to indicate any origins  other than its own from which a browser should permit loading resources
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.
                1. Token Authentication. A token can be defined as a digitally encoded signature used to authenticate and authorize a user to access specific resources on a network. ...
                2. Standard Authentication. ...
                3. Multi-Factor Authentication (MFA) ...
                4. Passwordless Authentication. ...
                5. Social Authentication.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>How does the private route work?</Accordion.Header>
                <Accordion.Body>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                <Accordion.Body>
                Node. js  is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.
                Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.
                </Accordion.Body>
            </Accordion.Item>
         </Accordion>
        </div>
    );
};

export default Blog;