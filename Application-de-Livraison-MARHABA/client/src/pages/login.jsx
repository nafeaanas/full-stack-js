import React from 'react'
import LoginImg from '../assets/Computer login.gif'
import Logo from '../assets/Marhaba Logo.png'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook (1).png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { Lang, useFormInputValidation } from "react-form-input-validation";
import axios from "axios";
import Cookies from "universal-cookie";
const  cookies = new Cookies();

export default function Login() {
    console.log('register' )

        const [fields, errors, form] = useFormInputValidation(
            {
                email: "",
                password: ""
            },
            {
                email: "required|email",
                password: "required",
            }
        );


        form.useLang(Lang.en);

        // let messages = form.getMessages(Lang.en);
        // console.log(messages);

        const onSubmit = async (event) => {
            console.log('onsubmit')
            const isValid = await form.validate(event);
            if (isValid) {

                console.log("MAKE AN API CALL", fields, errors);
                // let name = fields.name ;
                let email = fields.email ;
                let password =fields.password ;
                
                
                const configuration =
                    {
                        method: "POST",
                        url: "http://localhost:8000/api/auth/login",
                        data: {
                            email,
                            password,
                            // name,
                            // role,
                        },
                        config: { headers: { 'Content-Type': 'multipart/form-data' } }
                    };
                    axios(configuration)
                        .then((result) => {
                            console.log(result.data)
                            cookies.set("TOKEN", result.data.token, {
                                path: "/",
                                })
                            // setLogin(true);
                            window.location.href = "/home";
                            // setRegister(true);
                            // setError(null);
                        })
                        .catch((error) => {
                            console.log(error);
                            // setError(error.response.data.message);
                            // setRegister(false);
                            error = new Error();
                        });
            }
        };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full ' src={LoginImg} alt='Login img' />
            </div>
            <div className='bg-neutral-50 flex flex-col justify-center'>
                <div className='max-w-[460px] w-full mx-auto bg-white p-5 px-8 rounded-lg shadow-lg'>
                    <div className='space-y-2'>
                        <a href="">
                            <img src={Logo} className='w-40' alt="" />
                        </a>
                        <p className='text-lg text-gray-600'>Hey welcome back 👋 Login first</p>
                    </div>

                    <div className='mt-6 grid gap-6 sm:grid-cols-2'>
                        <button className='py-3 px-6 bg-yellow-50 rounded-xl transition '>
                            <span className='flex justify-center gap-4'>
                                <img className='w-5' src={Google} alt="google logo" />
                                <span className='text-sm tracking-wide font-semibold text-yellow-300'>With Google</span>
                            </span>
                        </button>

                        <button className='py-3 px-6 bg-blue-50 rounded-xl transition '>
                            <span className='flex justify-center gap-4'>
                                <img className='w-5' src={Facebook} alt="google logo" />
                                <span className='text-sm tracking-wide font-semibold text-blue-500'>With Facebook</span>
                            </span>
                        </button>
                    </div>

                    <div className='mt-7 border-t'>
                        <span className='block w-max mx-auto -mt-3 px-4 text-gray-500 bg-white'>Or</span>
                    </div>

                    <form noValidate autoComplete="off" onSubmit={onSubmit} className='pt-4 space-y-6'>
                        <div>
                            <input type="email"
                            name="email"
                            onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.email}
                                placeholder='Your email !'
                                className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                            />
                            <span className='text-sm text-red-600'>{errors.email ? errors.email : ""}</span> 
                        </div>

                        <div className='flex flex-col items-end'>
                            <input type="password"
                            name="password"
                            onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.password}
                                placeholder="what's the secret word ?"
                                className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                            />
                            <span className='text-sm text-red-600'>{errors.password ? errors.password : ""}</span> 
                            <p className='p-1 px-3 -mr-3'>
                                <span className='text-yellow-300'><NavLink to="/forgot">Forgot password ?</NavLink></span>

                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <button type='submit' className='block w-full px-7 py-3 rounded-xl bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-500'>
                                <span className='text-lg text-white'>Login</span>
                            </button>
                            <p className='p-1 text-center'>
                                <span className='text-yellow-300'><NavLink to="/register">Create new account</NavLink></span>
                            </p>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    )
}
