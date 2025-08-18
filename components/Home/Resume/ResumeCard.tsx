import React from "react";
import { IconType } from "react-icons";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  showDate?: boolean;
  showFreshGraduate?: boolean;
  description?: string; // 👈 added for custom text
};

export default function ResumeCard({
  Icon,
  role,
  date,
  showDate,
  showFreshGraduate,
  description,
}: Props) {
  return (
    <div className="mb-6">
      <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
        {/* Icon Section */}
        <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue- rounded-full flex items-center justify-center">
          <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          {showDate && date && (
            <h1
              className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full 
               bg-gradient-to-r from-cyan-400/20 to-pink-600/50 
               text-cyan-300 w-fit sm:text-lg text-sm font-bold"
            >
              {date}
            </h1>
          )}

          <h1 className="text-gray-200 text-xl sm:text-2xl font-semibold">
            {role}
          </h1>

          {/* Show Fresh Graduate text only if flag is true */}
          {showFreshGraduate && (
            <p className="text-gray-300 text-sm sm:text-base pt-3">
              Fresh Graduate
            </p>
          )}

          {/* Show description if provided */}
          {description && (
            <p className="text-gray-400 text-sm sm:text-base pt-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
