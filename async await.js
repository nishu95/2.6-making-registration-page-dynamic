/*
const posts=[
    {title:'post One',body:'this is post One',createdAt:new Date().getTime()},
    {title:'post Two',body:'this is post Two',createdAt:new Date().getTime()}
];

function getposts(){
    // use setInterval for continuous updation every 1000 seconds
    setTimeout(() => {
        output='';
        posts.forEach((post,index) => {
            output+=`<li>${post.title} -- last updated ${(new Date().getTime() - post.createdAt)/1000} second ago</li>`;
        });
        document.body.innerHTML=output;
    },1000);

}

function createpost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => { 
            posts.push({...post,createdAt:new Date().getTime()});

            const error=false;

            if(!error){
                resolve();
            }else{
                reject('something went wrong');
            }
        },2000);
    });
}

function deletepost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            
            if(posts.length>0){
                const lastelement=posts.pop();
                resolve(lastelement);
            }
            else{
                reject('array is empty now ');
            }
        },1000);
    });
}

// Async/Await

async function init(){
    await createpost({title:'post three',body:'this is three'});

    getposts();

    await deletepost();

    getposts();
}

init();
*/
/*
// Async/Await/Fetch   (fetch is a kind of promise)

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); 

    const data= await res.json();

    console.log(data);
}

fetchUsers();
*/


console.log('person1: show ticket');
console.log('person2: show ticket');

/*
// wife bringing ticket promise
const wifebringingticket= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000);
});

// wifebringingticket.then((t)=>{  //wife bringing ticket promise output
//     console.log(`person3:show ${t} `);
// })

// husband promise to get popcorn coz wife hungry
const getpopcorn= wifebringingticket.then((t)=>{
    console.log("wife: i have the tickets");
    console.log("husband: let's go in");
    console.log("wife: i am hungry");
    return new Promise((resolve,reject)=>{
        resolve(`brought popcorn for wife for ${t}`);
    })
});

// getpopcorn.then((t)=> console.log(t));  // husband promise to get popcorn coz wife hungry output

// now wife need butter on popcorn
 
const wifeneedbutter= getpopcorn.then((t)=>{
    console.log("husband: i got the popcorn");
    console.log("husband: we should go in");
    console.log("wife: i need butter on popcorn");
    return new Promise((resolve,reject)=>{
        resolve(`brought butter for wife ${t}`);
    })
});

// now wife need drink
const wifeneeddrink=wifeneedbutter.then((t)=>{
    console.log("husband: i got the butter");
    console.log("wife: i need cold drink");
    return new Promise((resolve,reject)=>{
        resolve(`brought cold drink for wife ${t}`);
    })
});

wifeneeddrink.then((t)=>{console.log(t)});
*/

// for the above same situation we can also create async await function for the same which wiill be much understandable and much tidy

/*
const premovie= async ()=>{
    const wifebringingticket= new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve('ticket')  },3000);
        });

    const getpopcorn= new Promise((resolve,reject)=>{
        resolve(`popcorn`);
    });

    const getbutter= new Promise((resolve,reject)=>{
        resolve(`butter`);
    });

    const getcoldrink=new Promise((resolve,reject)=>{
        resolve(`cold drink`);
    });


    const ticket = await wifebringingticket;

    console.log(`wife: i have the ${ticket}`);
    console.log("husband: let's go in");
    console.log("wife: i am hungry");

    const popcorn=await getpopcorn;
    console.log(`husband: i got the ${popcorn}`);
    console.log("husband: we should go in");
    console.log("wife: i need butter on popcorn");

    const butter=await getbutter;
    console.log(`here your ${butter}`);
    console.log("husband: do you need anything else?");
    console.log("wife: i need a cold drink too");

    const drink=await getcoldrink;
    console.log(`here is your ${drink}`);
    console.log("wife: let's go we are getting late for the movie");
    console.log("husband: no shit sherlock *smiles with anger*");


    return ticket;
    
}

premovie().then((m)=>console.log(`person3: show ${m}`));
*/

// using promise.all
/*
const premovie= async ()=>{
    const wifebringingticket= new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve('ticket')  },3000);
        });

    const getpopcorn= new Promise((resolve,reject)=>{
        resolve(`popcorn`);
    });

    const getcandy= new Promise((resolve,reject)=>{
        resolve(`candy`);
    });

    const getcolke=new Promise((resolve,reject)=>{
        resolve(`coke`);
    });


    const ticket = await wifebringingticket;
    let [popcorn,candy,coke]=await Promise.all([getpopcorn,getcandy,getcolke])
    
    console.log(`${popcorn},${candy},${coke}`);
    return ticket;
    
}

premovie().then((m)=>console.log(`person3: show ${m}`));
*/

// 
/*
const premovie= async ()=>{
    const wifebringingticket= new Promise((resolve,reject)=>{
        setTimeout(()=>{ reject('ticket')  },3000);
        });
    let ticket;
    try{
        ticket = await wifebringingticket;
    }catch(c){
        ticket='sad face';
    }
    
    return ticket;
    
}

premovie().then((m)=>console.log(`person3: show ${m}`));
*/


console.log('person4: show ticket');
console.log('person5: show ticket');

/*
// Convert the createPost , deletePost you wrote previously into async await completely. 

const posts=[
    {title:'post One',body:'this is post One',createdAt:new Date().getTime()},
    {title:'post Two',body:'this is post Two',createdAt:new Date().getTime()}
];

function getposts(){
    // use setInterval for continuous updation every 1000 seconds
    setTimeout(() => {
        output='';
        posts.forEach((post,index) => {
            output+=`<li>${post.title} -- last updated ${(new Date().getTime() - post.createdAt)/1000} second ago</li>`;
        });
        document.body.innerHTML=output;
    },1000);

}


// Async/Await 
async function init(){
    try{
        function createpost(post){ 
            return new Promise((resolve,reject) => {
    
            setTimeout(() => { 
                posts.push({...post,createdAt:new Date().getTime()});
        
                const error=false;
        
                if(!error){
                    resolve();
                }else{
                    reject('something went wrong');
                }
                },2000);
            });
        }
        
        function deletepost(){
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    
                    if(posts.length>0){
                        const lastelement=posts.pop();
                        resolve(lastelement);
                    }
                    else{
                        reject('array is empty now ');
                    }
                },1000);
            });
    
         }
        
        
        await createpost({title:'post three',body:'this is three'});
    
        getposts();
    
        await deletepost();
    
        getposts();

    }catch(err){
        console.log(err);
    }
    

}

init();
*/
 
// example on promises and async await

function buycar(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('buy a car');

        },10000)
    })
}

function planatrip(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('let us go to manali');
            
        },2000)
    })
}

function reachmanali(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('reached manali');
            
        },2000)
    })
}

function gotofamous(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('let us go to mall road');
            
        },2000)
    })
}

// with promises
buycar().then((res)=>{
    console.log(res);
    planatrip().then((res)=>{
        console.log(res);
        reachmanali().then((res)=>{
            console.log(res);
            gotofamous().then((res)=>{
                console.log(res);
            })
        })
    })
})

// with async/await
async function vacation(){
    try{
        const msg1=await buycar();
        console.log(msg1);
        const msg2=await planatrip();
        console.log(msg2);
        const msg3=await reachmanali();
        console.log(msg3);
        const msg4=await gotofamous();
        console.log(msg4);
    }catch(err){
        console.log(err);
    }

}

vacation();
