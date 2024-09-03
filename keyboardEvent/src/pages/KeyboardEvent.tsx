import React, { useEffect, useState } from 'react';

function KeyboardEvent() {
  const [pressedKey, setPressedKey] = useState('');
  const [clipboardText, setClipboardText] = useState('');

  useEffect(() => {
    navigator.clipboard.readText().then((text) => {
        console.log(`Clipboard text: ${text}`);
        setClipboardText(text);
        });
    const handleKeyDown = (event) => {
      console.log(`Key pressed: ${event.key}`);
      setPressedKey(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col gap-9 items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Keyboard Event Listener</h1>
        <p className="text-lg text-gray-700">Press any key to see it displayed below:</p>
        <div className="mt-6 py-4 px-8 bg-blue-100 rounded-lg">
          <p className="text-xl font-semibold text-blue-800">
            {pressedKey ? `Key pressed: ${pressedKey}` : 'Waiting for key press...'}
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Clipboard</h1>
        <div className="mt-6 py-4 px-8 bg-blue-100 rounded-lg">
          <p className="text-xl font-semibold text-blue-800">
            {clipboardText ? `Clipboard text: ${clipboardText}` : 'Clipboard is empty'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default KeyboardEvent;

