
function setVehicleType(type) {
    var vehicaleType = type;

    return ()=>{
        console.log(vehicaleType);
    }
}

let gettype = setVehicleType("Car");

gettype();



// Currying 

function add (n1, n2, n3, n4) {
    return n1+n2+n3+n4;
}

let sum = add(1,2,3,4);
console.log(sum);

let add2 = (n1) => (n2)=>(n3)=>{
    return n1+n2+n3;
 }

 let sum2 = add2(2)(3)(4);
 console.log(sum2)

 let addTo5 = add2(2)(3);

 let sum5 = addTo5(10);
 console.log(sum5);

 
