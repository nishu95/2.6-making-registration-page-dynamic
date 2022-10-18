var form=document.getElementById('form');
form.addEventListener('submit',addlocal);

var userList=document.getElementById('list');

function addlocal(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    //console.log(name);
    var email=document.getElementById('email').value;
    //console.log(email);

    let object={
        objname:name,
        objmail:email
    };

    // network call to crudcrud
    axios.post("https://crudcrud.com/api/04d26cfbfa11433e93946ca29e3c0afb/appointmentData",object)
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
    //var my_objdesearialized=JSON.parse(localStorage.getItem(key));
    //console.log(my_objdesearialized.objname);
    //console.log(my_objdesearialized.objmail);

    if(localStorage.getItem(obj.objmail)!==null){   // if the unique email exist in the UI list
        removeUserFromScreen(obj.objmail);
    }

    var li=document.createElement('li');
    li.className='tag';
    li.id=obj.objmail;

    var text=document.createTextNode(obj.objname+' '+obj.objmail);
    li.innerText=obj.objname+' '+obj.objmail;

    var deletebtn=document.createElement('button');
    deletebtn.className='deletebtn';
    deletebtn.style.color='white';
    deletebtn.innerText='DELETE';
    deletebtn.id=obj.objmail;
    deletebtn.style.backgroundColor='blue';

    deletebtn.addEventListener('click',()=>{
        localStorage.removeItem(obj.objmail);
        li.remove();
    });

    var editbtn=document.createElement('button');
    editbtn.className='editbtn';
    editbtn.style.color='white';
    editbtn.innerText='EDIT';
    editbtn.id=obj.objmail;
    editbtn.style.backgroundColor='orange';

    editbtn.addEventListener('click',()=>{
        console.log(obj);
        document.getElementById('name').value=obj.objname;
        document.getElementById('email').value=obj.objmail;
        li.remove();
    });
    console.log('hello');
    li.appendChild(deletebtn);
    li.appendChild(editbtn);
    console.log(li);


    userList.appendChild(li);

    

}

// this below function is for ux to be updated in case same unique email is used for diffrent name, so what we do is remove that li element and add the new one
function removeUserFromScreen(email){
    var parentNode=document.getElementById('list');
    var childNodeToBeDeleted=document.getElementById(email);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted);
    }
}


document.addEventListener('DOMContentLoaded',refresh);
function refresh(e){
    e.preventDefault();
    
    
    Object.keys(localStorage).forEach(function(key){
        console.log(localStorage.getItem(key));
        var my_objdesearialized=JSON.parse(localStorage.getItem(key));
        console.log(my_objdesearialized.objname);
        console.log(my_objdesearialized.objmail);

        showNewUserOnTheScreen(my_objdesearialized);
    

    });
}




/*rid.addEventListener('click',deletion);
function deletion(e){
    e.preventDefault();
    var goal=e.target;
    console.log(e.target);
}*/



