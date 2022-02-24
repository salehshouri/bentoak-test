const Select = ({ placeholder, children, ...props }) => (
  <div class="relative">
    <select
      {...props}
      className="  font-IranSans block appearance-none w-full  border py-2 px-3 rounded-xl leading-tight focus:outline-none "
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {children}
    </select>
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 ">
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
);

export default Select;
