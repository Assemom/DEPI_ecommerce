import CartDetails from "./CartDetails";
import CartTotals from "./CartTotals";
import CartShipping from "./CartShipping";
import { useSelector } from "react-redux";

export default function ShoppingCard() {
   const cart = useSelector((state) => state.cart);

   return (
      <div className="my-20 grid grid-cols-1 gap-y-8 md:grid-cols-3 lg:gap-x-8">
         <div className="cart-details col-span-2">
            <CartDetails cartItems={cart.items} />
         </div>
         <div className="card-price">
            <h3 className="mb-10 text-center text-h6 text-blue-off">
               Cart Totals
            </h3>
            <CartTotals totalAmount={cart.total} />
            <CartShipping />
         </div>
      </div>
   );
}
