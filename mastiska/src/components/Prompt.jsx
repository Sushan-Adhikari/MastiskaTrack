import React, { useState } from "react";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const responseFromServer = await simulateBackendRequest(prompt);
      setResponse(responseFromServer);
    } catch (error) {
      console.error("Error processing the prompt:", error);
      setResponse("An error occurred while processing the prompt.");
    }
  };

  const simulateBackendRequest = async (inputPrompt) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `Response: ${inputPrompt}`;
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-gray  p-8 rounded-lg shadow-lg text-white w-full max-w-screen-lg h-screen grid grid-rows-3 gap-4">
        <div className="row-span-2">
          <h1 className="text-3xl font-semibold mb-6">
            Screening For a Mental Health Issue
          </h1>
          <div>
            <textarea
              className="w-full p-4 bg-gray-700 text-white border border-gray-600 rounded-md resize-none mb-4"
              rows="4"
              placeholder="Enter your prompt..."
              value={prompt}
              onChange={handlePromptChange}
            ></textarea>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div>
            {response && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-2 ">Response:</h2>
                <div className="bg-gray-700 text-white border border-gray-600 rounded-md p-4">
                  {response}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
