export const getDepartments = async (departament: string) => {
  const url = `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${encodeURI(
    departament
  )}`;
  const response = await fetch(url);
  const data = await response.json();
  const departamento =  data.map((item: any) => {
           return {
               
           }
    })

  return departamento;
};
