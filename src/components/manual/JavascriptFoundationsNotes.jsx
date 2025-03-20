import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const JavascriptFoundationsNotes = () => {
  return (
    <div className=" max-w-[88rem] mx-auto px-4 py-8 md:p-12">
      {/* Heading */}
      <h2 className="text-[20px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
        Javascript Foundations Q/A
      </h2>
      <p className="text-[#52525b] text-center text-[15px] md:text-[20px] font-geist">
        Javascript Foundations{" "}
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
              How do Computers Work?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              All apps like Zoom, WhatsApp, Gallery, and Video are stored in the
              SSD (hard drive). But when we run something like a Zoom meeting,
              it runs in RAM. The main question is—what happens in RAM?
              Actually, 0s and 1s run in RAM. High-level code is converted into
              0s and 1s using compilers.
            </AccordionContent>
          </AccordionItem>

          {/* Q - 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              What is a Compiler?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              Compilers convert high-level code into 0s and 1s (machine
              language), which goes into RAM, allowing the machine to understand
              it.
            </AccordionContent>
          </AccordionItem>

          {/* Q - 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              Why Do We Need Languages?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              We need languages because developers are very dumb , they can't
              understand machine language, that's why we need languages.
              Languages make it easier for us to communicate with machines.
            </AccordionContent>
          </AccordionItem>

          {/* Q - 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              Interpreted Vs Compiled Languages
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              Compilers :
              <br />
              1) First need to Compile , then need to run
              <br />
              2) usually dont compile if there in an error in code
              <br />
              3) ex : C++ , Java
              <br />
              <br />
              Interpreted :
              <br />
              1) go line by line can run partially if error come later
              <br />
              2) ex : Js , python
            </AccordionContent>
          </AccordionItem>

          {/* Q - 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              Why JS is better than Other Languages?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              1) Browsers can only understand HTML, CSS, JS
              <br />
              2) Using Node.js , Js can also be used in Backend Development
            </AccordionContent>
          </AccordionItem>

          {/* Q - 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              Static Vs Loosely Type Languages
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              Static : Variables have fixed types, ex : C++, Java
              <br />
              Loosely : Variables can hold different types, ex : JS
            </AccordionContent>
          </AccordionItem>

          {/* Q - 7 */}
          <AccordionItem value="item-7">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              Single Threaded Nature of JS
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              JS runs line by line and only one line runs at a time
            </AccordionContent>
          </AccordionItem>

          {/* Q - 8 */}
          <AccordionItem value="item-8">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              Find length of String?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              const str = "Arzaid"
              <br />
              console.log(str.length);
              <br />
              // Length is not a function
            </AccordionContent>
          </AccordionItem>

          {/* Q - 9 */}
          <AccordionItem value="item-9">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              Find the Index of a string/character?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              const str = "Mohd Arzaid Arzaid"
              <br />
              const target = "Arzaid"
              <br />
              console.log(str.indexOf(target));
              <br />
              console.log(str.lastIndexOf(target));
            </AccordionContent>
          </AccordionItem>

          {/* Q - 10 */}
          <AccordionItem value="item-10">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              What is slice?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              const str = "Hello World"
              <br />
              console.log(str.slice(2, 5));
              <br />
              Output : llo
            </AccordionContent>
          </AccordionItem>

          {/* Q - 11 */}
          <AccordionItem value="item-11">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              What is substr?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              const str = "Hello World"
              <br />
              console.log(str.substr(2, 5));
              <br />
              Output : llo W
            </AccordionContent>
          </AccordionItem>

          {/* Q - 12 */}
          <AccordionItem value="item-12">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              What is split?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              const str = "Hello,World"
              <br />
              console.log(str.split(","));
              <br />
              Output : ["Hello", "World"]
            </AccordionContent>
          </AccordionItem>

          {/* Q - 13 */}
          <AccordionItem value="item-13">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              Push , Pop , Shift , Unshift ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              const arr = [1, 2, 3, 4, 5]
              <br />
              arr.push(6)
              <br />
              console.log(arr);
              <br />
              Output : [1, 2, 3, 4, 5, 6]
              <br />
              <br />
              arr.pop()
              <br />
              console.log(arr);
              <br />
              Output : [1, 2, 3, 4, 5]
              <br />
              <br />
              arr.shift()
              <br />
              console.log(arr);
              <br />
              Output : [2, 3, 4, 5]
              <br />
              <br />
              arr.unshift(1)
              <br />
              console.log(arr);
              <br />
              Output : [1, 2, 3, 4, 5]
            </AccordionContent>
          </AccordionItem>

          {/* Q - 14 */}
          <AccordionItem value="item-14">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              For Each Loop ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              Example:
              <br />
              <div className="overflow-x-auto">
              <pre>
                {`
 const arr = [1, 2, 3, 4, 5];
 function print(element){
 console.log(element);
  }
 arr.forEach(print);
  `}
              </pre>
              </div>
    
              Output:
              <br />
              1
              <br />
              2
              <br />
              3
              <br />
              4
              <br />
              5
              <br />{" "}
            </AccordionContent>
          </AccordionItem>

          {/* Q - 15 */}
          <AccordionItem value="item-15">
            <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#3f3f46] font-medium">
              Class in JS ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-[#5e5f6e]">
              A class is a blueprint that defines a reusable structure, which can be used in multiple places.
              <br />
              Class has two things :
              <br />
              1) Properties (attributes)
              <br />
              2) Methods (functions)
              <br />
              <br />
              Example :
              <div className="overflow-x-auto">
              <pre>
                {`
class Animal {
  constructor(name, speaks) {
    this.name = name;
    this.speaks = speaks;
  }

  speak() {
    console.log("Hi there, " + this.speaks);
  }
}

let dog = new Animal("Dog", "bark"); //Creating an object
dog.speak(); 
`}
              </pre>
              </div>
            

              <br />
              Output : hi there bark

            </AccordionContent>
          </AccordionItem>

          {/* The End */}
        </Accordion>
      </div>
    </div>
  );
};

export default JavascriptFoundationsNotes;
