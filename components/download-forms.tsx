import React from "react";
import { Download, FileText } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const DownloadRegForms = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#0B1E4A] pitch-lines">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
          Download Registration Forms
        </h2>
        <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto font-lato">
          Select your category below to download the registration form
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, idx) => (
          <Card
            key={idx}
            className="border-2 border-[#F58220] bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C] hover:border-white transition-all duration-300 group hover-scale"
          >
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F58220] flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <FileText className="w-8 h-8 text-white group-hover:text-[#F58220]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 text-white font-montserrat">
                    {category.cat}
                  </h3>
                  <p className="text-sm text-[#CCCCCC] font-lato">
                    Registration Form
                  </p>
                </div>
                <a
                  href={category.form}
                  download={category.form}
                  //   className="inline-block"
                >
                  <Button
                    className="w-full bg-[#F58220] hover:bg-white text-white hover:text-[#0B1E4A] border-2 border-[#F58220] font-semibold transition-all duration-300"
                    disabled={!category.form}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {category.form ? "Download Form" : "Coming Soon"}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Registration Instructions */}
      {/* <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220]">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F58220] flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white font-montserrat">
              Registration Instructions
            </h3>
            <ul className="space-y-2 text-[#CCCCCC] font-lato">
              <li className="flex items-start gap-2">
                <span className="text-[#F58220] font-bold mt-1">1.</span>
                <span>Download the registration form for your category</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F58220] font-bold mt-1">2.</span>
                <span>Fill out all required fields accurately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F58220] font-bold mt-1">3.</span>
                <span>
                  Submit the completed form along with required documents before
                  the deadline
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F58220] font-bold mt-1">4.</span>
                <span>
                  Contact us if you have any questions about the registration
                  process
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
};

const categories = [
  { cat: "U7 Boys", form: "/pdf/Under-7-Team-Registration-Form.pdf" },
  { cat: "U9 Boys", form: "/pdf/Under-9-Team-Registration-Form.pdf" },
  { cat: "U11 Boys", form: "/pdf/Under-11-Team-Registration-Form.pdf" },
  { cat: "U13 Boys", form: "/pdf/Under-13-Team-Registration-Form.pdf" },
  {
    cat: "U15 Boys",
    form: "/pdf/Under-15-Boys-Team-Registration-Form.pdf",
  },
  {
    cat: "U17 Boys",
    form: "/pdf/Under-17-Boys-Team-Registration-Form.pdf",
  },
  { cat: "U13 Girls", form: "" },
  {
    cat: "U15 Girls",
    form: "/pdf/Under-15-Girls-Team-Registration-Form.pdf",
  },
];
