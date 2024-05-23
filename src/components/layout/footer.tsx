import React from 'react'

export default function Footer() {
  return (
    <footer className='border-t border-primary'>
      <div className="container py-4">
        <p className="text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Eslam Khalaf. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
