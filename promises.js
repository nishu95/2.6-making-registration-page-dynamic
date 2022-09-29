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
        },0);
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

// deliverable 3
createpost({title:'post three',body:'this is three'}).then(()=>{
    getposts();
    deletepost().then(()=>{
        getposts();
        deletepost().then(()=>{
            getposts();
            deletepost().then(()=>{
                getposts();
                deletepost().then().catch((err) => console.log('inside catch block',err));
            });
        });
    });
}).catch((err)=>console.log(err));
    





//console.log(posts);

function create4thPost(post){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            posts.push({...post , createdAt:new Date().getTime()});
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('something went wrong')
            }
        },0);
    
    });
}
create4thPost({title:'post four',body:'this is four'}).then(()=>{
    setTimeout(()=>{
        getposts();
        deletepost().then(()=>console.log('4th is deleted')).catch((err)=>console.log(err));
    },1000);
});



const promise1= Promise.resolve('hello world');
const promise2=10;
const promise3=new Promise((resolve,reject) => setTimeout(resolve,2000,'goodbye'));

const promise4=fetch('https://jsonplaceholder.typicode.com/users');

const promise5=fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());    // this gives actual data


Promise.all([promise1,promise2,promise3,promise4,promise5]).then(values => console.log(values));

*/

   /* promise.all property:- The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves 
to an array of the results of the input promises. This returned promise will fulfill when all of the input's promises have fulfilled, or if 
the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and 
will reject with this first rejection message / error.*/



// promise.all assignment
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
        },1000);
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
        },2000);
    });
}


const user={
    name:'yash',
    lastactivitytime:'13 april'
}

function updatelastactivitytime(user){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            user.lastactivitytime= new Date().getTime();
            resolve(user.lastactivitytime);
            reject('something went wrong in updatelastactivitytime');
        },1000)
    });
}


console.log('before creating post 3, user last activity time: ',user.lastactivitytime);

function userupdatesapost(){
    Promise.all([createpost({title:'post three',body:'this is three'}),updatelastactivitytime(user)]).then(([createpostresolve,updatelastactivitytimeresolve])=>{
        console.log('after creating post 3>>>>>>>>>>')
        console.log(posts);
        console.log('user was last active on',updatelastactivitytimeresolve);
        getposts();
        deletepost().then(()=>getposts());
        console.log(posts);

    }).catch((err)=>console.log(err));
    
}

userupdatesapost();

/*
createpost({title:'post three',body:'this is three'}).then(()=>{
    getposts();
    deletepost().then(()=>{getposts();}).catch((err)=>console.log(err));
    

}).catch((err)=>console.log(err));
*/
