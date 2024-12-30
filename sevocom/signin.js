//import React, { useState } from 'react'
import { Link } from 'signin.html'



    const SignUp=() =>{
        

        const[data,setData]= useState({
            email :"",
            password : "",
            name : "",
            confirmpassword : "",
        })
        const handleOnChange =(e) =>{
            const {name,value} =e.target

            setData((preve)=>{
                return{
                    ...preve,
                    [name]:value
                }
            })
        }
        const handleSubmit =(e) =>{
            e.preventDefalt()
        }
        console.log("data login",data)
  return (
    <section id='sign-up'>
        <div className='mx-auto p-4 container'>
            <div className='p-2 bg-white pt-10 w-full py-5 mx-auto max-w-md'>
                <form className='pt-6 flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='grid'>
                        <label>Name :</label>
                        <div className='p-2 bg-slate-100'>
                            <input type='name' placeholder='enter your name'
                             name='name'
                             value={data.name}
                             onChange={handleOnChange}
                            className='h-full w-full outline-0 bg-transparent'/></div>
                            <div>                        <label>Email :</label>
                        <div className='p-2 
                              bg-slate-100'> <input type='email' placeholder='enter email'
                              name='email'
                              value={data.email}
                              onChange={handleOnChange} 
                              required
                            className='h-full w-full outline-0 bg-transparent'/>
                            </div>
                            <div>                        <label>Password :</label>
                        <div className='p-2 
                              bg-slate-100'> <input type='password' placeholder='enter password'
                              value={data.password}
                              name='password'
                            onChange={handleOnChange} 
                              required
                            className='h-full w-full outline-0 bg-transparent'/>
                            </div></div>
                            <div>
                            <div>                        <label>Confirm password :</label>
                        <div className='p-2 
                              bg-slate-100'> <input type='password' placeholder='confirm password'
                              value={data.confirmPassword}
                              name='confirmPassword'
                            onChange={handleOnChange} 
                            required
                            className='h-full w-full outline-0 bg-transparent'/></div></div></div>
                             <button className='text-white 
                            bg-red-600 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-6 
hover:bg-red-700'>SignUp</button>
                            

                            </div>


                    </div>
                </form>
                <p className='my-5'>Have a account ?<Link to={"/login"} 
                className='text-red-600 
                hover:text-red-700 
hover:underline'>Login</Link></p>

            </div>
            
        </div>

    </section>

  )
}

export default signin.html