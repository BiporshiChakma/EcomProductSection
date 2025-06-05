import { X } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

function App() {

  return (
    <>
        <section className="custom pt-[2rem]">
        <div className="containert">
        <div className="w-full flex justify-center items-center gap-4">
            <div className="flex ">
                <div className="">
                    <select className="custom-gray md:py-3 max-md:py-[23px] border-none outline-none pl-4 rounded-l-lg max-md:text-[12px]">
                        <option value="">All</option>
                        <option value="">Shoes</option>
                        <option value="">Sneakers</option>
                        <option value="">Loafers</option>
                        <option value="">Sandals</option>
                    </select>
                    
                </div>
                <div className="custom-gray px-2">
                    <div className="border-r-[1.2px] border-gray-500  max-md:h-12 md:h-8 mt-1.5">

                    </div>
                </div>
                <div className="custom-gray py-2 px-4 text-[16px] max-md:text-[14px] flex justify-center items-center">
                    <p>running shoes</p>
                </div>
                 <div className="custom-gray px-2">
                    <div className="border-r-[1.2px] border-gray-500  max-md:h-12 md:h-8 mt-1.5">

                    </div>
                </div>
                <div className="">
                    <input className="custom-gray max-md:py-5 md:py-[11.5px] outline-none w-auto md:px-10 lg:w-[40rem]"></input>
                </div>
                <div className='custom-gray flex justify-center items-center md:px-2 px-4 max-md:rounded-r-lg'>
                    <X/>
                </div>
                  <div className="custom-gray px-2 max-md:hidden">
                    <div className="border-r-[1.2px] border-gray-500   h-8 mt-1.5">

                    </div>
                </div>
                <div className='custom-gray flex justify-center items-center px-3 rounded-r-lg max-md:hidden'>
                       <Search />
                </div>
            </div>
           
             <div className='bg-primary flex py-3 rounded-lg px-2 gap-2 max-md:hidden hover:bg-opacity-0 hover:border-2 hover:border-primary'>
                 <ShoppingCart />
                <p>View Cart</p>
            </div>
       
        </div>
        </div>
        </section>
       
    </>
  )
}
export default App
