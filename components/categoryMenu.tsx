import React from 'react';
import Link from 'next/link';
import NavLink2 from '../data/category-links';

const CategoryMenu: React.FC = () => {
  return (
    <nav className="w3-hide-small w3-hide-medium w3-sidebar w3-bar-block w3-black w3-text-amber w3-border w3-border-amber category-menu" style={{right:"0"}}>
        <button className="w3-black w3-text-amber w3-border w3-border-amber w3-padding">Categories</button>
        {NavLink2.map((item) => (
            <Link className='w3-hover-light-grey w3-center' key={item.id} href={item.href}>
              <p >
                {item.link}
              </p>
            </Link>
        ))}
    </nav>
  );
};

export default CategoryMenu;
