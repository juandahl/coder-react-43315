import useCart from "../context/cart/useCart";

function ItemDetail({ item }) {
  const { addProduct } = useCart();

  function handleComprar() {
    addProduct(item);
  }

  return (
    <div>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <button onClick={handleComprar}>Comprar</button>
    </div>
  )
}

export default ItemDetail;
