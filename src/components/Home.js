import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'
import { baseUrl } from './auth';


export default function Home() {

  const BASE_API_URL = baseUrl()
  const navigate = useNavigate()
  const [modalShow, setModalShow] = React.useState(false);
  const id = localStorage.getItem("userId")
  const [alluserData ,setalluserData] = useState()
  
  const userID = localStorage.getItem(id);
  const upData = userID?JSON.parse(userID):[]
// let todo = TRlist?JSON.parse(TRlist):[];




// function dataget(){
  
// }

useEffect(()=>{
  
  setalluserData(upData)
    console.log(alluserData ,"alluserData")
  },[submitModel])

  const [name , setname] = useState()
  const [age , setage] = useState()
  const [work , setwork] = useState()
  const [address , setaddress] = useState()

  const logOutsubmit =  ()=>{
    if(window.confirm("are you soure to logout")){
        localStorage.removeItem('userId')
        navigate('/login')
    }
  }

  function submitModel(e){
    e.preventDefault();
  
        const id = localStorage.getItem('userId')
        const modelData = {name,age,work,address}
        const TRlist = localStorage.getItem(id);

        let todo = TRlist?JSON.parse(TRlist):[];

        todo.push(modelData)

        localStorage.setItem(id, JSON.stringify(todo))
        setModalShow(false) 


       
 
  }


  return (
    <>
        <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Bords
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
            <form onSubmit={submitModel}>
                <input className='form-input' onChange={(e) => setname(e.target.value)} required type='text' placeholder='Name'></input>
                <input className='form-input' onChange={(e) => setage(e.target.value)} required type='number' placeholder='Age'></input>
                <input className='form-input' onChange={(e) => setwork(e.target.value)} required type='text' placeholder='Work'></input>
                <input className='form-input' onChange={(e) => setaddress(e.target.value)} required type='text' placeholder='Address'></input>
                <Button type='submit' className='mt-4' >Submit</Button>
            </form>
        </div>
      </Modal.Body>
    </Modal>
    
       <div className='home-wraper'> 
            <header>
                <div className='logo'>LOGO</div>
                <div className='nav-btn-box'>
                  
                  {/* <Button variant="primary" onClick={() => setModalShow(true)}>Add Bords</Button> */}
                  <button className='bords-btn' onClick={() => setModalShow(true)}>Add Bords</button>
                  <button className='bords-btn' onClick={logOutsubmit}>Log Out</button>
                </div>
            </header>


      {/* <MyVerticallyCenteredModal/> */}

        <Container className='mt-5'>            
            <Row>
              {alluserData?.map((data)=>{
                return(
              <Col md={4} className='p-3'>
                <Card>
                  <Card.Body>
                    <Card.Title className='mb-3'>{data.name}</Card.Title>
                      <div className='borrd-box'>
                          <span>Age</span>
                          <p>{data.age}</p>
                      </div>
                      <div className='borrd-box'>
                          <span>Work</span>
                          <p>{data.work}</p>
                      </div>
                      <div className='borrd-box'>
                          <span>Address</span>
                          <p>{data.address}</p>
                      </div>
                      <div className='d-flex'>
                        <Button className='mx-2' variant="primary">update</Button>
                        <Button className='mx-2' variant="primary">delete</Button>
                      </div>
                  </Card.Body>
                </Card>
              </Col>

                )
              })}

              

              
            </Row>
          </Container>
      
        </div>
    </>
  )
}
