import { useState } from "react";

export const getDepartments = async () => {

  const url = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';
  const response = await fetch(url)
  const data = await response.json();
 
  return data;
  

};
