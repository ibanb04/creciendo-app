import { useEffect } from "react";
import { useQuery } from "react-query";
import { getDepartments } from "../../services/getDepartments";

export const Interview = () => {
  const {
    data: departamentos,
    isLoading,
    isFetching,
    error,
  } = useQuery(["departamento"], () => getDepartments(), {
    refetchOnWindowFocus: false,
  });

  departamentos?.map((departamento: any, index: number) =>
    console.log(index, departamento.departamento)
  );

  return <div>Interview</div>;
};
