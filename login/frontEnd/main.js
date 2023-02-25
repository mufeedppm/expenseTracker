document.getElementById('loginForm').addEventListener('submit',userLogin)
const emailInput = document.getElementById('email');
const password = document.getElementById('password')



async function userLogin(e){
    try{
        e.preventDefault();
        let obj ={
            
            email:emailInput.value,
            password: password.value
            
        }
         axios.post("http://localhost:3000/user/login",obj)
        if(response.data.errors[0].message===''){
            alert('User already exists')
        }
        console.log(response);
    }catch(err){
        console.log(err)
    }

}