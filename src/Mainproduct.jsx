import { ListFilter } from 'lucide-react';
import { ListFilterPlus } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { X } from 'lucide-react';

import { ChevronUp } from 'lucide-react';
import { Check } from 'lucide-react';

import Card from './component/Card'
import Sale from './component/Sale'
import Stock from './component/Stock'
function App() {

  return (
    <>
 <section className="custom pt-[2rem]">
        <div className="containert">
        <div className="w-[90%] px-4 flex gap-10">
            <div className='lg:w-[20%]w-[30%] max-lg:hidden'>
            {/*Filter Start */}
               <div className='w-full flex flex-col gap-4'>
                      {/*filter title section */}
                    <div className='flex gap-4 border-b-2 pb-5'>
                    <ListFilterPlus />
                    <p>Filters</p>    
                </div>
                <div className='flex flex-col gap-4 border-b-2 pb-5'>
                    <div className='flex gap-4 justify-between'>
                        <p>Applied Filters</p>
                        <p>clear all</p>
                    </div>
                    {/*Apply filter */}
                    <div className='flex gap-2 '>
                        <div className='custom-gray px-2 flex gap-2 text-[14px] justify-center items-center'>
                            All  <a className='' href=''><X className='w-[1.2rem]'/></a>
                        </div>
                        <div className='custom-gray px-2 flex text-[14px] justify-center items-center'>
                            Running Shoes  <a className='' href=''><X className='w-[1.2rem]'/></a>
                            </div>
                        <div className='custom-gray px-2 flex text-[14px] justify-center items-center'>
                            Red  <a className='' href=''><X className='w-[1.2rem]'/></a>
                            </div>
                    </div></div>
                      {/*Category Section */}
                    <div className='border-b-2 pb-5 flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <p>Category</p>
                            <ChevronUp/>
                        </div>
                        <div className='flex gap-3'>
                            <input type='checkbox' className='accent-primary w-[1.2rem]'  checked></input>
                            <label>All</label>
                        </div>
                         <div className='flex gap-3'>
                            <input type='checkbox' className='accent-primary w-[1.2rem]' checked></input>
                            <label>Running Shoes</label>
                        </div>
                         <div className='flex gap-3'>
                            <input type='checkbox' className='accent-primary w-[1.1rem]'></input>
                            <label>Sneakers</label>
                        </div>
                         <div className='flex gap-3'>
                            <input type='checkbox' className='accent-primary w-[1.1rem]'></input>
                            <label>Loafers</label>
                        </div>
                        
                    </div>

                    {/* stock*/}
                       <div className='border-b-2 pb-5'>
                        <div className='flex justify-between'>
                            <p>Stock Status</p>
                            <ChevronUp/>
                        </div>
                        <div className='flex gap-3'>
                            <input type='checkbox' className='accent-primary w-[1.1rem]'></input>
                            <label>In Stock</label>
                        </div>
                         <div className='flex gap-3'>
                            <input type='checkbox' className='accent-primary w-[1.1rem]'></input>
                            <label>Out of Stock</label>
                        </div>
                </div>

                     <div className='border-b-2 pb-5'>
                        <div className='flex justify-between'>
                            <p>Size</p>
                            <ChevronUp/>
                        </div>
                    </div>

                     <div>
                        <div className='flex justify-between'>
                            <p>Color</p>
                            <ChevronUp/>
                        </div>
                        <div className='flex gap-4 flex-wrap py-5'>
                            <div className='bg-red-600 w-5 h-5 flex justify-center items-center rounded-full'>
                                  <Check className='text-white w-5'/>
                            </div>
                            <div className='bg-[#ffa800] w-5 h-5 flex justify-center items-center rounded-full'>
                                  <Check className='text-white w-5 hidden'/>
                            </div>
                             <div className='bg-[#80FF00] w-5 h-5 flex justify-center items-center rounded-full'>
                                  <Check className='text-white w-5  hidden'/>
                            </div>
                              <div className='bg-[#00FFB2] w-5 h-5 flex justify-center items-center rounded-full'>
                                  <Check className='text-white w-5  hidden'/>
                            </div>
                              <div className='bg-[#0029FF] w-5 h-5 flex justify-center items-center rounded-full'>
                                  <Check className='text-white w-5  hidden'/> 
                            </div>
                            <div className='bg-[#FF00C7] w-5 h-5 flex justify-center items-center rounded-full'>
                                  <Check className='text-white w-5 hidden '/> 
                            </div>
                             <div className='bg-[#27829e] w-5 h-5 flex justify-center items-center rounded-full'>
                                  <Check className='text-white w-5 hidden '/> 
                            </div>
                             <div className='bg-[#FF97DC] w-5 h-5 flex justify-center items-center rounded-full'>
                                  <Check className='text-white w-5 hidden '/> 
                            </div>
                             <div className='bg-[#FF007A] w-5 h-5 flex justify-center items-center rounded-full'>
                                  <Check className='text-white w-5 hidden '/> 
                            </div>
                             <div className='bg-[#272727] w-5 h-5 flex justify-center items-center rounded-full'>
                                  <Check className='text-white w-5 hidden '/> 
                            </div>
                        </div>

                    </div>
                </div>   
            {/*Filter End */}
            </div>
            <div className='lg:w-[80%] w-[70%] max-lg:w-[100%]'>
                <div className='w-full'>
                     <div className='flex gap-2 max-lg:hidden'>
                        <p className='underline'>Home</p>
                        <p>/</p>
                        <p className='underline'>Search</p>
                        <p>/</p>
                        <p>Running Shoes</p>
                     </div>
                     <div className='flex justify-between pt-2'>
                      <div className='flex justify-center items-center max-lg:flex-col'>
                         <h1 className='italic text-3xl font-thin'>"Running Shoes"</h1>
                         <p className='pt-2'> ______ 288 Results</p>
                      </div>
                      <div>
                          <div className='flex gap-2 justify-center items-center border-2 border-black px-2 py-1 max-lg:hidden'>
                              <ListFilter />
                              <p className='text-[1.2rem]'>Sort by</p>
                          </div>
                          <div className='flex lg:hidden'>
                              <div className='flex gap-2 border-r-2 pr-4'>
                                <ListFilterPlus />
                                <p>Filter</p>
                              </div>
                              <div className='flex gap-2 px-4'>
                                 <ListFilter />
                                <p>Sort BY</p>
                              </div>
                           
                          </div>
                      </div>
                     </div>
                     <div>
                      
                     </div>
                     <div className='pt-6 flex flex-wrap gap-6  max-sm:flex-col max-lg:justify-center max-lg:items-center'>
                      <Card/>
                      <Sale/>
                       <Stock/>
                      <Card/>
                     <Sale/>
                     
                     
                      <Card/>
                     </div>

                    
                </div>
            </div>
            <div>
             
            </div>
            </div>
            <div>
        </div>
        </div>
    </section>
    <section className="custom pt-[4rem]">
        <div className="containert">
            <div className='w-[50%] flex justify-center items-center md:justify-around max-md:flex-col max-md:gap-4'>
               <div className='flex gap-2 border-2 border-black w-[8rem] h-8 px-2'>
                <p>Next Page</p>
                <MoveRight />
              </div>
              <div className='flex justify-center items-center gap-4'>
                <div className='custom-gray p-2'>
                  01
                </div>
                <div>
                  <p>of 55</p>
                </div>

                    <ChevronRight className='custom-gray w-8 h-8'/>
                       <ChevronLeft className='custom-gray w-8 h-8'/>
              </div>
            </div>
        </div>
      </section>
  
   
    </>
  )
}

export default App
