import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FilterMapFunctions = () => {
  return (
    <div className=" max-w-[88rem] mx-auto px-4 py-8 md:p-12">
    {/* Heading */}
    <h2 className="text-[20px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
      Filter, Map Functions
    </h2>
    <p className="text-[#52525b] text-center text-[15px] md:text-[20px] font-geist">
      Filter, Map Functions{" "}
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
          Map Function
          </AccordionTrigger>
          <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
            Given an initial array input and tranformation function, the map function will return a new array with the transformed values.
         <br />
         <div className="overflow-x-auto">
                <pre>
                  {`
const input = [1,2,3,4,5];
const transform = (i) => {
  return i * 2;
}
const ans = input.map(transform);
console.log(ans);
  `}
                </pre>
              </div>
          </AccordionContent>
        </AccordionItem>

        {/* Q - 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
            Filter Function
          </AccordionTrigger>
          <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
            The filter function is used to filter the elements of an array based on a condition.
            <br />  
            It returns a new array with the elements that satisfy the condition.
            <br />
            <div className="overflow-x-auto">
                <pre>
                  {`
const input = [1,2,3,4,5];
const condition = (i) => {  
  return i % 2 === 0;
}
const ans = input.filter(condition);
console.log(ans);
                  `}
                </pre>
              </div>
            </AccordionContent>
        </AccordionItem>

     
        {/* The End */}
      </Accordion>
    </div>
  </div>
  )
}

export default FilterMapFunctions
