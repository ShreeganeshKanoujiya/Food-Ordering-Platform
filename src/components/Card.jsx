import React, { useState } from "react";
import style from './card.module.css'


const Card = ({cardData, cart, setCart}) => {

    const addToCart = (item) => {
        setCart((currentCart) => {
            const existingItem = currentCart.find((cartItem) => cartItem.id === item.id)

            if (existingItem) {
                return currentCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: (cartItem.qty) + 1 }
                        : cartItem
                )
            }

            return [...currentCart, { ...item, qty: 1 }]
        })
    }

    return (
        <div className = {style.mainContainer}>
            
            <div className={style.cardBottom}>
                {cardData.length === 0 ?
                <h2 style={{textAlign: "center", margin: "20px 0"}}>No items found</h2> :
                (cardData.map((i) => {
                    return <div className={style.card} key={i.id}>
                        <h1 className={style.h1}>{i.name}</h1>
                        <img src={i.img} alt={i.name} />
                        <div className={style.priceRow}>
                            <span className={style.priceLabel}>Price</span>
                            <span className={style.priceValue}>₹{i.price}</span>
                        </div>
                        <p>
                            {i.des} 
                        </p>
                        <button onClick={() => addToCart(i)}>Add to Cart</button>
                    </div>
                }))
            }
            </div>
        </div>
    )
}

export default Card;