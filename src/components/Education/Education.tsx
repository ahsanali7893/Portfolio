import React from "react";

type Props = {};

const Education = (props: Props) => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="container px-4 max-w-6xl mx-auto">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-[#66b3b3] sm:text-5xl lg:text-6xl">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/university-logo.png"
                  alt="University Logo"
                  className="h-12 w-12 rounded-full object-cover shadow-md mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-gray-600">University of Example</p>
                  <p className="text-gray-600">Graduated in May 20XX</p>
                </div>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                eu nisi ac turpis commodo fermentum.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/high-school-logo.png"
                  alt="High School Logo"
                  className="h-12 w-12 rounded-full object-cover shadow-md mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    High School Diploma
                  </h3>
                  <p className="text-gray-600">Example High School</p>
                  <p className="text-gray-600">Graduated in June 20XX</p>
                </div>
              </div>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
