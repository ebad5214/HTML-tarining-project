import React, { useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import './Form.css'


const Form = props => {
    
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [female, setFemale] = useState('')
    const [male, setMale] = useState('')
    const [other, setOther] = useState('')
    //-------------------------------------------------------------------------

    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    const formSubmitHandler = event => {
       event.preventDefault();
       if(name.trim().length === 0){
           setError({
               title: "This field can't be empty",
               message: "Please Enter your Name !"
           })
           return;
       }
       if(email.trim().length === 0){
           setError({
            title: "This field can't be empty",
            message: "Please Enter your e-Mail !"
           })
           return;
       }
       if(number.length === 0){
           setError({
            title: "This field can't be empty",
            message: "Please Enter your Mobile Number !"
           })
           return;
       }else if(number.length > 10){
           setError({
               title: "Invalid Input",
               message: "Mobile number cannot exceed more than 10 Character !"
           })
           return;
       }
       if(password.length < 6){
           setError({
               title: "Invalid Input",
               message: "Password cannot be less than 6 Character !"
           })
           return;
       }
       if(password !== passwordAgain){
           setError({
               title: "Password dose not Matched",
               message: "password must be same as Above !"
           })
           return;
       }
       console.log(name,number,email,password,passwordAgain,female,male,other)
    //    props.onFormSubmit(name,number,email,password,passwordAgain,female,male,other)
        props.onAddUser(name,number,email,password,passwordAgain,female,male,other)
    
       setName("")
       setNumber("")
       setEmail("")
       setPassword("");
       setPasswordAgain("")
       setFemale("")
       setMale("")
       setOther("")
    }
     
    const inputName = event => {
        setName(event.target.value)
    }
    const inputNumber = event => {
        setNumber(event.target.value)
    }
    const inputEmail = event => {
        setEmail(event.target.value)
    }
    const inputPassword = event => {
        setPassword(event.target.value)
    }
    const inputPasswordAgain = event => {
        setPasswordAgain(event.target.value)
    }
    const inputFemale = event => {
        setFemale(event.target.value)
    }
    const inputMale = event => {
        setMale(event.target.value)
    }
    const inputOther = event => {
        setOther(event.target.value)
    }

    return(
        <div>
            {error && <Modal title = {error.title}  message = {error.message} onConfirm = {errorHandler}/>}
          <div className="container-fluid">
            <section>
            <div className='container'>
                        <form action='submit' name='myForm' onSubmit={formSubmitHandler}>
                            <div className='Box rounded border '>
                                <h2 className='ms-4 mt-3'>Create Account</h2>
                                <div className='mb-3 mt-3 ms-4 me-4'>
                                    <label htmlFor='name' className='form-label font-weight-normal'>Enter Your Name</label>
                                    <input type={'text'} className='form-control' id='name' placeholder='Enter your Name' name='name' onChange={inputName} value={name}/>
                                </div>
                                <div className='mb-3 mt-3 ms-4 me-4'>
                                    <label htmlFor='mobilenumber' className='form-label font-weight-normal'>Enter Your Mobile Number</label>
                                    <input type={'number'} className='form-control' id='number' placeholder='Enter your Mobile Number' name='number' onChange={inputNumber} value={number}/>
                                </div>
                                <div className='mb-3 mt-3 ms-4 me-4'>
                                    <label htmlFor='email' className='form-label font-weight-normal'>Enter Your e-Mail ID</label>
                                    <input type={'email'} className='form-control' id='email' placeholder='Enter your e-Mail' name='email' onChange={inputEmail} value={email}/>
                                </div>
                                <div className='mb-3 mt-3 ms-4 me-4'>
                                    <label htmlFor='password' className='form-label font-weight-normal'>Create Your Password</label>
                                    <input type={'password'} className='form-control' id='password' placeholder='Enter your Password' name='password' onChange={inputPassword} value={password}/>
                                </div>
                                <div className='col-auto mb-3 mt-3 ms-4 me-4'>
                                    <span id='passwordHelpInline' className='form-text'>
                                        <em style={{ color: 'rgb(22, 155, 207)' }}><b>i</b></em> &nbsp;Passwords must be at least 6 characters Long
                                    </span>
                                </div>
                                <div className='mb-3 mt-3 ms-4 me-4'>
                                    <label htmlFor='passwordagain' className='form-label font-weight-normal'>Enter Password Again</label>
                                    <input type={'password'} className='form-control' id='passwordagain' placeholder='Enter your Password Again' name='passwordagain' onChange={inputPasswordAgain} value={passwordAgain}/>
                                </div>
                                <fieldset className='col-auto mb-3 mt-3 ms-4 me-4'>
                                    <legend className='col-form-label col-sm-2 pt-0'>Gender</legend>
                                    <div className='col-sm-10' >
                                        <div className='form-check'>
                                            <input className='form-check-input' type={'radio'} name='gender' id='gender' value={ 'Female' } onChange={inputFemale}/>
                                            <label className='form-check-label' htmlFor='female'>
                                                Female
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type={'radio'} name='gender' id='gender' value={ 'Male' } onChange={inputMale}/>
                                            <label className='form-check-label' htmlFor='male'>
                                                Male
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type={'radio'} name='gender' id='gender' value={ 'Other' } onChange={inputOther}/>
                                            <label className='form-check-label' htmlFor='Other'>
                                                Other
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className='d-grid gap-2 mb-3 mt-3 ms-4 me-4'>
                                    <Button type="submit">Sing Up</Button>
                                </div>
                                <div className='ms-3 text-muted'>
                                    <p>By creating an account or logging in, you agree to <a href='/'> Term's and Conditions </a> of use and <a href='/'>Privacy Policy</a>.</p>
                                </div>
                                <hr className='dotted' />
                                <div className='ms-3'>
                                    <p>Already have an account? <a href="/">Sign in</a><br />
                                        Buying for work? <a href="/">Create a free business account</a></p>
                                </div>
                            </div>
                        </form>
                    </div>
            </section>
          </div>
          </div>
        
    )
}

export default Form;