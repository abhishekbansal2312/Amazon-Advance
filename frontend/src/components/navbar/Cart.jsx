import cart from "../../assets/cart.png";

export default function Cart() {
  return (
    <div className="relative flex items-center cursor-pointer h-full p-1 hover:border-2">
      <div className="absolute top-0 right-0 bg-yellow-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center transform translate-x-2 -translate-y-2">
        1
      </div>

      <div className="relative">
        <img src={cart} alt="Cart" className="h-10 w-10" />
      </div>
    </div>
  );
}
