import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../product-card/ProductCard";
import { fastFoodProducts,riceMenuProducts,pizzaProducts,dessertProducts,coffeeProducts } from "../assets/fake-data/products";
import './menu-pack.css'


const MenuPack = () => {

    const [filter, setFilter] = useState('High-Fiber-Meal-Plans')
    const [products, setProducts] = useState(riceMenuProducts)

    useEffect(()=> {

        if(filter === 'High-Fiber-Meal-Plans' ){
            setProducts(riceMenuProducts)
        }

        if(filter === 'Vegetarian-Meal-Plans' ){
            setProducts(fastFoodProducts)
        }

        if(filter === 'Weight-Loss-Meal-Plans' ){
            setProducts(pizzaProducts)
        }

        if(filter === 'Heart-Healthy-Meal-Plans' ){
            setProducts(dessertProducts)
        }

        if(filter === 'DRINKS' ){
            setProducts(coffeeProducts)
        }


    },[filter])

    return(
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-3'>
                        <h3 className="menu__title"> Our Menu Pack</h3>
                    </Col>
                    <Col lg='12' className="text-center mb-5">
                        <button className={`filter-btn ${filter === 'Vegetarian-Meal-Plans' ? 'active__btn' : ''}`} onClick={()=> setFilter('Vegetarian-Meal-Plans')}>Vegetarian</button>
                        <button className={`filter-btn ${filter === 'High-Fiber-Meal-Plans' ? 'active__btn' : ''}`} onClick={()=> setFilter('High-Fiber-Meal-Plans')}>High Fiber</button>
                        <button className={`filter-btn ${filter === 'Weight-Loss-Meal-Plans' ? 'active__btn' : ''}`} onClick={()=> setFilter('Weight-Loss-Meal-Plans')}>Weight Loss</button>
                        <button className={`filter-btn ${filter === 'Heart-Healthy-Meal-Plans' ? 'active__btn' : ''}`} onClick={()=> setFilter('Heart-Healthy-Meal-Plans')}>Vegan</button>
                        <button className={`filter-btn ${filter === 'DRINKS' ? 'active__btn' : ''}`} onClick={()=> setFilter('DRINKS')}>DRINKS</button>
                    </Col>

                    {products.map((item) => (
                        <Col lg='3' key={item.id} className="mb-4">
                            {" "}    
                            <ProductCard item={item} /> 
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

    );
};

export default MenuPack