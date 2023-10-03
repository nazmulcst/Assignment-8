import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './Details.css'
const Details = () => {
    const[complete,setComplete] = useState([])
    const {id} = useParams();
    const[actualData,setActualData] = useState()
    fetch("../data.json").then(res => res.json()).then(data => {
      
        if(data){
            const findById = data?.find(d => d.id == id)
            if(findById){
                setActualData(findById)
            }
        }
    })
     const bgcolor = actualData?.category_bg_color;
    


     const completeDonate = e =>{
        let donations = JSON.parse(localStorage.getItem('donations')) || [];
        const newObj = { key: e }; 
        donations.push(newObj);
        localStorage.setItem('donations', JSON.stringify(donations));
        const local = JSON.parse(localStorage.getItem('donations'))
        setComplete(local)
        toast.success('Donation complete')
        
     }
    return (
        <div className='container py-20'>
            <Toaster />
            <div className='container'>
            <div class="image-container">
            <img src={actualData?.picture} style={{width : '100%'}} className='w-full  rounded-md h-[300px] lg:h-[500px] md:h-[400px] '></img>
       
        <div class="overlay">
            <div class="overlay-content">
                <button className='py-2 px-4  text-white mx-10' style={{background : bgcolor}} onClick={()=> completeDonate(actualData)}>Donate {actualData?.price}</button>
            </div>
        </div>
    </div>
               
                <div className=' py-10'>
                    <h2 className='text-2xl lg:text-4xl md:text-3xl text-left font-semibold py-5'>{actualData?.title}</h2>
                    <p>{actualData?.description}</p>
                </div>
            </div>
            <div className='text-center '>
            
            </div>
        </div>
    );
};

export default Details;
