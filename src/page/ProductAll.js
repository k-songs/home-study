import React from 'react'
import { useEffect ,useState} from 'react'
import ProductCard from './../component/ProductCard';
import {Container,Row,Col} from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList]=useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () =>{          //쿼리값이 바뀔때 마다 겍프로덕트함수를 불러줘야함
        let searchQuery = query.get('q')||"";
         console.log("쿼리",searchQuery);
        let url =`https://my-json-server.typicode.com/k-songs/home-study/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(() => {
        getProducts()
    },[query])
  return (
    <div>

        <Container>
            <Row>
            {productList.map((menu) => (        //프로덕트 리스트에 아이템 개수만큼 프로덕트카드가 생김
            <Col lg={3}>
                <ProductCard item={menu}/>
            </Col>
            ))}
            </Row>
        </Container>
        <ProductCard />
    </div>
  )
}
                
             

export default ProductAll