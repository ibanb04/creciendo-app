import { useRef } from "react";
import { useAppSelector } from "../../store/useAppDispatch";
import { useReactToPrint } from "react-to-print";
import { CustomNavBar } from "../../helpers/CustomNavBar";
import domToPdf from "dom-to-pdf";

const AnecdotarioAntiguo = () => {
  const { selectetStudent } = useAppSelector((state) => state.student);
  const añoLectivo = new Date().getFullYear() + 1;
  const componentRef = useRef();

  const element = document.querySelector("#anecdotario-nuevo");

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const options = {
    filename: `Contrato_${selectetStudent.idNumber}.pdf`,
    compression: "SLOW",
  };

  const handleDownload = () => {
    domToPdf(element, options, function (pdf) {
      console.log("done");
    });
  };

  console.log(selectetStudent);
  return (
    <>
      <CustomNavBar
        title="Documento De Anecdotario Antiguo"
        handlePrint={handlePrint}
        handleDownload={handleDownload}
      />

      <div
        id="anecdotario-nuevo"
        ref={componentRef}
        style={{
          margin: "5%",
          marginBottom: "0%",
        }}
      >
        <div
          className="pag1"
          style={{
            height: "12.9in",
          }}
        >
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "13pt",
            }}
          >
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              ANECDOTARIO ESCOLAR (SEGUIMIENTO ESTUDIANTES ANTIGUOS)&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "18pt",
            }}
          >
            <span
              style={{
                fontFamily: '"Franklin Gothic Demi Cond"',
                fontSize: "11pt",
              }}
            >
              &nbsp;
            </span>
            <span
              style={{
                fontFamily: '"Franklin Gothic Demi Cond"',
                fontSize: "11pt",
              }}
            >
              COLEGIO PARA LA ESTIMULACIÓN DEL DESARROLLO INTEGRAL&nbsp;
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>“</span>
            <strong>
              <span style={{ fontFamily: '"Curlz MT"' }}>CRECIENDO”</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
            }}
          >
            <span style={{ fontFamily: '"Franklin Gothic Demi"' }}>
              Resolución 1438 del 10 de Dic/2008 DANE 347001053213 NIT
              901024336-1
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "10pt" }}
          >
            <span style={{ fontFamily: '"Franklin Gothic Demi"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
            }}
          >
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              PERIODO LECTIVO {añoLectivo}
            </span>
          </p>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "25%",
              border: "0.75pt solid #262626",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr style={{ height: "6.1pt" }}>
              
                <td
                  style={{
                    borderLeft: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Fecha matricula:&nbsp;{" "}
                      {selectetStudent?.admissionDate?.slice(0, 10)}
                    </span>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
            <strong>
              <span style={{ fontFamily: "Arial", fontWeight: "bold " }}>
                1. IDENTIFICACION DEL ESTUDIANTE:
              </span>
            </strong>
          </p>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Primer Nombre:&nbsp;
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "29.6%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.firstName}
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Segundo nombre:
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={3}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.middleName}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Primer Apellido:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "29.6%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.firstLastName}
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Segundo Apellido:
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={3}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.secondLastName}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Fecha Nacimiento:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "29.6%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.birthDate?.slice(0, 10)}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "9.2%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Género:
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent?.gender}
                    </span>
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "9.86%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Edad:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "9.86%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.age}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Lugar de Nacimiento:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "29.6%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Dpto:
                    </span>
                    <span style={{ fontFamily: "Arial" }}>
                      &nbsp;{selectetStudent?.birthDepartment}
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={5}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Municipio:&nbsp;
                    </span>
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.cityOfBirth}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "14.7%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Tipo Doc.
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "11.3%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.idType}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "29.6%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      No. {selectetStudent?.idNumber}
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Lugar expedición:
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={3}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.expeditionPlace}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "14.7%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Dirección:
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={7}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.address}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "14.7%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Barrio:
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={3}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.neighborhood}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "11.92%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Teléfono:&nbsp;
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={3}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.studentPhoneNumber}
                    </span>
                  </h2>
                </td>
              </tr>
            </tbody>
            <br />
          </table>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "24.9%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Grado a cursar:
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.grade}
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Modalidad Educativa:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "24.34%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent?.educationalModality}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Ingresa a la vigencia con acta
                    </span>
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      &nbsp;&nbsp;
                    </span>
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      de compromiso:&nbsp;
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={4}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent?.enterWithBehaviourRecord.map((item) => (
                        <span>{item},</span>
                      ))}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "24.9%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Ultimo grado cursado:
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent?.lastGrade}
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Situación académica del año anterior:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "24.34%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.academicSituation}
                    </span>
                  </h2>
                </td>
              </tr>

              <tr style={{ height: "0pt" }}>
                <td style={{ width: "134.35pt" }}>
                  <br />
                </td>
                <td style={{ width: "68pt" }}>
                  <br />
                </td>
                <td style={{ width: "93.55pt" }}>
                  <br />
                </td>
                <td style={{ width: "56.3pt" }}>
                  <br />
                </td>
                <td style={{ width: "56pt" }}>
                  <br />
                </td>
                <td style={{ width: "131.3pt" }}>
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #262626",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr style={{ height: "6.1pt" }}>
                <td
                  style={{
                    width: "25%",
                    borderRight: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Discapacidad:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "75%",
                    borderLeft: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.studentDisability.map((disability) => (
                        <span>{disability},</span>
                      ))}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "25%",
                    borderTop: "0.75pt solid #262626",
                    borderRight: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Diagnóstico:&nbsp;
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "75%",
                    borderTop: "0.75pt solid #262626",
                    borderLeft: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.diagnosis?.slice(0, 65)}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "25%",
                    borderTop: "0.75pt solid #262626",
                    borderRight: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Especialidades tratantes:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "75%",
                    borderTop: "0.75pt solid #262626",
                    borderLeft: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.especiallys.map((specialty) => (
                        <span>{specialty},</span>
                      ))}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "25%",
                    borderTop: "0.75pt solid #262626",
                    borderRight: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Asiste a terapias:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "75%",
                    borderTop: "0.75pt solid #262626",
                    borderLeft: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.therapys.map((therapy) => (
                        <span>{therapy},</span>
                      ))}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "25%",
                    borderTop: "0.75pt solid #262626",
                    borderRight: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Capacidad Excepcional:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "75%",
                    borderTop: "0.75pt solid #262626",
                    borderLeft: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.exceptionalPerformance === true
                        ? "Si"
                        : "No"}
                    </span>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #262626",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr style={{ height: "6.1pt" }}>
                <td
                  style={{
                    width: "61.72%",
                    borderRight: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Madre:&nbsp;
                    </span>
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.motherName}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "19.68%",
                    borderRight: "0.75pt solid #262626",
                    borderLeft: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Celular: {selectetStudent?.motherTel}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "18.6%",
                    borderLeft: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Convive:{" "}
                      {selectetStudent?.motherlivesWithStudent === true
                        ? "Si"
                        : "No"}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "61.72%",
                    borderTop: "0.75pt solid #262626",
                    borderRight: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Padre:&nbsp;
                    </span>
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.fatherName}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "19.68%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Celular: {selectetStudent?.fatherTel}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "18.6%",
                    borderTop: "0.75pt solid #262626",
                    borderLeft: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Convive:{" "}
                      {selectetStudent?.fatherlivesWithStudent === true
                        ? "Si"
                        : "No"}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "61.72%",
                    borderTop: "0.75pt solid #262626",
                    borderRight: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Acudiente:&nbsp;
                    </span>
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.guardianName}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "19.68%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Celular: {selectetStudent?.guardiantTel}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "18.6%",
                    borderTop: "0.75pt solid #262626",
                    borderLeft: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Convive:{" "}
                      {selectetStudent?.guardiantlivesWithStudent === true
                        ? "Si"
                        : "No"}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  rowSpan={2}
                  style={{
                    width: "61.72%",
                    borderTop: "0.75pt solid #262626",
                    borderRight: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Otro Contacto: {selectetStudent?.anotherContactName}
                    </span>
                  </h2>
                </td>
                <td
                  rowSpan={2}
                  style={{
                    width: "19.68%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Celular: {selectetStudent?.anotherContactTel}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "18.6%",
                    borderTop: "0.75pt solid #262626",
                    borderLeft: "0.75pt solid #262626",
                    borderBottom: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Convive: &nbsp;
                      {selectetStudent?.anotherContactlivesWithStudent === true
                        ? "Si"
                        : "No"}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "18.6%",
                    borderTop: "0.75pt solid #262626",
                    borderLeft: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "10pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Parentesco: &nbsp;
                      {selectetStudent?.anotherContactRelationship}
                    </span>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
          <br />

          <span style={{ fontFamily: "Arial", fontWeight: "bold" }}>
            2. SITUACION DE INGRESO:
          </span>

          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "100%",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                    backgroundColor: "#c0c0c0",
                  }}
                >
                  <p
                    style={{
                      marginTop: "6pt",
                      marginBottom: "6pt",
                      fontSize: "11pt",
                    }}
                  >
                    <strong>
                      <span style={{ fontFamily: "Arial" }}>
                        Aspectos relevantes del niño al ingreso de este año
                        escolar:
                      </span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "100%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "100%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "100%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "100%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "100%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "100%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "100%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "100%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "8pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      ________________
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Evaluador</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="pag2"
          style={{
            height: "12.9in",
          }}
        >
          <span style={{ fontFamily: "Arial" }}>
            3. OBSERVACIONES TRIMESTRALES:
          </span>

          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                    backgroundColor: "#c0c0c0",
                  }}
                >
                  <ol style={{ margin: "0pt", paddingLeft: "0pt" }} type="I">
                    <li
                      style={{
                        marginTop: "6pt",
                        marginLeft: "29.67pt",
                        marginBottom: "6pt",
                        paddingLeft: "24.33pt",
                        fontFamily: "Arial",
                        fontSize: "12pt",
                        fontWeight: "bold",
                      }}
                    >
                      TRIMESTRE
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "50%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      _________________________
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Docente Titular&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "50%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      _______________________
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Acudiente</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>&nbsp;</p>

          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                    backgroundColor: "#c0c0c0",
                  }}
                >
                  <ol
                    start={2}
                    style={{ margin: "0pt", paddingLeft: "0pt" }}
                    type="I"
                  >
                    <li
                      style={{
                        marginTop: "6pt",
                        marginLeft: "33pt",
                        marginBottom: "6pt",
                        paddingLeft: "21pt",
                        fontFamily: "Arial",
                        fontSize: "12pt",
                        fontWeight: "bold",
                      }}
                    >
                      TRIMESTRE
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "50%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      _________________________
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Docente Titular&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "50%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      _______________________
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Acudiente</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>&nbsp;</p>
        </div>
        <div
          className="pag3"
          style={{
            height: "12.9in",
          }}
        >
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                    backgroundColor: "#c0c0c0",
                  }}
                >
                  <ol
                    start={3}
                    style={{ margin: "0pt", paddingLeft: "0pt" }}
                    type="I"
                  >
                    <li
                      style={{
                        marginTop: "6pt",
                        marginLeft: "36.34pt",
                        marginBottom: "6pt",
                        paddingLeft: "17.66pt",
                        fontFamily: "Arial",
                        fontSize: "12pt",
                        fontWeight: "bold",
                      }}
                    >
                      TRIMESTRE
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "50%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      _________________________
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Docente Titular&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "50%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      _______________________
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Acudiente</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                    backgroundColor: "#c0c0c0",
                  }}
                >
                  <ol
                    start={4}
                    style={{ margin: "0pt", paddingLeft: "0pt" }}
                    type="I"
                  >
                    <li
                      style={{
                        marginTop: "6pt",
                        marginLeft: "37.67pt",
                        marginBottom: "6pt",
                        paddingLeft: "16.33pt",
                        fontFamily: "Arial",
                        fontSize: "12pt",
                        fontWeight: "bold",
                      }}
                    >
                      TRIMESTRE
                    </li>
                  </ol>
                </td>
              </tr>
              <tr style={{ height: "27.85pt" }}>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "50%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      _________________________
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Docente Titular&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "50%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      _______________________
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "14pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Acudiente</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              lineHeight: "150%",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              lineHeight: "150%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                OBSERVACION FINAL:&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: "Arial" }}>
              Es promovido al siguiente año escolar
            </span>
            <span style={{ fontFamily: "Arial" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: "Arial" }}>SI_____</span>
            <span style={{ fontFamily: "Arial" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: "Arial" }}>
              NO_____
              __________________________________________________________________________________
            </span>
          </p>
          <div
            className="container-firmas"
            style={{
              display: "flex",
              justifyContent: "space-between",
              lineHeight: "150%",
              alignItems: "flex-end",
              fontFamily: "Arial",
            }}
          >
            <div className="container-firma-docente">
              <span>_____________________</span>
              <br />
              <span>Docente Titular</span>
            </div>
            <div className="container-firma-rector">
              <img
                src="https://myfiles.space/user_files/139488_543daa43bb1ede3a/1671489616_anecdotarios-nuevo/1671489616_anecdotarios-nuevo-1.jpeg"
                width={177}
                height={44}
                alt=""
                style={{ margin: "0 auto 0 0", display: "block" }}
              />
              &nbsp;
              <span>_______________________</span>
              <br />
              <span>Rector</span>
            </div>
          </div>
        </div>
        <div
          className="pag4"
          style={{
            height: "12.6in",
          }}
        >
          <span
            style={{
              marginLeft: "33.01pt",
              lineHeight: "150%",
              paddingLeft: "2.99pt",
              fontFamily: "Arial",
              fontWeight: "bold",
            }}
          >
          4. SEGUIMIENTO y EVOLUCION
          </span>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "13.14%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "86.86%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      fontSize: "16pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>
      </div>
    </>
  );
};

export default AnecdotarioAntiguo;
