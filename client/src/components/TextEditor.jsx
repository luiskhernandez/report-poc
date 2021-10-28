import React, { useCallback } from 'react';
import Quill from "quill"
import "quill/dist/quill.snow.css"

var Block = Quill.import('blots/block');

class MyThing extends Block {}
MyThing.blotName = 'my-thing';
MyThing.className = 'my-thing';
MyThing.tagName = 'span';

Quill.register(MyThing);
export default () => {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = '';
    const editor = document.createElement('div');
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: 'snow',
    });
    // q.disable();
    // q.setText('Loading...');
  }, []);
  return <div className='container' ref={wrapperRef}></div>;
}
