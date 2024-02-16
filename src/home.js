import React, { useState } from 'react';

const TextAreaGrid = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const processText = (inputText) => {
        return inputText.split(/[:.]+/).filter(Boolean).map((sentence, index) => (
            <div key={index}>{sentence.trim()}.</div>
        ));
    };

    return (
        <div>
<div className='flex justify-center'>
                <div className="grid pt-12 w-4/5 sm:grid-cols-2 gap-4">
                    <textarea
                        className="border  outline-none rounded border-gray-300 p-2"
                        value={text1}
                        onChange={(e) => setText1(e.target.value)}
                        placeholder="Enter text here"
                        rows={12}
                    />
                    <textarea
                        className="border outline-none rounded border-gray-300 p-2"
                        value={text2}
                        rows={12}
                        onChange={(e) => setText2(e.target.value)}
                        placeholder="Enter text here"
                    />
                </div>
</div>
<div className='flex justify-center'>
                <div className="mt-10 w-4/5 grid grid-cols-2">
                    <div>{processText(text1)}</div>
                    <div>{processText(text2)}</div>
                </div>
</div>
        </div>
    );
};

export default TextAreaGrid;
