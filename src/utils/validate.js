const checkValidData = (email,password) => {
    const isEmailValid= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);

    if(!isEmailValid && !isPasswordValid) return "Email & password are not valid"
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "password is not valid"
    return null;
}

export default checkValidData;