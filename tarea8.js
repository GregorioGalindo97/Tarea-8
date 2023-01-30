let zapatos=[
    {marca:'NIKE', stock:8,precios:150.30},
    {marca:'PUMA', stock:7,precios:80.5},
    {marca:'ADIDAS', stock:6,precios:70.41},
    {marca:'CONVERSE', stock:8,precios:120.8}
];

const marca=zapatos.forEach(elemento=>{
    console.log('marca:'+elemento.marca,", ",'Stock:'+ elemento.stock);
});

const costo=zapatos.filter(elemento=>elemento.precios>200);
console.log(costo);


const cantidad=zapatos.map(ejemplo=>ejemplo.stock)
let promedio=cantidad.reduce((primero,segundo)=>primero+segundo);
console.log('Promedio='+promedio/4);


const orden=zapatos.map(ejemplo=>ejemplo.marca)
let orden1=orden.sort((a,b)=>{
    if(a==b){
        return 0;
    }
    if(a<b){
        return -1;
    }
});
console.log('Orden alfabetico: '+orden1);

let orden2=zapatos.sort((a,b)=>{
    if(a.precios==b.precios){
        return 0;
    }
    if(a.precios>b.precios){
        return -1;
    }
});
console.log(orden2[0]);

