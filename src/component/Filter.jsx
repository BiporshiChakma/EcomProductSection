import { X } from 'lucide-react';
import { ListFilterPlus } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Check } from 'lucide-react';
function App() {

  return (
    <>
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
             
    </>
  )
}

export default App
