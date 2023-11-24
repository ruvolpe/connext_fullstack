export const Select = ({ register }) => {
  return (
    <select {...register}>
      <option value="m1">Primeiro módulo</option>
      <option value="m2">Segundo módulo</option>
      <option value="m3">Terceiro módulo</option>
      <option value="m4">Quarto módulo</option>
      <option value="m5">Quinto módulo</option>
      <option value="m6">Sexto módulo</option>
    </select>
  );
};
