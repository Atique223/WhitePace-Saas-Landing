import React from "react";
const Sec5 = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-4">
        <h1 className="text-[72px] font-bold text-center text-black mb-8">
          Choose Your Plan
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the <br/>right plan for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Free</h2>
            <p className="text-2xl font-bold text-gray-900 mt-4">$0</p>
            <p className="text-gray-600 mt-2 text-[12px]">Capture ideas and find them quickly</p>
           
            <ul className="mt-6 space-y-4 text-[12px]">
              <li className="text-gray-700">Sync unlimited devices</li>
              <li className="text-gray-700">10 GB monthly uploads</li>
              <li className="text-gray-700">200 MB max. note size</li>
              <li className="text-gray-700">Customize Home dashboard and access extra widgets</li>
              <li className="text-gray-700">Connect primary Google Calendar account</li>
              <li className="text-gray-700">Add due dates, reminders, and notifications to your tasks</li>

            </ul>
            <button className="mt-6 bg-white text-black px-4 py-2 rounded hover:bg-[#043873]">
              Get Started
            </button>
          </div>

          {/* Personal Plan */}
          <div className="bg-[#043873] shadow-md rounded-lg p-6 text-center col-span-1 text-white">
            <h2 className="text-xl font-semibold">Personal</h2>
            <p className="text-2xl text-[#FFE492] font-bold mt-4">$11.99</p>
            <p className="mt-2 text-[12px]">Keep home and family on track</p>
            <ul className="mt-6 space-y-4 text-[12px]">
              <li>Sync unlimited devices</li>
              <li>10 GB monthly uploads</li>
              <li>200 MB max. note size</li>
              <li>Customize Home dashboard and access extra widgets</li>
              <li>Connect primary Google Calendar account</li>
              <li>Add due dates, reminders, and notifications to your tasks</li>

            </ul>
            <button className="mt-6 bg-[#4F9CF9] text-white px-4 py-2 rounded ">
              Get Started
            </button>
          </div>

          {/* Organization Plan */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Organization</h2>
            <p className="text-2xl font-bold text-gray-900 mt-4">$49.99</p>
            <p className="text-gray-600 mt-2 text-[12px]">Capture ideas and work collaboratively</p>
            <ul className="mt-6 space-y-4 text-[12px]">
            <li className="text-gray-700">Sync unlimited devices</li>
              <li className="text-gray-700">10 GB monthly uploads</li>
              <li className="text-gray-700">200 MB max. note size</li>
              <li className="text-gray-700">Customize Home dashboard and access extra widgets</li>
              <li className="text-gray-700">Connect primary Google Calendar account</li>
              <li className="text-gray-700">Add due dates, reminders, and notifications to your tasks</li>
            </ul>
            <button className="mt-6 bg-white text-black px-4 py-2 rounded hover:bg-[#043873]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec5;