import Image from 'next/image'

const Homepage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-xl w-full max-w-md p-8'>
        {/* Header */}
        <div className='text-center mb-8'>
          <Image src='/logo.png' alt='USICT Logo' width={80} height={80} className='mx-auto mb-4' />
          <h1 className='text-2xl font-bold text-gray-800'>USICT One</h1>
          <p className='text-gray-600 text-sm mt-2'>University School of Information & Communication Technology</p>
        </div>

        {/* Login Form */}
        <form className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Registration Number</label>
            <input 
              type='text' 
              placeholder='Enter your registration number'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
            <input 
              type='password' 
              placeholder='Enter your password'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
            />
          </div>

          <div className='flex items-center justify-between'>
            <label className='flex items-center'>
              <input type='checkbox' className='rounded border-gray-300 text-blue-600 focus:ring-blue-500' />
              <span className='ml-2 text-sm text-gray-600'>Remember me</span>
            </label>
            <a href='#' className='text-sm text-blue-600 hover:text-blue-800'>Forgot Password?</a>
          </div>

          <button 
            type='submit'
            className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium transition duration-200'
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className='mt-8 text-center'>
          <p className='text-xs text-gray-500'>© 2025 USICT One. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage