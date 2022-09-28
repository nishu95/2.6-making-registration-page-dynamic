const posts=[
    {title:'post One',body:'this is post One',createdAt:new Date().getTime() },
    {title:'post Two',body:'this is post Two',createdAt:new Date().getTime()}
];

function getposts(){
    setTimeout(() => {
        output='';
        posts.forEach((post,index) => {
            output+=`<li>${post.title} -- last updated ${(new Date().getTime() - post.createdAt)/1000} second ago</li>`;
        });
        document.body.innerHTML=output;
    },1000);

}

function createpost(post,callback){
    setTimeout(() => { 

        posts.push({...post,createdAt:new Date().getTime()});

        callback();

    },2000);
}

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post , createdAt:new Date().getTime()});
        callback();
    },6000);
}

createpost({title:'post three',body:'this is post three'},getposts);
create4thPost({title:'post four',body:'this is post four'},getposts);



