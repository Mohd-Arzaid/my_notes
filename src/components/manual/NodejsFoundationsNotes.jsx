import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const NodejsFoundationsNotes = () => {
  return (
    <div className=" max-w-[88rem] mx-auto px-4 py-8 md:p-12">
      {/* Heading */}
      <h2 className="text-[20px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
        Node Js Foundations Q/A
      </h2>
      <p className="text-[#52525b] text-center text-[15px] md:text-[20px] font-geist">
        Node Js Foundations{" "}
        <span className="text-[#27272a] font-geist text-[15px] md:text-[20px] font-medium underline underline-offset-4">
          Questions & Answers
        </span>
      </p>

      {/* Accordion of Q/A */}
      <div className="w-full max-w-[1104px] mt-[8px] md:mt-[24px] mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {/* Q - 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              What is Node Js?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              Node.js is a runtime environment that allows JavaScript to run on
              the backend. <br />
              It is built on top of the V8 engine. <br />
              We can create an HTTP server, APIs, and backend applications using
              Node.js.
            </AccordionContent>
          </AccordionItem>
          {/* Q - 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              HTTP ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              HTTP is a protocol defined for machines to communicate. <br />
              most common way for the frontend to talk to its backend.
              <br /> <br />
              ✅ Whenever sending a req to server , things Client needs to worry
              about : <br /> <br />
              1) Protocol (HTTP/HTTPS) e.g., `https://` <br />
              2) Address (URL/IP/PORT) e.g., `chat.openai.com/`
              <br />
              3) Route e.g., `backend-api/conversation`
              <br />
              4) Headers, Body, Query Parameters e.g., cookies, request body
              (like 'what is 2 + 2?'), often in JSON format
              <br />
              5) Method e.g., GET, POST, PUT, DELETE
              <br /> <br />
              ✅ Things Server needs to worry about : <br /> <br />
              1) Response Headers <br />
              2) Response Body <br />
              3) Status codes <br />
            </AccordionContent>
          </AccordionItem>
          {/* Q - 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              What happen when I go to google.com and press enter ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              1) Browser parses the URL <br />
              2) Does a DNS Lookup (converts google.com to an IP) <br />
              3) Establishes a connection to the IP (does handshake) <br />
              <br />
              DNS resolution : <br />
              URLs aur just like contacts in your phone. <br />
              In the end, they map to an IP <br />
              if you ever buy a URL of your own, you will need to point to the
              IP of your server.
            </AccordionContent>
          </AccordionItem>
          {/* Q - 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              What is Express ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              Express is a external library that helps to create HTTP servers.
            </AccordionContent>
          </AccordionItem>
          {/* Q - 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              How to create a HTTP server using Express
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              <div className="overflow-x-auto">
                <pre>
                  {`
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.send('Hello World');
})

app.listen(port)
  `}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Q - 6 */}
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium"></AccordionTrigger>

            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]"></AccordionContent>
          </AccordionItem>
          {/* The End */}
        </Accordion>
      </div>
    </div>
  );
};

export default NodejsFoundationsNotes;
