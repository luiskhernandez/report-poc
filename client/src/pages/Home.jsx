import React, { useState, useEffect } from 'react';

import { Disclosure } from '@headlessui/react';
import ReportBuilder from '@/components/ReportBuilder';
import { io } from 'socket.io-client';
import useMousePosition from '@/hooks/useMousePosition';
import { CursorClickIcon } from '@heroicons/react/solid'

const FakeMouse = ({ user, x, y }) => {
  console.log('user', user, x, y)
  return (
    <div className='flex' style={{ position: 'absolute', top: y, left: x }}>
      <CursorClickIcon className="w-4 h-4 text-red-500" />
      <span className='text-xs text-yellow-500'>{user}</span>
    </div>
  );
};
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const userID = getRandomInt(1, 1000);
export default function Home() {
  const [socket, setSocket] = useState();
  const [fakeMouse, setFakeMouseData] = useState(null);
  useEffect(() => {
    const s = io('http://localhost:3001');
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);
  const { x, y } = useMousePosition();
  useEffect(() => {
    if (socket == null) return;
    socket.emit('mouseChange', {
      user: userID,
      x,
      y,
    });

    socket.on('otherUserMouseChange', (data) => {
      console.log("data", data)
      setFakeMouseData(data);
    });
  }, [x, y]);
  return (
    <>
      <div className='relative min-h-full'>
        {fakeMouse && <FakeMouse {...fakeMouse} /> }
        <Disclosure as='nav' className='bg-white shadow-sm'>
          {({ open }) => (
            <>
              <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                  <div className='flex'>
                    <div className='flex items-center flex-shrink-0'>
                      <img
                        className='block w-auto h-8 lg:hidden'
                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                        alt='Workflow'
                      />
                      <img
                        className='hidden w-auto h-8 lg:block'
                        src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                        alt='Workflow'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>

        <div className='py-10'>
          <header>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold leading-tight text-gray-900'>
                Report
              </h1>
            </div>
          </header>
          <main>
            <div className='mx-auto bg-gray-200 max-w-7xl sm:px-6 lg:px-8'>
              {/* Replace with your content */}
              <div className='px-4 py-8 sm:px-0'>
                <div className='border-4 border-gray-200 border-solid rounded-lg h-96'>
                  <ReportBuilder />
                </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
