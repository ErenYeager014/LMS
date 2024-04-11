import { inputprops } from "./InputText";

const FileInput = ({ name, label, onChange }: inputprops) => {
  return (
    <div>
      <input
        placeholder={label}
        className="block p-5 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        onChange={onChange}
        required
        name={name}
        type="file"
      />
    </div>
  );
};

export default FileInput;
