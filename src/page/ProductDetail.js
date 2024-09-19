import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams();
  const [product,setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/joeungyeongcoding/react-hnm-website/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data?",data);
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  
  return (
    <Container>
      <Row>
        <Col className='product-img'><img src={product?.img} alt=''/></Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice==true?"Consciout Choice":""}</div>
          <Dropdown className='dropDown'>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            사이즈 선택
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {product?.size.length > 0 && 
             product.size.map((item) => (
              <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
             ))}
          </Dropdown.Menu>
        </Dropdown>
        <div className="d-grid">
          <Button variant="dark" size="lg">추가</Button>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
