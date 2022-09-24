import { getDepartments } from '../../services/getDepartments';

export const Interview = () => {
  const departamento = getDepartments('Antioquia');
  console.log(departamento);
  return (
    <div>Interview</div>
  )
}
