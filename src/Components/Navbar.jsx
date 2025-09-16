import React from 'react'
import  Search  from "./Search"
import amazon from "/images/amazon.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import{ useSelector} from "react-redux"

const Navbar = () => {
  const cart = useSelector((state) => state.cart.prodectNumber);
  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-[#131921] text-white h-[60px]'>
            {/*left */}
            <div className='flex items-center'>
              <Link to={"/"}>
              <img className='h-[35px] w-[100px] m-2' src={amazon} alt="" />
              </Link>
                
                <div className='pr-4 pl -4'>
                    <div className='text-xs xl:text-sm'>Deliver to</div>
                    <div className='text-sm xl:text-base font-bold'>United Kingdom</div>
                </div>
            </div>
            {/*Middle */}
            <div className='flex grow relative items-center'>
              <Search />
            </div>
            {/* Right */}
            <div className='flex items-center'>
              <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Hello, sign in</div>
                <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
              </div>
              <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Returns</div>
                <div className='text-sm xl:text-base font-bold'>& Orders</div>
              </div>
              <Link to={"/checkout"}>
              <div className='flex items-center gap-1 pr-3 pl-3'> 
                <div className='relative'>
                <ShoppingCartIcon className='h-10 w-10 '/>
              
                    <div className='absolute right-[9px] font-bold m-2 text-orange-400'>
                        {cart}
                    </div>
                </div>
                <div className=' text-xs xl:text-sm font-bold '>
                  Card
                </div>
              </div>
              </Link>
            </div>
        </div>
        <div className='flex bg-[#232F3A] text-white space-x-3 text-xs xl:text-sm p-2 pl-6'>
              <div>Today's Deals</div>
              <div>Customer Service</div>
              <div>Register</div>
              <div>Gift Cards</div>
              <div>Sell</div>
        </div>
    </header>
  )
}

export default Navbar
