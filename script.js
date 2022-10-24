// let year=2022;
// const apiurl=`https://date.nager.at/api/v3/publicholidays/${year}/AT`
// async function holidays(){

//     let res=await fetch(apiurl)
    
//         let data=await res.json()
//     console.log(data)
//     console.log(data.length)
//     for(i=0;i<13;i++){
//     console.log(data[i].name)
//     let parent=document.createElement('p')
//     parent.innerText=data[i].name
//     document.body.append(parent)
// }
// }
// holidays()


// let option=document.getElementById("selectNumber")
// option.addEventListener("click",()=>{
//     let Number=1;
    // let apiurl="https://biriyani.anoram.com/get"
    // console.log(apiurl);
    // let num=4
    // let apiurl1=`https://biriyani.anoram.com/${num}.jpg`
    // console.log(apiurl1);
    // fetch(apiurl1)
    // .then((response)=>response.json())
    // .then((data)=>{
    //     console.log(data)
    // })
// let child=document.createElement('img')
// child.src=apiurl1
// document.getElementById("image").append( child);



    // async function biryani(){
    //     let res=await fetch(apiurl1)
    //         let data=await res.json()
    //     console.log(data);
    // }
// })
// biryani()
// let num=3
// let api=`https://biriyani.anoram.com/${num}.jpg`
// let apiurl="https://biriyani.anoram.com/get"
// async function biryani(){
//         let res=await fetch(apiurl)
//             let data=await res.json()
//         console.log(data);
//         let value=Object.values(data)[0]
//         console.log(Object.values(data)[0]);
//         let parent= document.createElement('img')
//         parent.src=value
//         document.body.append(parent)
//     }

// biryani()


// let num=3
// let apiurl=`https://biriyani.anoram.com/img/${num}.jpg`
// let apiurl="https://biriyani.anoram.com/get"
// async function biryani(){
//         let res=await fetch(apiurl)
//             let data=await res.json()
//         console.log(data);
//         console.log(Object.values(data)[0]);
// }
// biryani()
//         let inputValue=Object.values(data)[0]
//         console.log(Object.values(data)[0]);
//         let parent= document.createElement('img')
//         parent.setAttribute('src',`${inputValue}`)
//         // parent.src=inputValue;
//         console.log(parent)
//         document.getElementById("outputImage").append(parent)
//         document.getElementById('outputImage').setAttribute("id","image1");
       


let searchButton=document.getElementById("btn");
        searchButton.addEventListener('click',()=>{
            let apiurl="https://biriyani.anoram.com/get"
            
            
            async function biryani(){
                    let res=await fetch(apiurl)
                        let data=await res.json()
                    console.log(data);
                    console.log(Object.values(data)[0]);
                    let parentDiv= document.createElement('div')
                    let parent= document.createElement('img')
                    console.log(parent)
                    parent.style.width="60%";
                    parent.style.height="60%";
                    parent.src=Object.values(data)[0];
                    parentDiv.append(parent)
                    document.getElementById("output").append(parentDiv);
                    
                     
        }
        biryani()
    })


