export const Recomendation = () => {
  const recommendations = [
    {
      id: 1,
      name: 'Very Berry',
      image: 'https://tiendaquinoa.com/cdn/shop/products/VeryBerry_345x345@2x.png?v=1621268061'
    },
    {
      id: 2,
      name: 'Crea Tu Poke Bowl',
      image: 'https://tiendaquinoa.com/cdn/shop/products/crea-tu-poke-bowl_1_345x345@2x.jpg?v=1602535008'
    },
    {
      id: 3,
      name: 'El Pavazo',
      image: 'https://tiendaquinoa.com/cdn/shop/products/sandwich-el-pavazo_1_345x345@2x.jpg?v=1601686017'
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recomendaciones</h2>
        <button className="text-pink-500 text-sm hover:text-pink-600">Ver más</button>
      </div>
      <div className="space-y-3">
        {recommendations.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-sm text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
