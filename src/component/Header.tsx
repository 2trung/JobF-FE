import { useState } from 'react'
import logo from '../assets/logo.png'
import Button from './Button'
import { IoClose, IoMenu } from 'react-icons/io5'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <div className='flex w-full xl:px-28 lg:px-20 md:px-14 px-5 py-5'>
        <div className='flex bg-white w-full p-2 rounded-2xl border-[#6e69fe] border-1 items-center justify-between'>
          <a
            className='flex items-center text-2xl font-semibold gap-3 p-4'
            href='/'
          >
            <img src={logo} alt='Logo' className='rounded-full size-12' />
            <p>JobF</p>
          </a>
          <div className='border-r-2 border-[#acacac] h-6 ml-24 mr-6 lg:flex hidden' />
          <div className='hidden lg:flex flex-col lg:flex-row items-center justify-between w-full'>
            <div className='flex gap-6'>
              <a
                href='/'
                className='self-center text-[#242424] text-lg text-center'
              >
                For Job Seeker
              </a>
              <a
                href='/'
                className='self-center text-[#242424] text-lg text-center'
              >
                For Employers
              </a>
            </div>

            <div className='flex gap-4 items-center px-4 py-1'>
              <Button
                value={'default'}
                className='border-[#6e69fe] border-1 px-10 py-8 rounded-2xl text-xl font-medium'
              >
                Contact
              </Button>
              <Button
                className='text-white border-0 px-10 py-8 rounded-2xl text-xl font-medium'
                style={{
                  background:
                    'linear-gradient(90deg, rgba(34,40,42,1) 60%, rgba(128,128,128,1) 100%)',
                }}
              >
                Get Started
              </Button>
            </div>
          </div>

          <button
            className='text-2xl lg:hidden p-4'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoClose size={30} className='text-zinc-500' />
            ) : (
              <IoMenu size={30} className='text-zinc-500' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex flex-col md:w-[calc(100vw-8.5rem)] w-[calc(100vw-3.5rem)] bg-white rounded-2xl absolute top-32 md:left-15 left-5 right-5 p-4 lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className='flex flex-col gap-4'>
          <a
            href='/'
            className='self-center text-[#242424] text-lg text-center'
          >
            For Job Seeker
          </a>
          <a
            href='/'
            className='self-center text-[#242424] text-lg text-center'
          >
            For Employers
          </a>
        </div>

        <div className='flex flex-col gap-4 items-center mt-4 px-2'>
          <Button
            value={'default'}
            className='border-[#6e69fe] border-1 px-10 w-full py-8 rounded-2xl text-lg font-medium'
          >
            Contact
          </Button>
          <Button
            className='text-white border-0 px-10 py-8 w-full rounded-2xl text-lg font-medium'
            style={{
              background:
                'linear-gradient(90deg, rgba(34,40,42,1) 60%, rgba(128,128,128,1) 100%)',
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  )
}

export default Header
