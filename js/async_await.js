// async function resolveSample(){
//     return "resolve"
// }
// resolveSample().then((value)=>{
//     console.log(value);
// 結果　"resolve"
// })



// async function rejectSample(){
//     throw new Error("reject!!")
// }
// rejectSample().catch((err)=>{
// .catchでエラーが起きた時の処理
//     console.log(err);
// })
// function resolveError(){
//     return "resolveError!!"
// }
// resolveError().then((value)=>{
//     console.log(value);
// })
// ↑はasync functionではないためPromiseを返さない


// function sampleResolve(value){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve (value * 2)
//         },3000)
//     })
// }
// async function sample(){
//     const result = await sampleResolve(10)
//     return result + 5;
// }
// sample().then((num)=>{
//     console.log(num);
// })





const loadingScreen = document.querySelector(".loadingScreen")
console.log(loadingScreen);

const loadingBorder = document.querySelector(".loadingBorder")
console.log(loadingBorder);

const wrap = document.querySelector(".wrap")
console.log(wrap);

async function loadingDelete(){
    // return new Promise((resolve)=>{
    //         loadingScreen.style.opacity = 0;
    //         loadingScreen.style.visibility = "hidden";
    //         resolve();
        setTimeout(()=>{
            loadingScreen.style.opacity = 0;
            loadingScreen.style.visibility = "hidden";
            // resolve();
        },1500);
    // })
}

function loadingAni(){
            loadingBorder.animate({
            width:["0%","100%"]
        },{
            duration: 1500,
            fill:"forwards"
        })
}


async function loading(){
    await loadingDelete();
    loadingAni();
}

loading()





