var form=document.getElementById('form');
form.addEventListener('submit',addlocal);

var userList=document.getElementById('list');

function addlocal(e){
    e.preventDefault();
    var expense=document.getElementById('expense').value;
    //console.log(name);
    var description=document.getElementById('description').value;
    //console.log(email);
    var category=document.getElementById('category').value;

    const object={
        expense,
        description,
        category
    };

    // network call to crudcrud
    axios.post("https://crudcrud.com/api/40fd13853937428fa3bd7cd88b3c854a/appointmentData",object)
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
    document.getElementById('expense').value=' ';
    document.getElementById('description').value=' ';
    document.getElementById('category').value=' ';


    // window.location.reload();         // this is to refresh the page (we r using this considering we want to show unique name with emails)
    

}

function showNewUserOnTheScreen(obj){
    
    const parentNode=document.getElementById("list");
    const childHTML=`<li id=${obj._id}>${obj.expense} - ${obj.description} - ${obj.category}
                        <button onclick=deleteUser('${obj._id}')>DELETE</button>
                        <button onclick=editUser('${obj._id}','${obj.expense}','${obj.description}','${obj.category}')>EDIT</button>
                        </li>`

    parentNode.innerHTML = parentNode.innerHTML +childHTML;

}


 
    
function editUser(UserId,expense,description,category){
        document.getElementById("expense").value=expense;
        document.getElementById("description").value=description;
        document.getElementById("category").value=category
    
        deleteUser(UserId);
}
    
    
    
    

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/40fd13853937428fa3bd7cd88b3c854a/appointmentData/${userId}`)
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
    
    axios.get("https://crudcrud.com/api/40fd13853937428fa3bd7cd88b3c854a/appointmentData")
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



