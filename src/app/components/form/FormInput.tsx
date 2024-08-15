export default function FormInput(props: any) {
  const {
    label = "",
    type = "text",
    name = "",
    id = "",
    placeholder = "",
    required = false
  } = props;

  return (
    <>
      <div className="mb-[15px]">
        {label && (
          <label 
            className="block mb-[5px] font-[600] text-[14px]" 
            htmlFor={id}
          >
            <span className="text-white">{label}</span>
            <span className="text-red-500 ml-[5px]">*</span>
          </label>
        )}
        <input 
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="h-[50px] w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
          required={required}
        />
      </div>
    </>
  )
}