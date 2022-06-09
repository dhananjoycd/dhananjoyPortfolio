import React from 'react';
import { Card, Button, Form, FormControl } from 'react-bootstrap';
import Banner from './Banner';
import ReCapeID from './ReCapeID';


const Home = () => {
    return (
        <div>
                  <div className='my-2 d-flex justify-content-center'>
<Form className="d-flex">
<FormControl
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
  />
  <Button variant="warning fw-bold">Search</Button>
</Form>
</div>
      <div className='m-2'>
      <Banner></Banner>
      </div>

<div className='container-xxl' id='about'>
    <ReCapeID></ReCapeID>


<div className="d-flex justify-content-center" id='service'>
              <h3>MY Service gula thakbe ekhane</h3>
          </div>
<Card> 
    all service gula thakbe .... grid card diye <br />
    
    
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro nesciunt delectus asperiores ad minus repellendus natus distinctio nobis totam quidem, assumenda est doloremque accusamus vel, mollitia quo provident reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit et ducimus dolor reiciendis ipsam ut voluptates quae iusto porro nesciunt, neque perferendis illum quo! Earum obcaecati numquam praesentium debitis!
</Card>


<div className="d-flex justify-content-center" id='projects'>
              <h3>MY Portfolio gula thakbe ekhane</h3>
          </div>
 <Card> 
    all service gula thakbe .... grid card diye <br />
    
    
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro nesciunt delectus asperiores ad minus repellendus natus distinctio nobis totam quidem, assumenda est doloremque accusamus vel, mollitia quo provident reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit et ducimus dolor reiciendis ipsam ut voluptates quae iusto porro nesciunt, neque perferendis illum quo! Earum obcaecati numquam praesentium debitis!
</Card>

<div className="d-flex justify-content-center bg-info shadow">
              <h3>ekhane tool tip for work with me</h3>
          </div>


<div className="d-flex justify-content-center" id='testimonial'>
              <h3>Testimonial/ client review gula thakbe ekhane</h3>
          </div>
<Card> 
    all service gula thakbe .... grid card diye <br />
    
    
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro nesciunt delectus asperiores ad minus repellendus natus distinctio nobis totam quidem, assumenda est doloremque accusamus vel, mollitia quo provident reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit et ducimus dolor reiciendis ipsam ut voluptates quae iusto porro nesciunt, neque perferendis illum quo! Earum obcaecati numquam praesentium debitis!
</Card>


<div className="d-flex justify-content-center" id='blogs'>
              <h3>My latest 6 blogs</h3>
          </div>
<Card> 
    all service gula thakbe .... grid card diye <br />
    
    
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro nesciunt delectus asperiores ad minus repellendus natus distinctio nobis totam quidem, assumenda est doloremque accusamus vel, mollitia quo provident reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit et ducimus dolor reiciendis ipsam ut voluptates quae iusto porro nesciunt, neque perferendis illum quo! Earum obcaecati numquam praesentium debitis!
</Card>


<div className="d-flex justify-content-center" id='contact'>
              <h3>How can you communicate?
Contact Me</h3>
          </div>
<Card> 
    all service gula thakbe .... grid card diye <br />
    
    
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro nesciunt delectus asperiores ad minus repellendus natus distinctio nobis totam quidem, assumenda est doloremque accusamus vel, mollitia quo provident reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit et ducimus dolor reiciendis ipsam ut voluptates quae iusto porro nesciunt, neque perferendis illum quo! Earum obcaecati numquam praesentium debitis!
</Card>

</div>   

        </div>
    );
};

export default Home;