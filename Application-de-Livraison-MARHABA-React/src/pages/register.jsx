import React from 'react'
import LoginImg from '../assets/Computer login.gif'
import Logo from '../assets/Marhaba Logo.png'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook (1).png'
export default function register() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full ' src={LoginImg} alt='Login img'/>
            </div>
            <div className='bg-neutral-50 flex flex-col justify-center'>
                <div className='max-w-[500px] w-full mx-auto bg-white p-8 px-8 rounded-lg shadow-lg'>
                    <div className='space-y-4'>
                        <a href="">
                            <img src={Logo} className = 'w-40'  alt="" />
                        </a>
                        <p className='text-lg text-gray-600'>Welcome to Marhaba ! Login first</p>
                    </div>

                    <div className='mt-12 grid gap-6 sm:grid-cols-2'>
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

                    <div className='mt-12 border-t'>
                        <span className='block w-max mx-auto -mt-3 px-4 text-gray-500 bg-white'>Or</span>
                    </div>

                    <form action="" className='space-y-6'>
                        <div>
                            <input type="text" 
                            placeholder='Your name !'
                            className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                        />
                        </div>

                        <div>
                            <input type="email" 
                            placeholder='Your email !'
                            className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                        />
                        </div>

                        <div className='flex flex-col items-end'>
                            <input type="password" 
                            placeholder="what's the secret word ?"
                            className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                        />
                        <button className='p-3 -mr-3'>
                            <span className='text-yellow-300'>Forgot password ?</span>

                        </button>
                        </div>

                        <div>
                            <button type='submit' className='block w-full px-6 py-3 rounded-xl bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-500'>
                                <span className='text-lg text-white'>Login</span>
                            </button>
                            <a href="" className='p-3 -ml-3'>
                                <span className='text-yellow-300'>Create new account</span>
                            </a>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    )
}
