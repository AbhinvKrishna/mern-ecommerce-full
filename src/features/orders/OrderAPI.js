
export function createOrder(orderItem) {
  return new Promise(async (resolve) => {
    const response = await fetch(' http://localhost:8080/orders',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(orderItem)
    })
    const data = await response.json()
    resolve({ data })
  }

  );
}
