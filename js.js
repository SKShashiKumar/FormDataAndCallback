// CallBack


// Basic
function fun1(){
    console.log("Hellow Its Fun1");
  }
 function fun2(){
    console.log("This is from Fun2 ");
  }
 first();
 second();



//  SetTimeout 
    function myMessage (str) {
        setTimeout(() => {
            console.log("Getting Message after 5 Sec");
        }, 5000);
    }

// We can Send Function as Parameters
function addition(x, y , callback){
    setTimeout(() => {
    console.log(`The sum of ${x} and ${y} is ${x+y}.`); 
    callback(); 
     }, 5000); 
} 
function display(){ 
    console.log('Numbers added!'); 
} 

addition(5,5,display);



// async And Await
const asyncAwait = async () => {
    await myMessage;
    display()
}




// Getting Image

function displayImage() {
    let uploaded_image

    const reader = new FileReader()
    
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
    })
    
    
    document.querySelector('#imageDis').style.backgroundImage = url($uploaded_image)

    reader.readAsDataURL(this.files[0])
}







//  FOrm Data

// console.log('Hai')

// let fd = new FormData()

// fd.append('name','Shashi')
// fd.append('DateNow',Date.now())

// console.log(fd)
// console.log(Array.from(fd))

// for(let arr of Array.from(fd))
// {
//     console.log(arr)
// }

// function printData(e) {
//     e.preventDefault();

//     // console.log(e.target.name)
//     // console.log(e.target.id)
//     // console.log(e.target.type)
//     // console.log(e.target.nodeName)
//     // console.log(e.target.className)
//     // console.log(e.target.value)

//     let MyForm = e.target.value
//     let fd = new FormData(MyForm)

//     fd.append('name',"Shih")

//     console.log(Array.from(fd))
// }

function getFromData(e){
    e.preventDefault();

    let MyForm = e.target;
    let fd = new FormData(MyForm)

    // console.log(Array.from(fd))

    for(let key of fd.keys())
    {
        console.log(key, fd.get(key))
    }
}

// Convert Array to Json
 function convertFD2Json(formData){
     let obj = new Object();
     for (let key of formData.keys()){
         obj[key] = formData.get(key)
     }
     return obj
 }

 
let json = await convertFD2Json(fd)



