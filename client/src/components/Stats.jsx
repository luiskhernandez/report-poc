import React from 'react';
/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default () => {
  const item = stats[0];
  return (
          <div
            className="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
          >
            <dt>
              <div className="absolute p-3 bg-indigo-500 rounded-md">
                <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
            </dt>
            <dd className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon className="self-center flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowSmDownIcon className="self-center flex-shrink-0 w-5 h-5 text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gray-50 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    {' '}
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
  )
}
