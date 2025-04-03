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
            
          </AccordionContent>
        </AccordionItem>

        {/* The End */}
      </Accordion>
    </div>
  </div>
  )
}

export default NodejsFoundationsNotes
