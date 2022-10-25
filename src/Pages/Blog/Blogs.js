import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    return (
        <div className=''>
            <Card className="w-75 mx-auto my-3">
                <Card.Header className='bg-dark fs-4 fw-semibold text-light'>What is cors?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        CORS is the acronym of <strong>Cors-Origin Resource Sharing</strong> . Simply, cors provides permission to a browser of different port or domain apart from its own to <strong>access the resources</strong>. It is a <b>security feature</b> that enables permission to other <b>browsers to load the API</b>. That means if we want to access data from one of our own server sites to our client site we have to use the cors because the <b>server does not provide default permission to access data</b>.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="w-75 mx-auto  my-3">
                <Card.Header className='bg-dark fs-4 fw-semibold text-light'>Why are we using firebase? What other options do we have to implement authentication?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        We are using firebase to <b>provide security to our website resources by limiting the access of an user</b>. Firebase helps to build quality applications easily. Firebase is a <b>ready-made backend</b> which provides all the functionality of a backend server. We do not have to write the backend code from scratch. It is a <b>google cloud based service</b> which gives us access to other google products at the same time. We can control the user's access with ease.
                        However, there are other backend options as well such as <b>MongoDB, Okta, JSON Web Token, Amazon Cognito, Auth0,</b> etc.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="w-75 mx-auto  my-3">
                <Card.Header className='bg-dark fs-4 fw-semibold text-light'>How does the private route work?</Card.Header>
                <Card.Body>
                    <Card.Text>
                    The simple theory of react private route is to <b>limit the users access</b>. We simply create a component called PrivateRoute or ProtectedRate and keep the routes that we want to protect as <b>children of this route</b>. If the user is <b>logged in</b>, then the user can access these routes or else the PrivateRoute will <b>take the user to the login page</b>. We use conditions on the user in the PrivateRoute component to check whether the user is logged in or not. That means <b>one can access these routes only and only if the person is logged in</b>.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="w-75 mx-auto  my-3">
                <Card.Header className='bg-dark fs-4 fw-semibold text-light'>What is Node? How does node work?</Card.Header>
                <Card.Body>
                    <Card.Text>
                    Node is an <b>open source backend JavaScript runtime environment</b>. It provides access to several global objects. It is a free platform and with that we can easily create a backend server. Node runs on <b>V8 JavaScript engine</b> and executes JavaScript code. The V8 engine converts the JavaScript code into machine code. Node is <b>single threaded</b>. From a browser we send <b>requests for resources</b> to the node by using <b>the get method</b> and the node sends the data as a response to the request. It works for <b>multiple clients at the same time with a single thread without blocking the thread for a single request</b>.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;