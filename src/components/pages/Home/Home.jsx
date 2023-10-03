import React, { useEffect, useState } from 'react';
import './Home.css'
import Card from './Card/Card';

const Home = () => {
    const[found,setFound] = useState(false)
    const[donates,setDonates] = useState([]);
    const [mapping,setMapping] = useState([])
    fetch("data.json").then(res => res.json()).then(data => {
          
          setDonates(data)
      
       
        
    })
    const searchSubmit = (e) => {
        e.preventDefault()
        const category = e.target.searchText.value;
        if(!category){
            
        }else{
            console.log(category,'searchText')
            fetch("data.json").then(res => res.json()).then(data => {
                const filtering = data?.filter(d =>  (d?.category).toLowerCase() == category.toLowerCase());
                  if(filtering.length > 0){
                    setMapping(filtering);
                    console.log(filtering,'filter')
                  }
                  else{
                    setFound(true)
                  }
              
               
               
                
            })
            e.target.reset()
        }
        
    }
    const again = ()=>{
       setFound(false)
    }
   
   
    return (
      <div className="container">
        <div
          className="hero  mb-6 rounded-2xl"
          style={{
            backgroundImage: "url(https://i.postimg.cc/sXVb7L5K/Clothing.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="py-20">
              <h1 className="text-white text-center text-xl lg:text-3xl md:text-2xl font-bold">
                I Grow By Helping People In Need
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
                <div></div>
                <form
                  onSubmit={searchSubmit}
                  className="col-span-0 mt-10 lg:col-span-1 md:col-span-1 flex justify-center"
                >
                  <input
                    type="text"
                    name="searchText"
                    className="px-5 py-2 rounded-sm border"
                    placeholder="search here.."
                  ></input>
                  <button
                    className="search-btn  rounded-sm text-white w-20 bg-red-500 "
                    type="submit"
                  >
                    search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-10">
          {found ? (
            <div className="text-center justify-center col-span-0 lg:col-span-3">
              <h1 className="text-xl text-yellow-600 font-semibold">
                Dont match with any data
              </h1>
              <button
                className="py-1 px-5 bg-blue-500 text-white font-semibold rounded-md"
                onClick={() => again()}
              >
                Please click here to see all data
              </button>
            </div>
          ) : mapping.length > 0 ? (
            mapping?.map((d) => <Card key={d?.id} donate={d}></Card>)
          ) : (
            donates?.map((d) => <Card key={d?.id} donate={d}></Card>)
          )}
        </div>
      </div>
    );
};

export default Home;