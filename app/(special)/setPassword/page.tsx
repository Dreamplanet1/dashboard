export default function SendFormPage() {

  return (
    <div className="w-full min-h-screen bg-white">

      {/* PAGE HEADER */}
      <div className="w-full border-b py-4 px-4 flex justify-between items-center">
        <h1 className="font-medium text-[18px]">Send Form</h1>
      </div>

      {/* PAGE CONTENT */}
      <div className="max-w-lg w-full mx-auto py-10 px-4">
        <div className="grid w-full gap-[8px]">
          <label
            className="font-medium text-[14px] text-[#10002E]"
            htmlFor="password"
          >
            Password
          </label>

          <input
            type="password"
    
            placeholder="Password"
            className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[14px] placeholder:text-[#C8C8C8] border-[#C8C8C8] border rounded-[8px] h-[44px] px-3"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mt-10">

          <button
            className="bg-transparent hover:bg-transparent border transition-all hover:scale-105 active:scale-95 text-black px-4 py-2 rounded-md"
          >
            Cancel
          </button>
            <button
              className=" px-4 py-2 rounded-md"
              disabled
            >
              Send
            </button>
   
        </div>
      </div>
    </div>
  );
}
