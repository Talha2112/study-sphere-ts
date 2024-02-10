import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqsComp = () => {
  return (
    <div className="mt-10 flex flex-col items-center font-sans ">
      <div className="p-7">
        <span className="text-black text-5xl font-bold">
          Frequently Asked Questions
        </span>
      </div>
      
      <div className=" p-7 flex flex-col space-y-4 w-full max-w-[45rem]">
      <Accordion type="single" collapsible >
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Study Sphere?</AccordionTrigger>
    <AccordionContent>
    Study Sphere is an online learning platform designed to facilitate education, collaboration, and communication among students and educators.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How do I sign up for Study Sphere?</AccordionTrigger>
    <AccordionContent>
    To sign up for Study Sphere, visit our website and click on the "Sign Up" button. Follow the instructions to create your account.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is Study Sphere free to use?</AccordionTrigger>
    <AccordionContent>
    Yes, Study Sphere offers a free basic plan with essential features. However, there are also premium plans with additional functionalities for a more enhanced experience.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>How can I invite students or teachers</AccordionTrigger>
    <AccordionContent>
    After creating a class, you can invite participants by sharing a unique class code or sending email invitations directly from the platform.
    </AccordionContent>
  </AccordionItem>
</Accordion>

      </div>
        
      
      
   
     
    </div>
  );
};

export default FaqsComp;