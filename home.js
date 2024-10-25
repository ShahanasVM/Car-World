function storeRecords(event){
    event.preventDefault()
    const car ={
        brand:carBrand.value,
        price:carPrice.value,
        id:carKey.value
    }
    if(car.brand =="" || car.price =="" || car.id ==""){
        alert("please enter following details")
    }
    else{
      if(car.id in localStorage){
        alert("Car already exist")
      }
      else{
        localStorage.setItem(car.id,JSON.stringify(car))
        alert("Car added successfully")
      }
    }

}

function retrieveRecords(event){
    event.preventDefault()
    let retreiveData =  carId.value;
    console.log(retreiveData);
    if(retreiveData in localStorage){
        let carDetails = JSON.parse(localStorage.getItem(retreiveData))
        console.log(carDetails);
        let htmlData=`<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">CarBrand : ${carDetails.brand}</li>
        <li class="list-group-item">Price : ${carDetails.price}</li>
        <li class="list-group-item">Key : ${carDetails.id}</li>
        </ul>
        </div>`
        result.innerHTML=htmlData
    }
    else{
        alert("Car doesn't exist")
    }
}  

function removeRecords(event){
    event.preventDefault()
   let removeCar = itemKey.value 
   console.log(removeCar);
   if(removeCar in localStorage){
    localStorage.removeItem(removeCar)
   }
}

function clearAll(event){
    event.preventDefault()
    localStorage.clear()
}