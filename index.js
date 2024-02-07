function validCredentials (email,password){
    const validEmail = "2200704487@gmail.com";
    const validPassword = "#connectMail"
    if(email===validEmail && password === validPassword) {
        console.log(`Your email is ${email},login successfull`)
    }
    else
    {
        console.log(`Invalid email or Password, Try again`)
    }
}

//valid crudentials
validCredentials("2200704487@gmail.com","#connectMail")