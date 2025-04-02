import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching cart items");
        }
        return res.json();
      })
      .then((data) => {
        setCartItems(data.cart);
      })
      .catch((err) => console.error(err));
  }, []);

  const handlePlaceOrder = () => {
    navigate('/select-address');
  };

  return (
    <div className='w-full min-h-screen bg-gray-100 flex flex-col items-center py-10'>
      <h1 className='text-2xl font-semibold mb-6'>Shopping Cart</h1>
      <div className='w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg'>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className='flex justify-between items-center border-b pb-4 mb-4'>
              <div>
                <h3 className='text-lg font-medium'>{item.name}</h3>
                <p className='text-gray-700'>Price: {item.price}</p>
                <p className='text-gray-600'>Quantity: {item.quantity}</p>
              </div>
              <img src={item.image} alt={item.name} className='w-20 h-20 object-cover rounded' />
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>Your cart is empty.</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <button
          onClick={handlePlaceOrder}
          className='mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600'>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CartPage;
