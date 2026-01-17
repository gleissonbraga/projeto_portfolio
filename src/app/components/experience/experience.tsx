"use client";
import { useTheme } from "@/app/hooks/themeContext";
import Title from "../title/title";
import { useTranslation } from "react-i18next";
import { professionalExperience } from "@/lib/data/listExperience";
import { education } from "@/lib/data/listEducation";

export function Experience() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const newTitle = t("experience.title");

  //   ${theme === 'light' ? "border-[#D62828]" : "border-[#546aab] bg-[#333333]"}
  // ${theme === 'dark' ? "border-[#546aab] bg-[#333333]" : "border-[#D62828]"}

  return (
    <section
      id="experience"
      className={`
            ${
              theme === "light"
                ? "bg-[#FFFFFF] text-[#000000] "
                : "bg-[#1d1d1d]"
            }
            ${
              theme === "dark" ? "bg-[#1d1d1d] text-[#fffffff]" : "bg-[#FFFFFF]"
            }
            pt-14 
            flex 
            items-center 
            flex-col
            `}
    >
      <Title title={newTitle} />
      <div className="flex flex-wrap w-[90%]">
        <section className="py-24 px-6 w-full lg:w-1/2 flex justify-center rounded-xl">
          <div className="w-[90%]">
             <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text
                ${theme === "light" ? "text-[#D62828]" : "text-[#546aab]"}
                  ${theme === "dark" ? "text-[#546aab]" : "text-[#D62828]"}`}>
                    {t("experience.titleProfessional")}
            </h2>
            <div
              className={`space-y-12 border-l-4 ml-4 md:ml-0 pl-8 md:pl-0
            ${theme === "light" ? "border-[#D62828]" : "border-[#546aab]"}
            ${theme === "dark" ? "border-[#546aab]" : "border-[#D62828]"}`}
            >
              {professionalExperience.map((job) => (
                <div
                  key={job.id}
                  className="relative md:grid md:grid-cols-5 gap-8 items-start group"
                >
                  <div className="md:col-span-1 md:text-right md:pr-8 pt-1 pl-1">
                    <span
                      className={`text-sm font-semibold
                  ${theme === "light" ? "text-[#D62828]" : "text-[#546aab]"}
                  ${theme === "dark" ? "text-[#546aab]" : "text-[#D62828]"}
                  block mb-1`}
                    >
                      {t(job.period)}
                    </span>
                    <span className="text-xs text-gray-500">Atualmente</span>
                  </div>
                  <div
                    className={`absolute -left-[41px] md:left-auto md:right-[calc(80%+15px)] w-5 h-5 rounded-full
                   ${
                     theme === "light"
                       ? "bg-[#D62828]"
                       : "bg-[#546aab] border-[#1D1D1D]"
                   }
                   ${
                     theme === "dark"
                       ? "bg-[#546aab] border-[#1D1D1D]"
                       : "bg-[#D62828]"
                   }
                   border-4  group-hover:scale-125 transition-transform  shadow-2xl`}
                  />
                  <div
                    className={`md:col-span-4
                    ${
                      theme === "light"
                        ? "bg-white "
                        : "bg-[#292626] border-[#1D1D1D]"
                    }
                   ${theme === "dark" ? "bg-[#292626]" : "bg-white"}
                    p-6 rounded-2xl shadow-sm border border-gray-100  hover:shadow-md transition-shadow`}
                  >
                    <h3 className="text-xl font-bold">{t(job.role)}</h3>
                    <h4
                      className={`text-lg 
                    ${theme === "light" ? "text-[#D62828]" : "text-[#546aab]"}
                    ${
                      theme === "dark" ? "text-[#546aab]" : "text-[#D62828]"
                    } mb-3`}
                    >
                      {t(job.company)}
                    </h4>
                    <p
                      className={`text-gray-700 mb-4
                    ${theme === "light" ? "text-gray-700" : "text-white"}
                    ${theme === "dark" ? "text-white" : "text-gray-700"}`}
                    >
                      {t(job.description)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 text-xs rounded-full
                            ${
                              theme === "light"
                                ? " text-red-700 bg-red-100"
                                : "text-blue-700 bg-blue-100"
                            }
                            ${
                              theme === "dark"
                                ? "text-blue-700 bg-blue-100"
                                : "text-red-700 bg-red-100"
                            } shadow-lg`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 px-6 w-full lg:w-1/2 flex justify-center rounded-xl">
          <div className="w-[90%]">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text
                ${theme === "light" ? "text-[#D62828]" : "text-[#546aab]"}
                  ${theme === "dark" ? "text-[#546aab]" : "text-[#D62828]"}`}>
                       {t("study.title")}
            </h2>
            <div
              className={`space-y-12 border-l-4 ml-4 md:ml-0 pl-8 md:pl-0
            ${theme === "light" ? "border-[#D62828]" : "border-[#546aab]"}
            ${theme === "dark" ? "border-[#546aab]" : "border-[#D62828]"}`}
            >
              {education.map((job) => (
                <div
                  key={job.id}
                  className="relative md:grid md:grid-cols-5 gap-8 items-start group"
                >
                  <div className="md:col-span-1 md:text-right md:pr-8 pt-1 pl-1">
                    <span
                      className={`text-sm font-semibold
                  ${theme === "light" ? "text-[#D62828]" : "text-[#546aab]"}
                  ${theme === "dark" ? "text-[#546aab]" : "text-[#D62828]"}
                  block mb-1`}
                    >
                      {t(job.period)}
                    </span>
                    <span className="text-xs text-gray-500">{t(job.semestre)}</span>
                  </div>
                  <div
                    className={`absolute -left-[41px] md:left-auto md:right-[calc(80%+15px)] w-5 h-5 rounded-full
                   ${
                     theme === "light"
                       ? "bg-[#D62828]"
                       : "bg-[#546aab] border-[#1D1D1D]"
                   }
                   ${
                     theme === "dark"
                       ? "bg-[#546aab] border-[#1D1D1D]"
                       : "bg-[#D62828]"
                   }
                   border-4  group-hover:scale-125 transition-transform  shadow-2xl`}
                  />
                  <div
                    className={`md:col-span-4
                    ${
                      theme === "light"
                        ? "bg-white"
                        : "bg-[#292626] border-[#1D1D1D]"
                    }
                   ${theme === "dark" ? "bg-[#292626]" : "bg-white"}
                    p-6 rounded-2xl shadow-sm border border-gray-100  hover:shadow-md transition-shadow`}
                  >
                    <h3 className="text-xl font-bold">{t(job.name)}</h3>
                    <h4
                      className={`text-lg 
                    ${theme === "light" ? "text-[#D62828]" : "text-[#546aab]"}
                    ${
                      theme === "dark" ? "text-[#546aab]" : "text-[#D62828]"
                    } mb-3`}
                    >
                      {t(job.nameUniversity)}
                    </h4>
                    <p
                      className={`text-gray-700 mb-4
                    ${theme === "light" ? "text-gray-700" : "text-white"}
                    ${theme === "dark" ? "text-white" : "text-gray-700"}`}
                    >
                      {t(job.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
