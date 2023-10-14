import React from 'react'
import { FaLinkedin} from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';

import mobileabout from '../../assets/mobileabout.png'
import hero from '../../assets/aboutushero.png'
import UserData from '../../Data/userdata'

export default function Body() {
  return (
    <>
    <div className='flex flex-col lg:hidden'>
        <div className='!h-[700px] !w-full md:!h-[300px]'>
            <img src ={mobileabout}
                className='w-full'
                   alt="spectrum about"/>
        </div>
        <div className='relative mx-[16px] bottom-[100px] md:bottom-[-1000px] left-0 right-0
      md:mx-[45px] py-[24px] px-[16px] rounded-[20px] border-2 border-[#EDEDF2] bg-white shadow-spec'>
        <h1 className='text-[#5F5F8C] font-graphik font-semibold text-[16px] text-center leading-[24px]'>
            Our journey began with a simple idea: to redefine what's possible. Today, that idea has blossomed into a thriving hub of creativity, collaboration, and ingenuity. We take pride in our commitment to delivering outstanding products/services that not only meet but exceed the expectations of our valued customers.
        </h1>
        <h1 className='pt-[16px] text-[#5F5F8C] font-graphik font-semibold text-[16px] text-center leading-[24px]'>
            Rooted in a foundation of expertise and driven by a forward-thinking mindset, we consistently strive to lead the way in our field. Our diverse and talented team brings together a wealth of knowledge, experience, and fresh perspectives, fostering an environment where innovation flourishes.
        </h1>
        </div>
        <div className='md:relative md:bottom-[-1000px] mt-[100px] md:mx-[45px] mx-[16px] flex flex-col space-y-[40px]'>
            {
                UserData.map((user) => (
                <div key={user.id}>   
                    <img src={user.image} alt="wol" className=' rounded-[12px] w-full h-[360px]'/>
                    <div className='mt-[16px] border-1 border-[#EDEDF2] bg-[#F6F6F8] rounded-[12px] p-[16px] '>
                        <h1 className='font-graphik pb-[8px] text-[#242424] text-[24px] font-semibold leading-[32px]'>{user.name}</h1>
                        <p className='font-graphik pb-[8px] text-[#242424] text-[20px] leading-[28px] font-medium'>{user.Job}</p>
                        <div className='flex justify-end space-x-[10px]'>
                            <a href={user.linkedin} className='w-[24px] h-[24px]'> 
                                <FaLinkedin className='w-full h-full' /> 
                            </a>
                            <a href={user.email} className='w-[24px] h-[24px]'>
                                <MdEmail className='w-full h-full'/>
                            </a>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
    <div className='hidden lg:flex flex-col'>
        <div className='!h-[600px] !w-full'>
            <img  src= {hero}
            className='w-full'/>
        </div>
        <div className='relative lg:bottom-[250px] xl:bottom-[140px] left-0 right-0 mx-[172.5px] p-[40px] rounded-[20px] border-2 border-[#EDEDF2] bg-white shadow-spec'>
            <h1 className='text-[#5F5F8C] text-center font-semibold font-graphik text-[20px] leading-[28px]'>
            Our journey began with a simple idea: to redefine what's possible. Today, that idea has blossomed into a thriving hub of creativity, collaboration, and ingenuity. We take pride in our commitment to delivering outstanding products/services that not only meet but exceed the expectations of our valued customers.
            </h1>
            <h1 className='pt-[16px] text-[#5F5F8C] text-center font-semibold font-graphik text-[20px] leading-[28px]'>
            Rooted in a foundation of expertise and driven by a forward-thinking mindset, we consistently strive to lead the way in our field. Our diverse and talented team brings together a wealth of knowledge, experience, and fresh perspectives, fostering an environment where innovation flourishes.
            </h1>
        </div>
        <div className='mt-[100px] mx-[172.5px]'>
            <div className=' flex flex-col space-y-[60px]'>
                <div className='w-full flex flex-row space-x-[60px]'>
                    <div className='w-[50%] flex flex-col space-y-[16px]'>
                        <img className=' w-full h-[360px] rounded-[12px]' src={UserData[0].image} alt={UserData[0].name} />
                        <div className='border-1 border-[#EDEDF2] bg-[#F6F6F8] rounded-[12px] p-[16px]'>
                            <h1 className='font-graphik pb-[8px] text-[#242424] text-[24px] font-semibold leading-[32px]'>
                                {UserData[0].name}
                            </h1>
                            <p className='font-graphik pb-[8px] text-[#242424] text-[20px] leading-[28px] font-medium'>
                                {UserData[0].Job}
                            </p>
                            <div className='flex justify-end space-x-[10px]'>
                            <a href={UserData[0].linkedin} className='w-[24px] h-[24px]'> 
                                <FaLinkedin className='w-full h-full' /> 
                            </a>
                            <a href={UserData[0].email} className='w-[24px] h-[24px]'>
                                <MdEmail className='w-full h-full'/>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className='w-[50%] flex flex-col space-y-[16px]'>
                        <img className=' w-full h-[360px] rounded-[12px]' src={UserData[1].image} alt={UserData[1].name} />
                        <div className='border-1 border-[#EDEDF2] bg-[#F6F6F8] rounded-[12px] p-[16px]'>
                            <h1 className='font-graphik pb-[8px] text-[#242424] text-[24px] font-semibold leading-[32px]'>
                                {UserData[1].name}
                            </h1>
                            <p className='font-graphik pb-[8px] text-[#242424] text-[20px] leading-[28px] font-medium'>
                                {UserData[1].Job}
                            </p>
                            <div className='flex justify-end space-x-[10px]'>
                            <a href={UserData[1].linkedin} className='w-[24px] h-[24px]'> 
                                <FaLinkedin className='w-full h-full' /> 
                            </a>
                            <a href={UserData[1].email} className='w-[24px] h-[24px]'>
                                <MdEmail className='w-full h-full'/>
                            </a>
                        </div>
                        </div>
                    </div>   
                </div>
                <div className='w-full flex flex-row space-x-[60px]'>
                    <div className='w-[50%] flex flex-col space-y-[16px]'>
                        <img className=' w-full h-[360px] rounded-[12px]' src={UserData[2].image} alt={UserData[2].name} />
                        <div className='border-1 border-[#EDEDF2] bg-[#F6F6F8] rounded-[12px] p-[16px]'>
                            <h1 className='font-graphik pb-[8px] text-[#242424] text-[24px] font-semibold leading-[32px]'>
                                {UserData[2].name}
                            </h1>
                            <p className='font-graphik pb-[8px] text-[#242424] text-[20px] leading-[28px] font-medium'>
                                {UserData[2].Job}
                            </p>
                            <div className='flex justify-end space-x-[10px]'>
                            <a href={UserData[2].linkedin} className='w-[24px] h-[24px]'> 
                                <FaLinkedin className='w-full h-full' /> 
                            </a>
                            <a href={UserData[2].email} className='w-[24px] h-[24px]'>
                                <MdEmail className='w-full h-full'/>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className=' w-[50%] flex flex-col space-y-[16px]'>
                        <img className='w-full h-[360px] rounded-[12px]' src={UserData[3].image} alt={UserData[3].name} />
                        <div className='border-1 border-[#EDEDF2] bg-[#F6F6F8] rounded-[12px] p-[16px]'>
                            <h1 className='font-graphik pb-[8px] text-[#242424] text-[24px] font-semibold leading-[32px]'>
                                {UserData[3].name}
                            </h1>
                            <p className='font-graphik pb-[8px] text-[#242424] text-[20px] leading-[28px] font-medium'>
                                {UserData[3].Job}
                            </p>
                            <div className='flex justify-end space-x-[10px]'>
                            <a href={UserData[3].linkedin} className='w-[24px] h-[24px]'> 
                                <FaLinkedin className='w-full h-full' /> 
                            </a>
                            <a href={UserData[3].email} className='w-[24px] h-[24px]'>
                                <MdEmail className='w-full h-full'/>
                            </a>
                        </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
