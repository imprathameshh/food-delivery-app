import React from 'react'
import "./exploreMenu.less"
import { menu_list } from "../../assets/assets"



const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id="explore-menu">
      <h2 className='theme-title'>Explore Menu</h2>
      <p className='theme-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sapiente eligendi vel corrupti adipisci expedita! Quo, necessitatibus nemo neque perspiciatis rerum dolorem pariatur similique, cumque beatae a animi voluptatem in!</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev == item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category == item.menu_name ? "active" : ""} src={item.menu_image} alt='menu-image' />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
