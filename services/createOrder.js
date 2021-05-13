
export default async function createOrder(order) {
  const response = await fetch(`${process.env.apiUrl}/api/orders`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({order: order})
  });
  return response;
}