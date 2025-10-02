import React from 'react'
import Container from '../Container'

const Cart = () => {
  return (
    <section>
      <Container>
        <div className="">
          <div className="">
            <h1 className='text-[49px] font-dm'>Cart</h1>
          </div>
          <div className="">
            <table>
              <th className=''>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </th>
              <tr>
                <td>
                  <img src="" alt="" />
                  <p></p>
                </td>
                <td>TK</td>
                <td className='flex gap-x-3'>
                  <button>-</button>
                  <p>0</p>
                  <button>+</button>
                </td>
                <td>TK</td>
              </tr>
            </table>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Cart