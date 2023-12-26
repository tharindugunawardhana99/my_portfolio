import React,{useState} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';


const Contact = () => {
  
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full text-center">
        <div className="flex flex-col justify-around w-full h-auto lgl:flex-row">

          <ContactRight />
        </div>
      </div>
    </section>
  );
}

export default Contact