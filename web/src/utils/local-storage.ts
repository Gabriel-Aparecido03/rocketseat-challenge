type Item = {
  id : string
  imageUrl : string
  name : string
  description : string
  quantity : number
  priceInCents : number
  priceInCentsTotal : number
}

export async function saveItemsAtLocalStorage(items : Item[]) {
  window.localStorage.setItem('@capputeeno',JSON.stringify(items))
}

export async function removeItemAtLocalStorage(id : string) {
  const actuallyitems = JSON.parse(window.localStorage.getItem('@capputeeno') ?? "[]")  as Item[]
  const newArray = actuallyitems.filter(item => item.id !== id )

  window.localStorage.setItem('@capputeeno',JSON.stringify(newArray))
}

export async function cleanLocalStorage() {
  window.localStorage.setItem('@capputeeno',JSON.stringify([]))
}

export async function readItemAtLocalStorage() {
  return JSON.parse(window.localStorage.getItem('@capputeeno') ?? "[]")  as Item[]
}