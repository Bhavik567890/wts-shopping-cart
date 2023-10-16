export async function getProducts() {
   
    return (
        await fetch('https://fakestoreapi.com/products')
    ).json();
}

export async function getSingleProduct(id:string) {
   
    return (
        await fetch(`https://fakestoreapi.com/products/${id}`)
    ).json();
}

