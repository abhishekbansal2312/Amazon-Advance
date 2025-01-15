export default function SearchBar() {
  return (
    <div className="flex items-center bg-white rounded-md shadow-md">
      <div className="bg-gray-300 rounded-l-md px-2 py-2 max-w-12 border-r-2">
        <select className="bg-gray-300 text-black focus:outline-none border-r-2">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="flex-grow p-2 text-black focus:outline-none"
      />

      <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-r-md">
        <img
          className="w-6 h-6"
          src="https://cdn-icons-png.flaticon.com/128/149/149852.png"
          alt="Search"
        />
      </button>
    </div>
  );
}
