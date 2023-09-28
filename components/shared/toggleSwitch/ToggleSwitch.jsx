export default function ToggleSwitch() {
  return (
    <>
      <div className="mb-3 ">
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            name="toggle"
            id="Switch"
            className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            for="Switch"
            className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
          ></label>
        </div>
        <span className="font-medium text-gray-400" />
      </div>
    </>
  );
}
