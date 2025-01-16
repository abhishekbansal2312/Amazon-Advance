import { useSelector } from "react-redux";
import cart from "../../assets/cart.png";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  return (
    <div className="relative flex items-center cursor-pointer h-full p-1 hover:border-2">
      <div className="absolute top-4 right-5 bg-gray-900 text-amber-500 rounded-full text-sm w-4 h-4 flex items-center justify-center transform translate-x-2 -translate-y-2 z-10">
        {items.length > 0 ? items.length : 0}
      </div>

      <div className="relative">
        <img src={cart} alt="Cart" className="h-10 w-10" />
      </div>
      <div className="absolute left-10 top-6 font-semibold">cart</div>
    </div>
  );
}
