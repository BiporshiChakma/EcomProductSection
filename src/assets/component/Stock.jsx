
import { Star } from 'lucide-react';
import { Heart } from 'lucide-react';
function App() {

  return (
    <>
    <div className='sm:w-[220px] lg:w-[230px] flex flex-col gap-2'>
                        <img src='./public/shoes.png'></img>
                        <h1>Ultraboost Light Running Shoes</h1>
                       <p className='italic'>Running Shoes</p>
                       <div className='flex justify-between'>
                          <div className='flex gap-1 justify-center items-center' >
                            <span class="text-primary text-2xl">★</span>

                        <p>5.0 (10 Reviews)</p>
                          </div>
                          <p className='text-red-700 font-bold text-[14px]'>Out Of Stock</p>
                       </div>
                       <h1 className='text-2xl font-bold'>$200</h1>
                       <div className='flex justify-around items-center'>
                        <div className='bg-[#7c7c7c] text-white w-[10rem] py-2 flex justify-center items-center'>
                        <p>+ Add to Cart</p>
                         
                       </div>
                        <Heart />
                       </div>
                     </div>
    </>
  )
}

export default App
