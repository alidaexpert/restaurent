import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="my-5 font-bold">
          <Link className="mr-5 bg-red-300 text-white p-3 rounded-xl" to="/restaurent">Restaurent</Link>
            <Link className="mr-5 bg-red-300 text-white p-3 rounded-xl" to="/order">Order</Link>
        </div>
    );
};

export default Header;