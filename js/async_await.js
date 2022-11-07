async function resolveSample(){
    return "resolve"
}
resolveSample().then((value)=>{
    console.log(value);
})


async function rejectSample(){
    throw new Error("reject!!")
}
rejectSample().catch((err)=>{
    console.log(err);
})


// function resolveError(){
//     return "resolveError!!"
// }
// resolveError().then((value)=>{
//     console.log(value);
// })
// ↑はasync functionではないためPromiseを返さない


function sampleResolve(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (value * 2)
        },3000)
    })
}
async function sample(){
    const result = await sampleResolve(10)
    return result + 5;
}
sample().then((num)=>{
    console.log(num);
})

const loadingScreen = document.querySelector(".loadingScreen")
console.log(loadingScreen);

const loadingBorder = document.querySelector(".loadingBorder")
console.log(loadingBorder);

function loadingAni(){
    return new Promise((resolve)=>{
        // loadingBorder.animate({
        //     width:["0%","100%"]
        // },{
        //     duration: 1500,
        //     fill:"forwards"
        // })
        loadingScreen.style.opacity = 0;
        loadingScreen.style.visibility = "hidden";
        resolve();
    })
}

loadingAni()

async function loading(){
    loadingAni()
}







