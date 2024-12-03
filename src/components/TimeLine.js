import React from "react";

const TimeLine = () => {
  return (
    <section class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <p className="text-2xl text-black text-center sm:text-4xl pt-4font-bold">
          Experience
        </p>
      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <div class="w-full max-w-3xl mx-auto">
            <div class="-my-6">
              <div class="relative pl-8 sm:pl-32 py-6 group">
                <div class="font-medium text-indigo-500 mb-1 sm:mb-0">
                  Assistant Software Engineer
                </div>
                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Oct, 2022
                  </time>
                  <div class="text-xl font-bold text-slate-900">
                  Antier solutions , Mohali, India
                  </div>
                </div>
                <div class="text-slate-500">
                  <ul>
                    <li>
                      Lead Frontend development to reach our goal in given time.
                    </li>
                    <li>
                      Optimization and building components for better user
                      experience.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="relative pl-8 sm:pl-32 py-6 group">
                <div class="font-medium text-indigo-500 mb-1 sm:mb-0">
                  Software Engineer Intern
                </div>
                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    April 2022
                  </time>
                  <div class="text-xl font-bold text-slate-900">
                    Antier solutions , Mohali, India
                  </div>
                </div>
                <div class="text-slate-500">
                  <ul>
                    <li>
                      Proficient in front-end languages (HTML, CSS, JavaScript)
                      and keen to learn new technologies
                    </li>
                    <li>
                      Strong problem-solving skills and a collaborative mindset
                    </li>
                  </ul>
                </div>
              </div>

              <div class="relative pl-8 sm:pl-32 py-6 group">
                <div class="font-medium text-indigo-500 mb-1 sm:mb-0">
                  Web Development Intern
                </div>
                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Feb 2022
                  </time>
                  <div class="text-xl font-bold text-slate-900">
                    Digimantra Labs , Mohali, Punjab, India
                  </div>
                </div>
                <div class="text-slate-500">
                  Highly motivated web development intern seeking to leverage a
                  strong foundation in HTML, CSS, and JavaScript during an
                  intensive 45-day internship.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
