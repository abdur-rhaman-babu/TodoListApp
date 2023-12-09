export default function getDatafromLs (){
    let Data =  localStorage.getItem('todos')
    return Data ?  JSON.parse(Data) : []
     
 }
 