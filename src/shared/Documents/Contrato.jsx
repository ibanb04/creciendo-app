import moment from "moment";
import { useRef } from "react";
import { useAppSelector } from "../../store/useAppDispatch";
import { useReactToPrint } from "react-to-print";
import { CustomNavBar } from "../../helpers/CustomNavBar";
import finger_box from "../../assets/finger_box.png";
import logo from "../../assets/img/EscudoCreciendo.png";
import firma_diana_arrieta from "../../assets/img/firma_diana_arrieta.jpeg";
import { useLectiveYear } from "../../hooks/useLectiveYear";
const Contrato = () => {
  const { selectetStudent } = useAppSelector((state) => state.student);
  const lectiveYear = useLectiveYear();
  const componentRef = useRef();
  const date = moment();
  const currentDate = date.format("D/MM/YYYY");

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <CustomNavBar title="Contrato de Matrícula" handlePrint={handlePrint} />

      <div
        ref={componentRef}
        id="contrato"
        style={{
          margin: "5%",
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
              fontSize: "14pt",
            }}
          >
            <img
              src={logo}
              width={62}
              height={61}
              alt="Logo"
              style={{ float: "left", marginBottom: "5px" }}
            />
            <span style={{ fontFamily: '"Franklin Gothic Medium Cond"' }}>
              COLEGIO PARA LA ESTIMULACIÓN DEL DESARROLLO INTEGRAL CRECIENDO
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "9pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                PERIODO ACADEMICO {lectiveYear}
              </span>
            </strong>
          </p>

          <div
            className="fecha"
            style={{
              fontFamily: "Arial",
              fontWeight: "normal",
              textAlign: "right",
              fontSize: "9pt",
            }}
          >
            <span>FECHA:</span>
            <span>&nbsp;</span>
            <span>{selectetStudent?.admissionDate?.slice(0, 10)}</span>
          </div>

          <p style={{ marginTop: "1pt", marginBottom: "1pt", fontSize: "9pt" }}>
            <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          </p>
          <p style={{ marginTop: "1pt", marginBottom: "1pt", fontSize: "9pt" }}>
            <span style={{ fontFamily: "Arial" }}>I</span>
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                . INFORMACIÓN GENERAL DEL ALUMNO:
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
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakAfter: "avoid",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Primer Nombre:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "27.4%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.firstName}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Segundo nombre:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.middleName}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Primer Apellido:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "27.4%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.firstLastName}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Segundo Apellido:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.secondLastName}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Fecha Nacimiento:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "27.4%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent?.birthDate?.slice(0, 10)}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "9.6%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Género:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "13.7%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.gender}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "8.22%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Edad:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "16.44%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.age}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Lugar de Nacimiento:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "27.4%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Dpto: {selectetStudent.birthDepartment}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Municipio: {selectetStudent.cityOfBirth}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.24%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Tipo Doc.
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "12.38%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.idType}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "27.4%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      No. {selectetStudent.idNumber}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Lugar expedición:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.expeditionPlace}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.24%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Dirección:
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={6}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.address}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.24%",
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
                      fontSize: "9pt",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.neighborhood}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "13.7%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Teléfono:&nbsp;
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.studentPhoneNumber}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Correo alumno:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.studentEmail}
                    </span>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "3pt",
              textAlign: "justify",
              fontSize: "9pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "3pt",
              textAlign: "justify",
              fontSize: "9pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                II. INFORMACIÓN ACADEMICA:
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
                  style={{
                    width: "22.54%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Grado a cursar:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.grade}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Modalidad Educativa:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "27.4%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.educationalModality}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
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
                      fontSize: "9pt",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.enterWithBehaviourRecord}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "22.54%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Ultimo grado cursado:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.lastGrade}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Situación académica del año anterior:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "27.4%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.academicSituation}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "22.54%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Colegio:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.school}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "10.24%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Ciudad:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "27.4%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.schoolCity}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Motivo de retiro colegio anterior:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.reason}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Discapacidad:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent?.studentDisability.map(
                        (disability, index) => (
                          <span key={index}>{disability},</span>
                        )
                      )}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Diagnóstico:&nbsp;
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.diagnosis}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Especialidades tratantes:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.especiallys.map(
                        (especialidad, index) => {
                          return <span key={index}>{especialidad},&nbsp;</span>;
                        }
                      )}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Asiste a terapias:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.therapys.map((terapia, index) => {
                        return <span key={index}>{terapia},&nbsp;</span>;
                      })}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Capacidad Excepcional:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.exceptionalPerformance === true
                        ? "Si"
                        : "No"}
                    </span>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "3pt",
              textAlign: "justify",
              fontSize: "9pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "3pt",
              textAlign: "justify",
              fontSize: "9pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                III. INFORMACIÓN SOCIOECONOMICA:
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
                  style={{
                    width: "11.42%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      EPS:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.eps}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "18.46%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Estrato vivienda:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "34.26%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.housingStratum}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Nivel SISBEN:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "21.92%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.sisbenLevel}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "18.46%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Carnet SISBEN:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "34.26%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.sisbenCarnet}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Beneficiario Programas:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.beneficiaryPrograms}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "11.42%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Etnia:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.ethnicity}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "18.46%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Resguardo:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "34.26%",
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
                      textAlign: "justify",
                      pageBreakAfter: "avoid",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.indigenousShelter}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Víctima del conflicto:
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.conflictVictim}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Departamento Expulsor:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "21.92%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.ejectorDepartment}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "18.46%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Fecha expulsión:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "34.26%",
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
                      textAlign: "justify",
                      pageBreakAfter: "avoid",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent?.ejectionDate?.slice(0, 10)}
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Municipio Expulsor:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "21.92%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.ejectorMunicipality}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "18.46%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      Certificado:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "34.26%",
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
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
                      {selectetStudent.ejectionCertificate}
                    </span>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "3pt",
              textAlign: "justify",
              fontSize: "9pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                IV. INFORMACIÓN FAMILIAR:
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
                  colSpan={3}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Nombre de la Madre:
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.motherName}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Convive con el estudiante:{" "}
                      {selectetStudent.motherlivesWithStudent === true
                        ? "Si"
                        : "No"}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Cedula:&nbsp;</span>
                  </p>
                </td>
                <td
                  colSpan={6}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.motherId}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Expedición:</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.motherIdExpeditionPlace}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Teléfonos:&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  colSpan={6}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.motherTel}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Profesión:</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.motherProfession}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Empresa:</span>
                  </p>
                </td>
                <td
                  colSpan={6}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.motherCompanyName}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Cargo actual:</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.motherJobTitle}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Correo:</span>
                  </p>
                </td>
                <td
                  colSpan={11}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.motherEmail}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Nombre de Padre:
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.fatherName}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Convive con el estudiante:{" "}
                      {selectetStudent.fatherlivesWithStudent === true
                        ? "Si"
                        : "No"}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Cedula:&nbsp;</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.fatherId}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Expedición:</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent?.fatherIdExpeditionPlace}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Teléfonos:&nbsp;
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.fatherTel}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Profesión:</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.fatherProfession}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Empresa:</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.fatherCompanyName}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Cargo actual:</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.fatherJobTitle}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Correo:</span>
                  </p>
                </td>
                <td
                  colSpan={11}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.fatherEmail}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Acudiente (Responsable legal ante la institución):
                    </span>
                  </p>
                </td>
                <td
                  colSpan={6}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.guardianName}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Convive con el estudiante:{" "}
                      {selectetStudent.guardiantlivesWithStudent === true
                        ? "Si"
                        : "No"}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>CC:</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.guardiantId}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Lugar de expedición:
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.guardiantExpeditionPlace}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Teléfonos:&nbsp;
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.guardiantTel}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Parentesco:</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.guardiantRelationship}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  style={{
                    width: "12.84%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Correo:</span>
                  </p>
                </td>
                <td
                  colSpan={11}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.guardiantEmail}
                    </span>
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
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Otro contacto:&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  colSpan={6}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.anotherContactName}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      Convive con el estudiante:
                      {selectetStudent?.anotherContactlivesWithStudent === true
                        ? "Si"
                        : "No"}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Parentesco:</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.anotherContactRelationship}
                    </span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>Teléfono:&nbsp;</span>
                  </p>
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
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.anotherContactTel}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "13.5pt" }}>
                <td
                  colSpan={11}
                  style={{
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <strong>
                      <em>
                        <span style={{ fontFamily: "Arial" }}>
                          En calidad de acudiente o representante legal del
                          estudiante, entiende que la modalidad de estudio para
                          el &nbsp;
                          {lectiveYear} es presencial y acepta estar de acuerdo
                          con que su acudido(a) asista de manera presencial a
                          las clases para desarrollar el proceso de educación en
                          la modalidad presencial.
                        </span>
                      </em>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    width: "10.96%",
                    border: "0.75pt solid #262626",
                    paddingRight: "3.12pt",
                    paddingLeft: "3.12pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ fontFamily: "Arial" }}>
                      {selectetStudent.faceToFaceAuthorization === true
                        ? "Si"
                        : "No"}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Al firmar el presente formato de matrícula, como padre y/o
              acudiente responsable del niño(a), me comprometo a cumplir con
              todos los compromisos sociales y disciplinarios establecidos por
              la institución en el manual de convivencia y el presente contrato.
            </span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;&nbsp;</span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Conozco y acepto que el modelo educativo ofrecido por la
              institución para el periodo lectivo {lectiveYear} es el modelo
              presencial. Me comprometo, además, a cumplir con las obligaciones
              financieras adquiridas con la institución cancelando los costos
              correspondientes a: matrícula (una sola vez al iniciar el período
              escolar) y diez (10) mensualidades convenidas en $195.000 (para
              estudiantes de la básica primaria) y $190.000 (para estudiantes
              del preescolar), dentro de los términos de tiempo establecidos por
              el Colegio para la Estimulación del Desarrollo Integral Creciendo,
              los cinco (5) primeros días de cada mes. Entiendo además que al
              cancelar oportunamente las mensualidades convenidas en los
              términos de tiempo estipulados obtendré un descuento del 10%. De
              igual forma acepto que todos los soportes y documentos aportados
              para el proceso de matrícula son veraces.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "7pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "7pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <div
            className="container-firmas"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              fontSize: "9pt",
              fontFamily: "Arial",
            }}
          >
            <div className="firma-acudiente">
              <span sx={{ marginBottom: 10 }}>
                ________________________________________
              </span>
              <br />
              <span>{selectetStudent.guardianName}</span>
              <br />
              <span>C.C {selectetStudent.guardiantId}</span>
              <br />
              <span>Firma del padre y/o Acudiente&nbsp;</span>
            </div>
            <div className="firma-rectora">
              <img
                src={firma_diana_arrieta}
                width={204}
                height={62}
                alt="firma diana"
                style={{ float: "right" }}
              />
              <br />
              <span>________________________________________</span>
              <br />
              <span>Diana Isabel Arrieta Herrera</span>
              <br />
              <span>C.C 39.049.284 de Santa Marta</span>
              <br />
              <span>Firma del Rector&nbsp;</span>
            </div>
          </div>
        </div>

        <div
          className="pag3"
          style={{
            height: "12.9in",
          }}
        >
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "14pt",
            }}
          >
            <img
              src={logo}
              width={62}
              height={61}
              alt="logo colegio creciendo"
              style={{ float: "right" }}
            />
            <span
              style={{
                fontFamily: '"Franklin Gothic Demi Cond"',
                fontSize: "10pt",
              }}
            >
              COLEGIO PARA LA ESTIMULACIÓN PARA EL DESARROLLO INTEGRAL&nbsp;
            </span>
            <strong>
              <span style={{ fontFamily: '"Curlz MT"' }}>CRECIENDO</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "9pt",
            }}
          >
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              Aprobado por Resolución 1438 del 10 de Dic/2008
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              &nbsp; &nbsp;
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              DANE 347001053213
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              &nbsp; &nbsp;
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              NIT 901024336-1
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "11pt",
            }}
          >
            <span style={{ fontFamily: "Mistral" }}>
              Villa Marbella Mz C Casa 48 Teléfono: 4371718
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              borderBottom: "0.75pt solid #000000",
              fontSize: "4pt",
            }}
          >
            <span style={{ fontFamily: '"Mistral AV"' }}>&nbsp;</span>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "8pt" }}>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "4pt" }}>
            <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                CONTRATO DE SERVICIOS EDUCATIVOS AÑO ESCOLAR {lectiveYear}
              </span>
            </strong>
            <br />
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Entre los suscritos a saber: DIANA ISABEL ARRIETA HERRERA con C.C
              39.049.284 de Santa Marta, en nombre y representación del Colegio
              Para La Estimulación del Desarrollo Integral Creciendo, quien en
              adelante se llamará&nbsp;
            </span>
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>EL COLEGIO</span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;y {selectetStudent.guardianName} con C.C.{" "}
              {selectetStudent.guardiantId} de{" "}
              {selectetStudent.guardiantExpeditionPlace} en su nombre y en su
              condición de padre y/o acudiente del educando y quienes en lo
              sucesivo se denominará&nbsp;
            </span>
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
            </strong>
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>EL ACUDIENTE</span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              , hemos celebrado un contrato que se regirá por las siguientes
              cláusulas:&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Primera. DEFINICIÓN DEL CONTRATO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El presente contrato formaliza la vinculación del educando
              MARIA ISABEL ESCOBAR ZAPATA al servicio educativo que ofrece EL
              COLEGIO y compromete a las partes y al educando en las
              obligaciones legales y pedagógicas tendientes a hacer efectiva la
              prestación del servicio público educativo, obligaciones que son
              colectivas y esenciales para la consecución del objeto y de los
              fines comunes ya que el derecho a la educación se considera un
              derecho deber.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Segunda. OBJETO DEL CONTRATO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El objeto del presente contrato es procurar la formación
              integral del educando mediante la recíproca complementación de
              esfuerzos del mismo, de los acudientes y del colegio, con la
              búsqueda del pleno desarrollo de la personalidad del educando y dé
              un rendimiento académico satisfactorio en el ejercicio del
              programa curricular correspondiente al grado PRIMERO
            </span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;&nbsp;</span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              mediante el Proyecto Educativo Institucional del colegio.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Tercera. OBLIGACIONES ESENCIALES.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Son obligaciones esenciales del presente contrato para cumplir con
              el fin común de la educación del educando, las siguientes:&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) Por parte mismo, cumplir las pautas definidas y establecidas en
              el Proyecto Educativo Institucional y en el Reglamento Interno o
              Manual de Convivencia.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) Por parte del ACUDIENTE, pagar oportunamente el costo del
              servicio educativo, e integrarse cumplida y solidariamente al
              colegio para la formación del educando.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) Por parte de EL COLEGIO, impartir la enseñanza contratada y
              propiciar la mejor calidad y la continuidad del servicio.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Cuarta. DERECHOS Y OBLIGACIONES DEL ACUDIENTE.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El cumplimiento de las normas vigentes para el servicio
              educativo y en concordancia con el objeto del presente contrato,
              EL ACUDIENTE tiene los siguientes derechos:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) A exigir la regular prestación del servicio educativo.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) A exigir que el servicio educativo se ajuste a los programas
              oficiales.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) A exigir el cumplimiento del Proyecto Educativo Institucional.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              d) A participar en el proceso Educativo.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              e) A buscar y recibir orientación sobre la educación de su hijo o
              acudido.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Así mismo EL ACUDIENTE se obliga a:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) A pagar estricta y cumplidamente los costos del servicio
              educativo (pensiones) dentro de los cinco (5) primeros días de
              cada mes.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) A proporcionar al educando el ambiente adecuado para su
              desarrollo integral y proveerle los elementos necesarios para el
              desarrollo de sus actividades escolares.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) A velar por el progreso del educando en todos los órdenes.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              d) Tener vigente la vinculación del estudiante a una EPS con las
              especificaciones de donde ser remitido por el COLEGIO en caso de
              sufrir enfermedad o accidente dentro de la jornada de
              estudio.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              e) Asumir los costos de tratamientos especializados de psicología
              u otros terapeutas que requiera el estudiante, ante la
              recomendación que efectúen las directivas del COLEGIO de la
              necesidad de apoyo externo ya sea porque se detecten necesidades
              especiales o capacidades excepcionales.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              f) Asumir el costo de los daños ocasionados a personas miembros de
              la comunidad educativa, muebles, equipos y enseres o la planta
              física del COLEGIO por parte el estudiante.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              h) A cumplir estrictamente las citas y llamadas que hagan las
              directivas del plantel.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              i) A cumplir el Proyecto Educativo Institucional y el reglamento
              interno del colegio.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Quinta. DERECHOS Y OBLIGACIONES DEL COLEGIO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;En cumplimiento de las normas vigentes para el servicio
              educativo y en concordancia con el objeto del presente contrato,
              EL COLEGIO tiene los siguientes derechos:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) A exigir el cumplimiento del reglamento interno por parte del
              educando y del ACUDIENTE y de los deberes académicos que se
              derivan del servicio.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) A exigir al ACUDIENTE el cumplimiento de sus obligaciones como
              responsables del educando.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) A recuperar los costos incurridos en el servicio y a exigir y
              lograr el pago de los derechos correspondientes a matrícula y
              pensión y otros cobros, por todos los medios lícitos a su alcance.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              d) A reservar el derecho de no renovación de matrícula según
              estipulaciones del reglamento interno y por razones de
              comportamiento inadecuado según lo establecido en el Manual de
              Convivencia, incumplimiento en el pago de las pensiones,
              rendimiento académico insatisfactorio o de capacidades que
              requieren un tratamiento especial.
            </span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;&nbsp;</span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Así mismo EL COLEGIO se obliga:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) Ofrecer una educación integral, de acuerdo con los fines de la
              educación colombiana, los lineamientos del Ministerio de Educación
              Nacional, de la Iglesia Cristiana y el ideario del Proyecto
              Educativo Institucional.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) A desarrollar los planes y programas establecidos mediante el
              Proyecto Educativo institucional.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) A cumplir y exigir el cumplimiento del reglamento interno del
              establecimiento.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              d) A prestar en forma regular el servicio educativo contratado
              dentro de las prescripciones legales.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Sexta. COSTOS EDUCATIVOS.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El precio de las obligaciones contenidas en el objeto del
              contrato, o sea el costo de las matrículas, y pensiones anuales
              por cada estudiante es por valor de $2.350.000 para los grados de
              preescolar y $2.300.000 para los grados de primaria. El cual se
              pagará así:&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) Matrícula de cuatrocientos cincuenta mil pesos ($450.000) en
              preescolar al inicio del periodo lectivo y trescientos cincuenta
              mil pesos ($350.000) en primaria al inicio del año lectivo.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) Pensiones (10 cuotas mensuales) de ciento noventa mil pesos
              ($190.000) en preescolar y ciento noventa y cinco mil pesos
              ($195.000) en la primaria, las cuales serán pagadas dentro de los
              cinco (5) primeros días del mes o período al cual correspondan, a
              partir del mes de febrero hasta el mes de noviembre del año &nbsp;
              {lectiveYear}.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) El pago oportuno de las pensiones dentro de los primeros cinco
              día de cada mes otorga descuento del 10% quedando la pensión de
              preescolar en ciento setenta mil pesos ($170.000) y la pensión de
              primaria en ciento setenta y cinco mil pesos ($175.000).
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARÁGRAFO PRIMERO: FORMA DE PAGO:
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;Los pagos de los servicios aquí contratados se harán en
              efectivo en la oficina de pagos ubicada en las instalaciones de la
              institución, o depositados en cuenta de ahorros de Bancolombia a
              nombre de Colegio Para la Estimulación del Desarrollo Integral
              Creciendo. El pago con cheques, o consignaciones bancarias no
              locales, dará derecho a exigir los costos adicionales incurridos
              por concepto de costos financieros de acuerdo con las
              disposiciones legales vigentes, sin perjuicio del procedimiento
              establecido en el Manual de Convivencia del Colegio.
            </span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp; &nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARÁGRAFO SEGUNDO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;La ausencia temporal o total dentro del mes por enfermedad u
              otra causa atribuible al Estudiante Beneficiario, a los padres del
              estudiante y/o acudientes autorizados, así sea por causa fortuita
              o fuerza mayor, no dará derecho al aquí comprometido a descontar
              suma alguna de lo obligado a pagar o que EL COLEGIO le haga
              devoluciones o abonos a meses posteriores.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARÁGRAFO TERCERO. RETARDO EN PAGOS O INCUMPLIMIENTO:
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;Es deber del ACUDIENTE (padre y/o acudiente) cancelar en
              forma oportuna y dentro de los plazos fijados por EL COLEGIO, los
              costos propios causados por el servicio educativo recibido.
              Igualmente, estarán a cargo del padre y/o acudiente, el pago de
              los reprocesos generados por el no pago oportuno de las pensiones
              respectivas; así como la sanción por cada mes de atraso con el
              correspondiente retroactivo y los gastos de cobranza prejurídica y
              jurídica, cuando ellos sean ocasionados por el no pago oportuno de
              los costos académicos respectivos. En caso de incumplimiento en el
              pago de una o más de las sumas estipuladas o por terminación del
              presente contrato, los padres o acudientes se declaran y aceptan
              ser deudores del Colegio Para la Estimulación del Desarrollo
              Integral Creciendo, quien podrá declarar insubsistentes los plazos
              de esta obligación o de las cuotas que constituyan el saldo y
              exigir su pago inmediato, judicial o extrajudicialmente en
              aplicación del procedimiento establecido por la institución
              educativa para el cobro de cartera morosa, quedando obligados los
              padres o acudientes autorizados a asumir el valor correspondiente
              por los costos judiciales a que hubiere lugar, así como al pago de
              los honorarios legales correspondientes.&nbsp;
            </span>
          </p>
        </div>
        <div
          className="pag4"
          style={{
            height: "12.9in",
          }}
        >
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>Séptima.</span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                RESPONSABILIDAD PERSONAL.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;EL ACUDIENTE (Padre de familia y/o acudiente autorizado),
              declara que conoce y acepta que las obligaciones de tipo económico
              que adquiere con el Colegio Para la Estimulación del Desarrollo
              Integral Creciendo, las adquiere a título personal como
              responsable de la educación de su hijo(a) o acudido(a), en el
              libre ejercicio del derecho a elegir para el (ella) el tipo de
              educación de acuerdo a sus creencias y posibilidades; por tanto no
              será argumento para buscar judicialmente la exoneración del pago
              de lo debido, impetrando el mecanismo judicial de la Tutela por
              medio de su hijo(a) beneficiario(a) del servicio contratado,
              invocando el derecho a la educación y la prevalecía de los
              derechos de los menores. Así mismo declaran y aceptan que en caso
              de presentarse situaciones económicas difíciles que les impidan
              costear el servicio que ofrece la institución educativa, acudirán
              a buscar alternativas para el pago de las obligaciones económicas
              adquiridas con la Institución, evitando el detrimento patrimonial
              del Colegio Para la Estimulación del Desarrollo Integral Creciendo
              y la consecuente afectación de la calidad del servicio educativo
              que éste presta, todo ello atendiendo a lo estipulado en la Ley
              1650 de 2012.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Octava. PROYECTO EDUCATIVO Y REGLAMENTO INTERNO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El Proyecto Educativo Institucional y el Reglamento Interno
              del Plantel o Manual de Convivencia se consideran parte integrante
              del presente contrato.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Novena. DIFUSION DE IMÁGENES.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Por medio del presente contrato EL ACUDIENTE presta conformidad y
              otorga autorización para que EL COLEGIO dentro de los medios
              didácticos elaborados con carácter pedagógico, puedan difundir y
              publicar imágenes de sus estudiantes individualmente o en grupo
              durante la realización de actividades escolares lúdicas,
              deportivas, académicas y extracurriculares realizadas al interior
              o fuera de la institución. Esta difusión podrá realizarse en los
              sitios web y las redes sociales institucionales y en toda otra
              publicación o medio que considere adecuado.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Décima. DISCAPACIDADES Y/O CAPACIDADES EXCEPCIONALES.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              A la firma del contrato EL ACUDIENTE, deberá informar al COLEGIO
              acerca de los diagnósticos que posea El ESTUDIANTE ya sean
              discapacidades, o talentos excepcionales. A su vez EL ACUDIENTE
              deberá entregar con los demás documentos requisitos de matrícula
              los informes de diagnósticos emitidos por especialistas
              correspondientes y/o Instituciones médicas reconocidas por ley,
              como también el informe de las recomendaciones terapéuticas para
              la inclusión en el ambiente escolar.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARAGRAFO PRIMERO.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              El COLEGIO es una institución de carácter educativo que brinda
              servicio de educación formal, por lo tanto no es su objeto el
              ámbito clínico y no se hará responsable de realizar terapias
              especializadas expedidas por médicos o profesionales de la salud
              tratantes.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARAGRAFO SEGUNDO.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;&nbsp;</span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              EL COLEGIO podrá solicitar al ACUDIENTE que el estudiante sea
              remitido a un especialista de la salud y/o comportamiento humano
              según las valoraciones que se hagan en el ambiente escolar. Es
              responsabilidad del ACUDIENTE seguir el curso de estas
              indicaciones y reportar los resultados obtenidos.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARAGRAFO TERCERO.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              EL COLEGIO podrá seguir las recomendaciones terapéuticas para la
              inclusión en el ambiente escolar expedidas por médicos o
              profesionales de la salud tratantes, siempre y cuando estas se
              ajusten a los recursos humanos y logísticos disponibles en la
              institución; de lo contrario, será EL ACUDIENTE el responsable de
              asegurar el mejor ambiente para el desarrollo integral de sus
              acudidos asumiendo los costos adicionales a los que hubiere lugar
              o generando un cambio de ambiente para los mismos.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Décima Primera. CAUSALES DE TERMINACIÓN O DE NO RENOVACIÓN DEL
                CONTRATO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El presente contrato terminará por una de las siguientes
              causas:&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) Por expiración del término fijado, o sea el año lectivo.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) Por mutuo consentimiento de las partes.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) Por muerte del educando.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              d) Por suspensión de actividades del colegio por más de sesenta
              días o por cierre definitivo del establecimiento.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              e) Como consecuencia del no suministro por parte del ACUDIENTE de
              apoyo externo como tratamientos o medicinas al beneficiario(a) que
              conduzca a su bajo rendimiento académico o disciplinario,
              impidiéndole lograr los objetivos del programa curricular y/o
              cuando su actuar altere la armonía que debe reinar en el aula de
              clases conduciendo a la vulneración de los derechos de sus
              compañeros o de cualquier otro miembro de la comunidad educativa.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARAGRAFO PRIMERO.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Los padres o acudientes del estudiante no podrán dar por
              finalizado el contrato de manera unilateral por causas fortuitas o
              fuerza mayor. En todo caso para dar por finalizado el contrato
              antes de la fecha de su cumplimiento, deberán solicitar el retiro
              voluntario del estudiante de manera formal según protocolo de la
              institución para lo cual deberán encontrarse a paz y salvo con las
              mensualidades hasta el mes en el que solicitan el retiro
              voluntario. De lo contrario, los padres asumirán el valor total
              del presente contrato.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Décima Segunda. DECLARACIONES:
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;EL ACUDIENTE se declara en capacidad de pago y acepta las
              tarifas y costos establecidos, así mismo declara que siendo el
              Colegio Para la Estimulación del Desarrollo Integral Creciendo de
              CONFESIÓN CRISTIANA EVANGÉLICA EN CREDO Y PRINCIPIOS, desea
              expresa y conscientemente que su hijo(a) o acudido(a) así sea
              formado(a) (ART. 68 C.N.). De igual manera acepta que el modelo
              educativo ofrecido por la institución para el periodo lectivo{" "}
              {lectiveYear} es el modelo de educación presencial.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Décima Tercera. DURACIÓN Y RENOVACIÓN.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              El presente contrato tiene vigencia de un año lectivo contando a
              partir del 1 de febrero de {lectiveYear} hasta el 30 de noviembre
              de {lectiveYear}. Su ejecución será sucesiva por periodos
              mensuales. Para el presente contrato NO operará prórroga
              automática del mismo, es independiente para cada año lectivo y
              programa curricular la celebración de un nuevo contrato y el
              COLEGIO se reserva el derecho a celebrar un nuevo contrato a la
              terminación de cada año escolar, de acuerdo a la evaluación que se
              haga del desempeño académico y disciplinario de cada estudiante y
              del cumplimiento de las responsabilidades contraídas por los
              padres y/o acudientes debidamente autorizados.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Décima Cuarta. MÉRITO EJECUTIVO:&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              El presente contrato por sí solo presta mérito ejecutivo,
              incorporada una Obligación, Clara, Expresa y Exigible, según lo
              determina el Artículo 488 del Código de Procedimiento Civil, y
              será prueba sumaria según lo determina el artículo 175 del Código
              Ibídem.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Para constancia se firma en dos ejemplares del mismo tenor, en
              Santa Marta, a los {currentDate}.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "8.5pt",
            }}
          >
            <span
              style={{
                height: "0pt",
                textAlign: "left",
                display: "block",
                position: "absolute",
                zIndex: -2,
              }}
            >
              <img
                src={firma_diana_arrieta}
                width={182}
                height={55}
                alt="firma"
                style={{ margin: "0 auto 0 0", display: "block" }}
              />
            </span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              ________________________________________________
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Diana Isabel Arrieta Herrera
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              39049284 de Santa Marta
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>Rectora</span>
          </p>

          <div
            className="firmas"
            style={{
              marginTop: 40,
              fontSize: "8.5pt",
              fontFamily: '"Arial Narrow"',
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div className="firma1">
              <span>_________________________________________________</span>
              <img src={finger_box} alt="huellero" />
              <br />
              <span>FIRMA DEUDOR ACUDIENTE</span>
              <br />
              <br />
              <span style={{ fontSize: "11pt" }}>
                {selectetStudent.guardianName}
              </span>
              <br />
              <span>_________________________________________________</span>
              <br />
              <span>Nombres y apellidos</span>
              <br />
              <span>CC No. {selectetStudent?.guardiantId}</span>
              <br />
              <span>Parentesco: {selectetStudent?.guardiantRelationship}</span>
            </div>
            <div className="firma2">
              <span>_________________________________________________</span>
              <img src={finger_box} alt="huellero" />
              <br />
              <span>FIRMA CODEUDOR</span>
              <br />
              <br />
              <span style={{ fontSize: "11pt" }}>
                {selectetStudent.guardianName}
              </span>
              <br />
              <span>_________________________________________________</span>
              <br />
              <span>Nombres y apellidos</span>
              <br />
              <span>CC No. {selectetStudent?.guardiantId}</span>
              <br />
              <span>Parentesco: {selectetStudent?.guardiantRelationship}</span>
            </div>
          </div>
        </div>
        <div
          className="pag5"
          style={{
            height: "13in",
          }}
        >
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "14pt",
            }}
          >
            <img
              src={logo}
              width={62}
              height={61}
              alt="logo colegio creciendo"
              style={{ float: "right" }}
            />
            <span
              style={{
                fontFamily: '"Franklin Gothic Demi Cond"',
                fontSize: "10pt",
              }}
            >
              COLEGIO PARA LA ESTIMULACIÓN PARA EL DESARROLLO INTEGRAL&nbsp;
            </span>
            <strong>
              <span style={{ fontFamily: '"Curlz MT"' }}>CRECIENDO</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "9pt",
            }}
          >
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              Aprobado por Resolución 1438 del 10 de Dic/2008
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              &nbsp; &nbsp;
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              DANE 347001053213
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              &nbsp; &nbsp;
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              NIT 901024336-1
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "11pt",
            }}
          >
            <span style={{ fontFamily: "Mistral" }}>
              Villa Marbella Mz C Casa 48 Teléfono: 4371718
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              borderBottom: "0.75pt solid #000000",
              fontSize: "4pt",
            }}
          >
            <span style={{ fontFamily: '"Mistral AV"' }}>&nbsp;</span>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "8pt" }}>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
            <strong>
              <span style={{ fontFamily: "Arial" }}>­</span>
            </strong>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "4pt" }}>
            <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                CONTRATO DE SERVICIOS EDUCATIVOS AÑO ESCOLAR {lectiveYear}
              </span>
            </strong>
            <br />
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Entre los suscritos a saber: DIANA ISABEL ARRIETA HERRERA con C.C
              39.049.284 de Santa Marta, en nombre y representación del Colegio
              Para La Estimulación del Desarrollo Integral Creciendo, quien en
              adelante se llamará&nbsp;
            </span>
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>EL COLEGIO</span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;y {selectetStudent.guardianName} con C.C.{" "}
              {selectetStudent.guardiantId} de{" "}
              {selectetStudent.guardiantExpeditionPlace} en su nombre y en su
              condición de padre y/o acudiente del educando y quienes en lo
              sucesivo se denominará&nbsp;
            </span>
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
            </strong>
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>EL ACUDIENTE</span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              , hemos celebrado un contrato que se regirá por las siguientes
              cláusulas:&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Primera. DEFINICIÓN DEL CONTRATO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El presente contrato formaliza la vinculación del educando
              MARIA ISABEL ESCOBAR ZAPATA al servicio educativo que ofrece EL
              COLEGIO y compromete a las partes y al educando en las
              obligaciones legales y pedagógicas tendientes a hacer efectiva la
              prestación del servicio público educativo, obligaciones que son
              colectivas y esenciales para la consecución del objeto y de los
              fines comunes ya que el derecho a la educación se considera un
              derecho deber.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Segunda. OBJETO DEL CONTRATO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El objeto del presente contrato es procurar la formación
              integral del educando mediante la recíproca complementación de
              esfuerzos del mismo, de los acudientes y del colegio, con la
              búsqueda del pleno desarrollo de la personalidad del educando y dé
              un rendimiento académico satisfactorio en el ejercicio del
              programa curricular correspondiente al grado PRIMERO
            </span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;&nbsp;</span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              mediante el Proyecto Educativo Institucional del colegio.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Tercera. OBLIGACIONES ESENCIALES.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Son obligaciones esenciales del presente contrato para cumplir con
              el fin común de la educación del educando, las siguientes:&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) Por parte mismo, cumplir las pautas definidas y establecidas en
              el Proyecto Educativo Institucional y en el Reglamento Interno o
              Manual de Convivencia.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) Por parte del ACUDIENTE, pagar oportunamente el costo del
              servicio educativo, e integrarse cumplida y solidariamente al
              colegio para la formación del educando.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) Por parte de EL COLEGIO, impartir la enseñanza contratada y
              propiciar la mejor calidad y la continuidad del servicio.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Cuarta. DERECHOS Y OBLIGACIONES DEL ACUDIENTE.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El cumplimiento de las normas vigentes para el servicio
              educativo y en concordancia con el objeto del presente contrato,
              EL ACUDIENTE tiene los siguientes derechos:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) A exigir la regular prestación del servicio educativo.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) A exigir que el servicio educativo se ajuste a los programas
              oficiales.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) A exigir el cumplimiento del Proyecto Educativo Institucional.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              d) A participar en el proceso Educativo.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              e) A buscar y recibir orientación sobre la educación de su hijo o
              acudido.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Así mismo EL ACUDIENTE se obliga a:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) A pagar estricta y cumplidamente los costos del servicio
              educativo (pensiones) dentro de los cinco (5) primeros días de
              cada mes.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) A proporcionar al educando el ambiente adecuado para su
              desarrollo integral y proveerle los elementos necesarios para el
              desarrollo de sus actividades escolares.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) A velar por el progreso del educando en todos los órdenes.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              d) Tener vigente la vinculación del estudiante a una EPS con las
              especificaciones de donde ser remitido por el COLEGIO en caso de
              sufrir enfermedad o accidente dentro de la jornada de
              estudio.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              e) Asumir los costos de tratamientos especializados de psicología
              u otros terapeutas que requiera el estudiante, ante la
              recomendación que efectúen las directivas del COLEGIO de la
              necesidad de apoyo externo ya sea porque se detecten necesidades
              especiales o capacidades excepcionales.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              f) Asumir el costo de los daños ocasionados a personas miembros de
              la comunidad educativa, muebles, equipos y enseres o la planta
              física del COLEGIO por parte el estudiante.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              h) A cumplir estrictamente las citas y llamadas que hagan las
              directivas del plantel.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              i) A cumplir el Proyecto Educativo Institucional y el reglamento
              interno del colegio.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Quinta. DERECHOS Y OBLIGACIONES DEL COLEGIO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;En cumplimiento de las normas vigentes para el servicio
              educativo y en concordancia con el objeto del presente contrato,
              EL COLEGIO tiene los siguientes derechos:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) A exigir el cumplimiento del reglamento interno por parte del
              educando y del ACUDIENTE y de los deberes académicos que se
              derivan del servicio.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) A exigir al ACUDIENTE el cumplimiento de sus obligaciones como
              responsables del educando.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) A recuperar los costos incurridos en el servicio y a exigir y
              lograr el pago de los derechos correspondientes a matrícula y
              pensión y otros cobros, por todos los medios lícitos a su alcance.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              d) A reservar el derecho de no renovación de matrícula según
              estipulaciones del reglamento interno y por razones de
              comportamiento inadecuado según lo establecido en el Manual de
              Convivencia, incumplimiento en el pago de las pensiones,
              rendimiento académico insatisfactorio o de capacidades que
              requieren un tratamiento especial.
            </span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;&nbsp;</span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Así mismo EL COLEGIO se obliga:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) Ofrecer una educación integral, de acuerdo con los fines de la
              educación colombiana, los lineamientos del Ministerio de Educación
              Nacional, de la Iglesia Cristiana y el ideario del Proyecto
              Educativo Institucional.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) A desarrollar los planes y programas establecidos mediante el
              Proyecto Educativo institucional.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) A cumplir y exigir el cumplimiento del reglamento interno del
              establecimiento.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              d) A prestar en forma regular el servicio educativo contratado
              dentro de las prescripciones legales.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Sexta. COSTOS EDUCATIVOS.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El precio de las obligaciones contenidas en el objeto del
              contrato, o sea el costo de las matrículas, y pensiones anuales
              por cada estudiante es por valor de $2.350.000 para los grados de
              preescolar y $2.300.000 para los grados de primaria. El cual se
              pagará así:&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) Matrícula de cuatrocientos cincuenta mil pesos ($450.000) en
              preescolar al inicio del periodo lectivo y trescientos cincuenta
              mil pesos ($350.000) en primaria al inicio del año lectivo.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) Pensiones (10 cuotas mensuales) de ciento noventa mil pesos
              ($190.000) en preescolar y ciento noventa y cinco mil pesos
              ($195.000) en la primaria, las cuales serán pagadas dentro de los
              cinco (5) primeros días del mes o período al cual correspondan, a
              partir del mes de febrero hasta el mes de noviembre del año &nbsp;
              {lectiveYear}.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) El pago oportuno de las pensiones dentro de los primeros cinco
              día de cada mes otorga descuento del 10% quedando la pensión de
              preescolar en ciento setenta mil pesos ($170.000) y la pensión de
              primaria en ciento setenta y cinco mil pesos ($175.000).
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARÁGRAFO PRIMERO: FORMA DE PAGO:
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;Los pagos de los servicios aquí contratados se harán en
              efectivo en la oficina de pagos ubicada en las instalaciones de la
              institución, o depositados en cuenta de ahorros de Bancolombia a
              nombre de Colegio Para la Estimulación del Desarrollo Integral
              Creciendo. El pago con cheques, o consignaciones bancarias no
              locales, dará derecho a exigir los costos adicionales incurridos
              por concepto de costos financieros de acuerdo con las
              disposiciones legales vigentes, sin perjuicio del procedimiento
              establecido en el Manual de Convivencia del Colegio.
            </span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp; &nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARÁGRAFO SEGUNDO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;La ausencia temporal o total dentro del mes por enfermedad u
              otra causa atribuible al Estudiante Beneficiario, a los padres del
              estudiante y/o acudientes autorizados, así sea por causa fortuita
              o fuerza mayor, no dará derecho al aquí comprometido a descontar
              suma alguna de lo obligado a pagar o que EL COLEGIO le haga
              devoluciones o abonos a meses posteriores.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARÁGRAFO TERCERO. RETARDO EN PAGOS O INCUMPLIMIENTO:
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;Es deber del ACUDIENTE (padre y/o acudiente) cancelar en
              forma oportuna y dentro de los plazos fijados por EL COLEGIO, los
              costos propios causados por el servicio educativo recibido.
              Igualmente, estarán a cargo del padre y/o acudiente, el pago de
              los reprocesos generados por el no pago oportuno de las pensiones
              respectivas; así como la sanción por cada mes de atraso con el
              correspondiente retroactivo y los gastos de cobranza prejurídica y
              jurídica, cuando ellos sean ocasionados por el no pago oportuno de
              los costos académicos respectivos. En caso de incumplimiento en el
              pago de una o más de las sumas estipuladas o por terminación del
              presente contrato, los padres o acudientes se declaran y aceptan
              ser deudores del Colegio Para la Estimulación del Desarrollo
              Integral Creciendo, quien podrá declarar insubsistentes los plazos
              de esta obligación o de las cuotas que constituyan el saldo y
              exigir su pago inmediato, judicial o extrajudicialmente en
              aplicación del procedimiento establecido por la institución
              educativa para el cobro de cartera morosa, quedando obligados los
              padres o acudientes autorizados a asumir el valor correspondiente
              por los costos judiciales a que hubiere lugar, así como al pago de
              los honorarios legales correspondientes.&nbsp;
            </span>
          </p>
        </div>
        <div
          className="pag6"
          style={{
            height: "12.6in",
          }}
        >
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>Séptima.</span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                RESPONSABILIDAD PERSONAL.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;EL ACUDIENTE (Padre de familia y/o acudiente autorizado),
              declara que conoce y acepta que las obligaciones de tipo económico
              que adquiere con el Colegio Para la Estimulación del Desarrollo
              Integral Creciendo, las adquiere a título personal como
              responsable de la educación de su hijo(a) o acudido(a), en el
              libre ejercicio del derecho a elegir para el (ella) el tipo de
              educación de acuerdo a sus creencias y posibilidades; por tanto no
              será argumento para buscar judicialmente la exoneración del pago
              de lo debido, impetrando el mecanismo judicial de la Tutela por
              medio de su hijo(a) beneficiario(a) del servicio contratado,
              invocando el derecho a la educación y la prevalecía de los
              derechos de los menores. Así mismo declaran y aceptan que en caso
              de presentarse situaciones económicas difíciles que les impidan
              costear el servicio que ofrece la institución educativa, acudirán
              a buscar alternativas para el pago de las obligaciones económicas
              adquiridas con la Institución, evitando el detrimento patrimonial
              del Colegio Para la Estimulación del Desarrollo Integral Creciendo
              y la consecuente afectación de la calidad del servicio educativo
              que éste presta, todo ello atendiendo a lo estipulado en la Ley
              1650 de 2012.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Octava. PROYECTO EDUCATIVO Y REGLAMENTO INTERNO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El Proyecto Educativo Institucional y el Reglamento Interno
              del Plantel o Manual de Convivencia se consideran parte integrante
              del presente contrato.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Novena. DIFUSION DE IMÁGENES.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Por medio del presente contrato EL ACUDIENTE presta conformidad y
              otorga autorización para que EL COLEGIO dentro de los medios
              didácticos elaborados con carácter pedagógico, puedan difundir y
              publicar imágenes de sus estudiantes individualmente o en grupo
              durante la realización de actividades escolares lúdicas,
              deportivas, académicas y extracurriculares realizadas al interior
              o fuera de la institución. Esta difusión podrá realizarse en los
              sitios web y las redes sociales institucionales y en toda otra
              publicación o medio que considere adecuado.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Décima. DISCAPACIDADES Y/O CAPACIDADES EXCEPCIONALES.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              A la firma del contrato EL ACUDIENTE, deberá informar al COLEGIO
              acerca de los diagnósticos que posea El ESTUDIANTE ya sean
              discapacidades, o talentos excepcionales. A su vez EL ACUDIENTE
              deberá entregar con los demás documentos requisitos de matrícula
              los informes de diagnósticos emitidos por especialistas
              correspondientes y/o Instituciones médicas reconocidas por ley,
              como también el informe de las recomendaciones terapéuticas para
              la inclusión en el ambiente escolar.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARAGRAFO PRIMERO.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              El COLEGIO es una institución de carácter educativo que brinda
              servicio de educación formal, por lo tanto no es su objeto el
              ámbito clínico y no se hará responsable de realizar terapias
              especializadas expedidas por médicos o profesionales de la salud
              tratantes.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARAGRAFO SEGUNDO.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;&nbsp;</span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              EL COLEGIO podrá solicitar al ACUDIENTE que el estudiante sea
              remitido a un especialista de la salud y/o comportamiento humano
              según las valoraciones que se hagan en el ambiente escolar. Es
              responsabilidad del ACUDIENTE seguir el curso de estas
              indicaciones y reportar los resultados obtenidos.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARAGRAFO TERCERO.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              EL COLEGIO podrá seguir las recomendaciones terapéuticas para la
              inclusión en el ambiente escolar expedidas por médicos o
              profesionales de la salud tratantes, siempre y cuando estas se
              ajusten a los recursos humanos y logísticos disponibles en la
              institución; de lo contrario, será EL ACUDIENTE el responsable de
              asegurar el mejor ambiente para el desarrollo integral de sus
              acudidos asumiendo los costos adicionales a los que hubiere lugar
              o generando un cambio de ambiente para los mismos.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Décima Primera. CAUSALES DE TERMINACIÓN O DE NO RENOVACIÓN DEL
                CONTRATO.
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;El presente contrato terminará por una de las siguientes
              causas:&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              a) Por expiración del término fijado, o sea el año lectivo.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              b) Por mutuo consentimiento de las partes.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              c) Por muerte del educando.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              d) Por suspensión de actividades del colegio por más de sesenta
              días o por cierre definitivo del establecimiento.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              e) Como consecuencia del no suministro por parte del ACUDIENTE de
              apoyo externo como tratamientos o medicinas al beneficiario(a) que
              conduzca a su bajo rendimiento académico o disciplinario,
              impidiéndole lograr los objetivos del programa curricular y/o
              cuando su actuar altere la armonía que debe reinar en el aula de
              clases conduciendo a la vulneración de los derechos de sus
              compañeros o de cualquier otro miembro de la comunidad educativa.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                PARAGRAFO PRIMERO.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Los padres o acudientes del estudiante no podrán dar por
              finalizado el contrato de manera unilateral por causas fortuitas o
              fuerza mayor. En todo caso para dar por finalizado el contrato
              antes de la fecha de su cumplimiento, deberán solicitar el retiro
              voluntario del estudiante de manera formal según protocolo de la
              institución para lo cual deberán encontrarse a paz y salvo con las
              mensualidades hasta el mes en el que solicitan el retiro
              voluntario. De lo contrario, los padres asumirán el valor total
              del presente contrato.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Décima Segunda. DECLARACIONES:
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              &nbsp;EL ACUDIENTE se declara en capacidad de pago y acepta las
              tarifas y costos establecidos, así mismo declara que siendo el
              Colegio Para la Estimulación del Desarrollo Integral Creciendo de
              CONFESIÓN CRISTIANA EVANGÉLICA EN CREDO Y PRINCIPIOS, desea
              expresa y conscientemente que su hijo(a) o acudido(a) así sea
              formado(a) (ART. 68 C.N.). De igual manera acepta que el modelo
              educativo ofrecido por la institución para el periodo lectivo{" "}
              {lectiveYear} es el modelo de educación presencial.&nbsp;
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Décima Tercera. DURACIÓN Y RENOVACIÓN.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              El presente contrato tiene vigencia de un año lectivo contando a
              partir del 1 de febrero de {lectiveYear} hasta el 30 de noviembre
              de {lectiveYear}. Su ejecución será sucesiva por periodos
              mensuales. Para el presente contrato NO operará prórroga
              automática del mismo, es independiente para cada año lectivo y
              programa curricular la celebración de un nuevo contrato y el
              COLEGIO se reserva el derecho a celebrar un nuevo contrato a la
              terminación de cada año escolar, de acuerdo a la evaluación que se
              haga del desempeño académico y disciplinario de cada estudiante y
              del cumplimiento de las responsabilidades contraídas por los
              padres y/o acudientes debidamente autorizados.
            </span>
          </p>
          <p
            style={{
              marginTop: "3pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Arial Narrow"' }}>
                Décima Cuarta. MÉRITO EJECUTIVO:&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              El presente contrato por sí solo presta mérito ejecutivo,
              incorporada una Obligación, Clara, Expresa y Exigible, según lo
              determina el Artículo 488 del Código de Procedimiento Civil, y
              será prueba sumaria según lo determina el artículo 175 del Código
              Ibídem.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Para constancia se firma en dos ejemplares del mismo tenor, en
              Santa Marta, a los {currentDate}.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "8.5pt",
            }}
          >
            <span
              style={{
                height: "0pt",
                textAlign: "left",
                display: "block",
                position: "absolute",
                zIndex: -2,
              }}
            >
              <img
                src={firma_diana_arrieta}
                width={182}
                height={55}
                alt="firma"
                style={{ margin: "0 auto 0 0", display: "block" }}
              />
            </span>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              ________________________________________________
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Diana Isabel Arrieta Herrera
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              39049284 de Santa Marta
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "8.5pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>Rectora</span>
          </p>

          <div
            className="firmas"
            style={{
              marginTop: 40,
              fontSize: "8.5pt",
              fontFamily: '"Arial Narrow"',
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div className="firma1">
              <span>_________________________________________________</span>
              <img src={finger_box} alt="huellero" />
              <br />
              <span>FIRMA DEUDOR ACUDIENTE</span>
              <br />
              <br />
              <span style={{ fontSize: "11pt" }}>
                {selectetStudent.guardianName}
              </span>
              <br />
              <span>_________________________________________________</span>
              <br />
              <span>Nombres y apellidos</span>
              <br />
              <span>CC No. {selectetStudent?.guardiantId}</span>
              <br />
              <span>Parentesco: {selectetStudent?.guardiantRelationship}</span>
            </div>
            <div className="firma2">
              <span>_________________________________________________</span>
              <img src={finger_box} alt="huellero" />
              <br />
              <span>FIRMA CODEUDOR</span>
              <br />
              <br />
              <span style={{ fontSize: "11pt" }}>
                {selectetStudent.guardianName}
              </span>
              <br />
              <span>_________________________________________________</span>
              <br />
              <span>Nombres y apellidos</span>
              <br />
              <span>CC No. {selectetStudent?.guardiantId}</span>
              <br />
              <span>Parentesco: {selectetStudent?.guardiantRelationship}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contrato;
