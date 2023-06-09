import React from 'react';

const Contact = () => {
  return (
    <div data-theme="night" className="w-full h-screen min-h-full m-auto md:pl-20 p-4 py-16 bg-sky-900 ">
      <h1 className="text-4xl font-bold text-center text-[#42f5ff] mb-10">Contact</h1>
      <form className="w-1/5 md:mx-auto ">
        <div className="grid  w-full py-2 ">
          <label className="text-white uppercase text-sm py-2" htmlFor="">
            Name
          </label>
          <input className="border-2 rounded-lg p-2 border-[#42f5ff]" type="text" />
        </div>
        <div className="flex flex-col md:mb-8">
          <label className="text-white uppercase text-sm py-2" htmlFor="">
            Email
          </label>
          <input className="border-2 rounded-lg p-2 border-[#42f5ff]" type="text" />
        </div>
        <div className="flex flex-col md:mb-8">
          <label className="text-white uppercase text-sm py-2" htmlFor="">
            Subject
          </label>
          <input className="border-2 rounded-lg p-2 border-[#42f5ff]" type="text" />
        </div>
        <div className="flex flex-col md:mb-8">
          <label className="text-white uppercase text-sm py-2" htmlFor="">
            Message
          </label>
          <textarea rows={5} className="border-2 rounded-lg p-2 border-[#42f5ff]"></textarea>
        </div>
        <div className="w-full flex justify-center mt-10">
          <button className="bg-black/50 text-white rounded-lg w-[500px] mx-auto p-4 hover:bg-white/20 hover:shadow-md hover:shadow-black">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
