var form=document.getElementById('form');
form.addEventListener('submit',addlocal);

var userList=document.getElementById('list');

function addlocal(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    //console.log(name);
    var email=document.getElementById('email').value;
    //console.log(email);

    const object={
        name,
        email
    };

    // network call to crudcrud
    axios.post("https://crudcrud.com/api/424368dcd3e24afe92d1fe977a05eca9/appointmentData",object)
        .then((response)=>{
            showNewUserOnTheScreen(response.data);
            console.log(response);
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML+"<h4> SOMETHING WENT WRONG </h4>";
            console.log(err);
        });



    //localStorage.setItem(object.objmail,JSON.stringify(object));

    //showNewUserOnTheScreen(object);
    document.getElementById('name').value=' ';
    document.getElementById('email').value=' ';

    // window.location.reload();         // this is to refresh the page (we r using this considering we want to show unique name with emails)
    

}

function showNewUserOnTheScreen(obj){
    
    const parentNode=document.getElementById("list");
    const childHTML=`<li id=${obj._id}>${obj.name} - ${obj.email}
                        <button onclick=deleteUser('${obj._id}')>DELETE</button>
                        <button onclick=editUser('${obj._id}','${obj.name}','${obj.email}')>EDIT</button>
                        </li>`

    parentNode.innerHTML = parentNode.innerHTML +childHTML;

}


 
    
function editUser(UserId,Name,emailId){
        document.getElementById("email").value=emailId;
        document.getElementById("name").value=Name;
    
        deleteUser(UserId);
}
    
    
    
    

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/424368dcd3e24afe92d1fe977a05eca9/appointmentData/${userId}`)
        .then((response)=>{
            console.log(response);
            removeUserFromScreen(userId);
        })
        .catch((error)=>{
            document.body.innerHTML=document.body.innerHTML+"<h4> SOMETHING WENT WRONG </h4>";
            console.log(error);
        });
}

// this below function is for ux to be updated in case same unique email is used for diffrent name, so what we do is remove that li element and add the new one
function removeUserFromScreen(userId){
    const parentNode=document.getElementById('list');
    const childNodeToBeDeleted=document.getElementById(userId);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted);
    }
}


document.addEventListener('DOMContentLoaded',refresh);
function refresh(e){
    e.preventDefault();
    
    axios.get("https://crudcrud.com/api/424368dcd3e24afe92d1fe977a05eca9/appointmentData")
        .then((response)=>{
            console.log(response.data);

            for(var i=0;i<response.data.length;i++){
                showNewUserOnTheScreen(response.data[i]);
            }
        })
        .catch((error)=>{
            console.log(error);
        });
}




/*rid.addEventListener('click',deletion);
function deletion(e){
    e.preventDefault();
    var goal=e.target;
    console.log(e.target);
}*/



