const categories = ["Hot Dishes", "Cold Dishes", "Soup", "Grill", "Appetizer", "Dessert"];
const dishes = [
  { name: "Spicy seasoned seafood noodles", price: 2.29, available: 20, img: "/Image1.png" },
  { name: "Salted Pasta with mushroom sauce", price: 2.69, available: 11, img: "/Image2.png" },
  { name: "Beef dumpling in hot and sour soup", price: 2.99, available: 16, img: "/Image3.png" },
  { name: "Healthy noodle with spinach leaf", price: 3.29, available: 22, img: "/Image5.png" },
  { name: "Hot spicy fried rice with omelet", price: 3.49, available: 13, img: "/Image5.png" },
  { name: "Spicy instant noodle with omelette", price: 3.59, available: 17, img: "/Image6.png" },
];

export default function FoodMenu() {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-6">
          {categories.map((cat, i) => (
            <span
              key={i}
              className={`cursor-pointer ${
                i === 0 ? 'text-[#EA7C69] border-b-2 border-[#EA7C69]' : 'text-gray-400'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
        <select className="bg-[#2D303E] text-white px-4 py-2 rounded-lg">
          <option>Dine In</option>
          <option>To Go</option>
          <option>Delivery</option>
        </select>
      </div>

      <h2 className="text-xl font-semibold mb-4">Choose Dishes</h2>
      <div className="grid grid-cols-3 gap-6">
        {dishes.map((dish, i) => (
          <div key={i} className="bg-[#2D303E] p-4 rounded-xl text-center">
            <img src={dish.img} alt={dish.name} className="mx-auto mb-4 w-24 h-24 rounded-full object-cover" />
            <h3 className="font-semibold">{dish.name}</h3>
            <p className="text-gray-400 text-sm">${dish.price.toFixed(2)}</p>
            <p className="text-gray-500 text-xs">{dish.available} Bowls available</p>
          </div>
        ))}
      </div>
    </div>
  );
}
