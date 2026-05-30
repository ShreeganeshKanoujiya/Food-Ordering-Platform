import React, { useState } from 'react'
import './cartSidebar.css'
import { QRCodeCanvas } from 'qrcode.react'

const CartSidebar = ({ cart, setCart, setShowCart }) => {

    const [showQR, setShowQR] = useState(false)

    const decrementItem = (index) => {
        const updateCart = [...cart]

        if ((updateCart[index].qty ?? 1) > 1) {
            updateCart[index].qty -= 1
        } else {
            updateCart.splice(index, 1)
        }

        setCart(updateCart)
    }

    const removeItem = (index) => {
        const updateCart = [...cart]
        updateCart.splice(index, 1)
        setCart(updateCart)
    }

    // total with quantity
    const total = cart.reduce((acc, item) => {
        const price = Number(item.price) || 0
        const qty = item.qty ?? 1
        return acc + (price * qty)
    }, 0)

    return (
        <div className='sidebar'>

            {/* Close button */}
            <button className='closeBtn' onClick={() => setShowCart(false)}>
                X
            </button>

            <h2>Your Cart</h2>

            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cart.map((item, index) => (
                    <div className='cartItem' key={index}>
                        <img src={item.img} alt="" />

                        <div className='cartDetails'>
                            <p>{item.name}</p>
                            <p>₹{item.price}</p>
                        </div>

                        <div className='qtyControls'>
                            <button onClick={() => decrementItem(index)}>-</button>
                            <span>{item.qty ?? 1}</span>
                            <button onClick={() => {
                                const updatedCart = [...cart]
                                updatedCart[index].qty = (updatedCart[index].qty ?? 1) + 1
                                setCart(updatedCart)
                            }}>+</button>
                        </div>
                        <button className='removeBtn'
                            onClick={() => removeItem(index)}>
                            Remove
                        </button>
                    </div>
                ))
            )
            }

            <h3 className='total'>Total: ₹{total}</h3>

            <button 
            className='orderBtn'
            onClick={() => setShowQR(true)}>
                Place Order
            </button>

            {/* QR Code */}
            {showQR && (
                <div className='qrBox'>
                    <h3>Scan & Pay</h3>

                    <QRCodeCanvas value={`upi://pay?pa=shreeganeshkanoujiya@okicici&pn=Shreeganesh%20Kanoujiya&am=${total}&cu=INR&aid=uGICAgMCFn9HiDw`} size={180} />
                    {/* <QRCodeCanvas value={`Total: ₹${total}`} 
                    size={180}
                    /> */}

                    <p>Amount: ₹{total}</p>
                </div>
            )}
        </div>
    )
}

export default CartSidebar