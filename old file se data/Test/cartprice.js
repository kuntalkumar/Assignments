const cartItems = [
    { ksin: '362', pack_id: '362-1', quantity: 1 },
    { ksin: '231', pack_id: '231-1', quantity: 2 },
    { ksin: '231', pack_id: '231-3', quantity: 3 }
  ];
  
  const prices = [
    { ksin: '231', prices: [{ pack_id: '231-1', price: { cent_amount: 1000, fraction: 100 }}, 
                        { pack_id: '231-3', price: { cent_amount: 1400, fraction: 100 }}] },
    { ksin: '362', prices: [{ pack_id: '362-1', price: { cent_amount: 1600, fraction: 100 }}] }
  ];
  
const arr =new Map()
prices.map((ele)=>{

    const priceP=ele.prices;

    priceP.map((ele)=>{
        const ide=ele.pack_id;
        const pricePerUnit=ele.price.cent_amount/ele.price.fraction

            arr.set(ide,pricePerUnit)

    })
})

let total=0;

cartItems.map((ele)=>{
    
total=total+(ele.quantity*arr.get(ele.pack_id))
})
console.log(total)
