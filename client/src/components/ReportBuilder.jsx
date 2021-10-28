import React, { useState } from 'react';
import Button from '@/components/Button';
import Stats from '@/components/Stats';
import Card from '@/components/Card';

const components = {
  'stats': Stats,
  'card': Card,
};

export default () => {
  const ReportBlock = ({ name, isLast, ...rest }) => {
    return (
      <div
        className={`m-5 flex items-center justify-center ${
          isLast && 'h-24 bg-gray-50 border-solid border-gray-200 border-2'
        }`}
      >
          <div className="flex space-x-4">
            <Button onClick={() => addBlock('stats')}> Stats </Button>
            <Button onClick={() => addBlock('card')}> Card </Button>
          </div>
      </div>
    );
  };

  const [data, setData] = useState([]);

  const addBlock = (key) => {
    setData((data) => {
      return [
        ...data,
        {
          id: data.length + 1,
          component: components[key],
          props: { name: `demo ${data.length + 1}` },
        },
      ];
    });
  };

  return (
    <div className='p-10 bg-white grid grid-cols-3 gap-4'>
      {data.map((i, j) => {
        return React.createElement(i.component, {
          ...i.props,
          key: j,
        });
      })}

      <ReportBlock />
    </div>
  );
};
