import CustomInput from "../shared/CustomInputField/CustomInput";
import CustomLabel from "../shared/costomLabelField/CustomLabel";

export default function CustomCheckoutInputSection({
  className,
  inputType,
  inputPlaceholder,
  labelIcon,
  labelText,
}) {
  return (
    <>
      <div className={`grid grid-cols-3 items-center gap-16 mb-5`}>
        <div>
          <CustomLabel
            text={labelText}
            icon={labelIcon}
            className="flex items-center gap-4 text-sm "
          />
        </div>
        <div>
          <CustomInput
            type={inputType}
            placeholder={inputPlaceholder}
            className="rounded-lg border border-gray-400 p-2  w-[479px] h-16"
          />
        </div>
      </div>
    </>
  );
}
