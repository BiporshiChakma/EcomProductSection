import { Menu } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
function App() {

  return (
    <>
      <section className="custom">
        <div className="containert">
            <div className="w-full flex bg-secondary text-white justify-between lg:px-6 py-4 max-md:flex-row-reverse max-md:px-5">
              <div className='flex justify-center items-center pl-5 md:hidden'>
                <ShoppingCart/>
              </div>
              <div>
                  <img src="./logo.png" className="w-36"></img>
              </div>
              <div className="flex justify-center items-center max-lg:hidden">
                  <ul className="flex gap-6 text-xl">
                   <a href="" className=""> <li>Products</li></a>
                   <a href=""> <li>Tract Order</li></a>
                   <a href=""> <li>Contact</li> </a>
                   <a href=""> <li>About Us</li></a>
                  </ul>
              </div>
              <div className="lg:hidden pr-6 flex justify-center items-center">
                   <Menu className='text-white'/>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default App
