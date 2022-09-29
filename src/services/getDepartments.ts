export const getDepartments = async (departments: string) => {

  const url = `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${ encodeURI(departments)}`; 
  const response = await fetch(url)
  const data = await response.json();
 
  return data;
  

};
