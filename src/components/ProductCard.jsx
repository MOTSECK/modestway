export default function ProductCard({ produit }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img src={produit.image || '/placeholder.png'} alt={produit.nom}
           className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{produit.nom}</h2>
        <p className="mt-2 text-gray-700">{produit.prix} €</p>
      </div>
    </div>
  )
}
