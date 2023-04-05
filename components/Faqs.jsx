import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faqs() {
  return (
    <div className="dark:text-gray-300">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. Sam will be available for you to use for 24hrs, after that
            you'd be asked to pay a $2 fee. It varies depending on your
            location.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Would my data be protected?</AccordionTrigger>
          <AccordionContent>
            Yes. Sam or otherwise Deadulus Inc do not access your data or any
            information of you without consent. We believe in confidentiality
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What are your payment options?</AccordionTrigger>
          <AccordionContent>
            Depends on your location, but you should be able to pay through your
            local payment options.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Faqs;
