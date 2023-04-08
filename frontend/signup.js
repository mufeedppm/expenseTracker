document.getElementById('signUpForm').addEventListener('submit',addUser)
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const password = document.getElementById('password')



async function addUser(e){
    try{
        e.preventDefault();
        let obj ={
            name:nameInput.value,
            email:emailInput.value,
            password:password.value
        }
        const response = await axios.post("http://localhost:3000/user/signup",obj)
        
        
        if(response.status==203){
            alert('user sign up successful')
            window.location.href='../login/index.html'
        }
        else{
            alert(response.data.message);
        }
        
    }catch(err){
        console.log(err)
    }

}