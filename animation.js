const form=document.querySelector('.Form');

const Name=document.querySelector('.Name');

const Email=document.querySelector('.Email');

const items=document.querySelector('#users');

const error=document.querySelector('#error');



form.addEventListener('submit',add);



function add(e){

  e.preventDefault();

  if (Name.value==="" || Email.value===""){



    error.innerHTML="* Please provide details";



    setTimeout(()=>error.remove(),3000);



  }



  else{

  

  const UName=Name.value;

  const UEmail=Email.value;

  const obj={

    UName,

    UEmail

  }

  

  axios

  .post('https://crudcrud.com/api/1be633c2872b45d886c8d96385e2f54d/userDetails',obj)

  .then((response)=>

  {showUserOnScreen(response.data);console.log(response)})

  .catch(err=>{alert("something went wrong");console.log(err)});





  



 

}

}

function showUserOnScreen(display){

  const li=document.createElement('li');



  li.className='userlist';





  const textNode=document.createTextNode(display.UName +' : '+ display.UEmail+' ');



  li.appendChild(textNode);

  items.appendChild(li);



  const edit_Button=document.createElement('input');

  edit_Button.type='button';

  edit_Button.className='Edit';

  edit_Button.id=`${display._id}`;

  edit_Button.value="Edit"





  li.append(edit_Button);

  



  const li_Button=document.createElement('input');



  li_Button.className='Delete';

  li_Button.id=`${display._id}`

  li_Button.type='button';

  li_Button.value='Delete'



  li.appendChild(li_Button);

  

  deleteUser(li_Button);

 

  }



 



window.addEventListener('DOMContentLoaded',()=>{

      axios

      .get('https://crudcrud.com/api/1be633c2872b45d886c8d96385e2f54d/userDetails')

      .then((response)=>{console.log(response)

      for(let i=0;i<response.data.length;i++){

        showUserOnScreen(response.data[i])

      }

      })

      .catch(err=>{alert("something went wrong");console.log(err)});

  

})

    

  

  

function deleteUser(buttonId){

  items.addEventListener("click",del);

    function del(e){

      if(e.target.className==='Delete'){

      items.removeChild(e.target.parentNode);

      axios

      .delete(`https://crudcrud.com/api/1be633c2872b45d886c8d96385e2f54d/userDetails/${e.target.id}`)

      .then(response=>console.log(response))

      .catch(err=>console.log(err))

      }

    }

    

}



function updateUser(){

  items.addEventListener("click",del);

    function del(e){

      if(e.target.className==='Edit'){

        items.removeChild(e.target.parentNode);

        axios

        .delete(`https://crudcrud.com/api/1be633c2872b45d886c8d96385e2f54d/userDetails/${e.target.id}`)

        .then(response=>console.log(response))

        .catch(err=>console.log(err))

        let N=e.target.parentElement.textContent.split(':');

        Name.value=N[0];

        Email.value=N[1];

        }



    }

  }

updateUser();

