import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate()
    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,description,price} = props?.donate
    
    const details = id =>{
        console.log(id)
        navigate(`/donate/${id}`)
    }
    return (
      <div onClick={() => details(id)}>
        <div
          className={`card card-compact  xl: lg: md: bg- shadow-xl`}
          style={{ background: card_bg_color }}
        >
          <figure>
            <img className="w-full" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2
              className="w-28 py-1 px-2 text-center rounded-md"
              style={{
                background: text_button_bg_color,
                color: category_bg_color,
              }}
            >
              {category}
            </h2>

            <p
              className="text-xl font-semibold"
              style={{ color: category_bg_color }}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Card;