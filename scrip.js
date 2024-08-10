const carList=document.getElementById('car-list')
const filterBtn=document.getElementById('filter-btn')

filterBtn.addEventListener("click",()=> {
    const totalCars=document.getElementById('total-cars').value;
    const filterId=document.getElementById('filter-id').value;

fetchCars(totalCars,filterId)
})
async function fetchCars(totalCars,filterId){
    const response=await fetch(
        "https://parallelum.com.br/fipe/api/v1/carros/marcas"
    )
    const data=await response.json()
    const filteredCars=data.filter((car)=>car.codigo===filterId)
    displayCars(filteredCars.slice(0,  totalCars));

}
function displayCars(cars){
    carList.innderHTML="";
cars.forEach((car) =>{

    const carDIV=document.createElement('div');
carDIV.textContent =`Name: ${car.nome}, Code: ${car.codigo}`;
carList.appendChild(carDIV);
});
}