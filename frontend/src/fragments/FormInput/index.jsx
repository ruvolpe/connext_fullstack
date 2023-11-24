export const FormInput = ({ label, id, placeholder, type, register }) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      ⁠{" "}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};
