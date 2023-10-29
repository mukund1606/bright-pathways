"use client";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

const SeventhSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-8 border px-4 py-20 md:px-10">
      <div className="w-full space-y-2">
        <h2 className="text-4xl font-bold">FAQs</h2>
        <p>
          Find answers to common questions about the applications and its
          services
        </p>
      </div>
      <Accordion>
        <AccordionItem
          aria-label="How does the application work?"
          title="How does the application work?"
        >
          The application is designed to help old age people find old age homes,
          animal shelters, dog and baby adoption centers, and blind schools. It
          provides a user-friendly interface where users can search for these
          facilities based on their location and preferences. The application
          also offers detailed information about each facility, including
          contact details and reviews from other users.
        </AccordionItem>
        <AccordionItem
          aria-label="Is the application free?"
          title="Is the application free?"
        >
          Yes, the application is completely free to use. There are no hidden
          charges or subscription fees. We believe in providing easy access to
          information and resources for the elderly, animal lovers, and parents
          looking to adopt.
        </AccordionItem>
        <AccordionItem
          aria-label="How can I contribute?"
          title="How can I contribute?"
        >
          If you want to contribute to the application, you can help us by
          providing feedback on the facilities listed, suggesting new facilities
          to be added, or volunteering your time to help us improve the
          application. You can reach out to us through the contact information
          provided.
        </AccordionItem>
        <AccordionItem
          aria-label="Is my data secure?"
          title="Is my data secure?"
        >
          {
            "We take data security seriously. All user data is encrypted and stored securely. We do not share any personal information with third parties without the user's consent. You can read more about our data privacy policy on our website."
          }
        </AccordionItem>
        <AccordionItem
          aria-label="ICan I suggest new facilities?"
          title="Can I suggest new facilities?"
        >
          {
            "Absolutely! We are always looking to expand our database of facilities. If you know of any old age homes, animal shelters, dog and baby adoption centers, or blind schools that are not listed on our application, please let us know. We appreciate your help in making our platform more comprehensive."
          }
        </AccordionItem>
      </Accordion>
      <div className="flex w-full flex-col justify-between space-y-2 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold">Still have questions?</h2>
          <p>Contact us for more information or assisrance</p>
        </div>
        <Button className="bg-[#A4D5DD]">Contact Us</Button>
      </div>
    </div>
  );
};

export default SeventhSection;
