import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id:1,name:'Laptop Pro' ,price:120000},
        {id:2,name:'Laptop tro' ,price:130000},
        {id:3,name:'Laptop fro' ,price:140000}
    ]
        
    
    return (
        <div>
            <h1>This is My Class Group</h1>
            <div className="card-group">
               {
                   products.map(product=> <Card key={product.id}></Card>)
               }
            </div>
        </div>
    );
};

export default CardGroup;