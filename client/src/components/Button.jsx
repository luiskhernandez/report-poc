import React from 'react';
import { PlusIcon } from '@heroicons/react/solid'
/* This example requires Tailwind CSS v2.0+ */
export default function Button({onClick, children}) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
         <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
        {children}
      </button>
    </>
  )
}
