import { X } from 'lucide-react';
import { ListFilterPlus } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
function App() {

  return (
    <>
   <section className="custom pt-[2rem]">
        <div className="containert">
        <div className="w-full px-4">
            <div className='w-[20%] '>
                <div className='w-full flex flex-col gap-4'>
                      {/*filter title section */}
                    <div className='flex gap-4 justify-between'>
                    <ListFilterPlus />
                    <p>Filters</p>    
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 justify-between'>
                        <p>Applied Filters</p>
                        <p>clear all</p>
                    </div>
                    {/*Apply filter */}
                    <div className='flex gap-2'>
                        <div className='custom-gray px-2 flex gap-2 text-[14px] justify-center items-center'>
                            All  <a className='' href=''><X className='w-[1.2rem]'/></a>
                        </div>
                        <div className='custom-gray px-2 flex text-[14px] justify-center items-center'>
                            Running Shoes  <a className='' href=''><X className='w-[1.2rem]'/></a>
                            </div>
                        <div className='custom-gray px-2 flex text-[14px] justify-center items-center'>
                            Red  <a className='' href=''><X className='w-[1.2rem]'/></a>
                            </div>
                    </div>
                      {/*Category Section */}
                    <div>
                        <div className='flex justify-between'>
                            <p>Category</p>
                            <ChevronUp/>
                        </div>
                        <div className='flex gap-3'>
                            <input type='checkbox' className='accent-primary'  checked></input>
                            <label>All</label>
                        </div>
                         <div className='flex gap-3'>
                            <input type='checkbox' className='accent-primary' checked></input>
                            <label>Running Shoes</label>
                        </div>
                         <div className='flex gap-3'>
                            <input type='checkbox'></input>
                            <label>Sneakers</label>
                        </div>
                         <div className='flex gap-3'>
                            <input type='checkbox'></input>
                            <label>Loafers</label>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default App
