/* eslint-disable react/self-closing-comp */
import React from "react";

const CodeCard = () => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
      {/* Top Circle */}
      <div className="h-3 w-3 rounded-full bg-green-200 mb-4"></div>

      {/* Main Card */}
      <div className="overflow-hidden border-l-[2px] border-indigo-500 px-4 py-4 lg:px-8 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink mb-4">&lt;div&gt;</div>

          {/* Skills Section */}
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Skills:</span>
            <span className="text-gray-400">
              &lt;span&gt;React&lt;/span&gt;
            </span>
            <br />
            <span className="text-gray-400">
              &lt;span&gt;NextJS&lt;/span&gt;
            </span>
            <br />
            <span className="text-gray-400">
              &lt;span&gt;Redux&lt;/span&gt;
            </span>
            <br />
            <span className="text-gray-400">
              &lt;span&gt;Express&lt;/span&gt;
            </span>
            <br />
            <span className="text-gray-400">
              &lt;span&gt;NestJS&lt;/span&gt;
            </span>
            <br />
            <span className="text-gray-400">
              &lt;span&gt;MySQL&lt;/span&gt;
            </span>
            <br />
            <span className="text-gray-400">
              &lt;span&gt;MongoDB&lt;/span&gt;
            </span>
            <br />
            <span className="text-gray-400">
              &lt;span&gt;Docker&lt;/span&gt;
            </span>
            <br />
            <span className="text-gray-400">&lt;span&gt;AWS&lt;/span&gt;</span>
            <br />
          </div>

          {/* Return Statement */}
          <div className="lg:ml-16 mr-2 mt-4 text-orange-400">
            return <span className="text-gray-400">(&lt;span&gt;</span>
          </div>

          <div className="text-gray-400">{"}"}</div>
        </code>
      </div>
    </div>
  );
};

export default CodeCard;
