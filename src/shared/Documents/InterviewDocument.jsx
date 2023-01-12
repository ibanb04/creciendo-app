import { useRef } from "react";
import { useAppSelector } from "../../store/useAppDispatch";
import { useReactToPrint } from "react-to-print";
import { CustomFab } from "../../helpers/CustomFab";
import logo from "../../assets/img/EscudoCreciendo.png";
import { useLectiveYear } from "../../hooks/useLectiveYear";

const InterviewDocument = () => {
  const { selectedInterview } = useAppSelector((state) => state.interview);
  const lectiveYear = useLectiveYear();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <CustomFab handlePrint={handlePrint} />
      <div
        ref={componentRef}
        style={{
          margin: "5% 5% 0 5%",
        }}
      >
        <div
          className="pag11"
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
            <span
              style={{
                height: "0pt",
                textAlign: "left",
                display: "block",
                position: "absolute",
                zIndex: 0,
              }}
            >
              <img
                src={logo}
                width={64}
                height={63}
                alt=""
                style={{ margin: "0 0 0 auto", display: "block" }}
              />
            </span>
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
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              DANE 347001053213
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              &nbsp;&nbsp;&nbsp;
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
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "11pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                HISTORIA GENERAL (ENTREVISTA A PADRES Y/O ACUDIENTES) PARA
                INGRESO - {lectiveYear}
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "10pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Este formato es diligenciado con la información suministrada por
              el padre/madre o acudiente dentro del proceso de valoración para
              el ingreso a la institución. Toda la información aquí contenida
              tiene como única fuente los datos dados por la persona que
              responde a la entrevista, que en todo caso corresponderá al padre
              o madre biológica, legal o acudiente responsable del menor.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "10pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
              marginBottom: 5,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "21.94%",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Entrevistado (acudiente):
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "44.52%",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.guardianName}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "13.9%",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Parentesco:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "19.64%",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.guardiantRelationship}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "21.94%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Entrevistador:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "44.52%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.interviewerName}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "13.9%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>Fecha:</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "19.64%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.interviewDate?.slice(0, 10)}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <strong>
            <span style={{ fontFamily: "Arial" }}>
              DATOS GENERALES DEL ESTUDIANTE
            </span>
          </strong>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
              marginBottom: 5,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "21.7%",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Primer Nombre:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.firstName}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "15.76%",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Segundo Nombre:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.secondName}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "21.7%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Primer Apellido:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.firstLastName}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "15.76%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Segundo Apellido:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.secondLastName}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "21.7%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Fecha Nacimiento:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "24.24%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.birthDate?.slice(0, 10)}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7.88%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>Edad:</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "15.76%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.age}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "14.44%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Grado a cursar:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "15.98%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.gradeToApply}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
            <strong>
              <span style={{ fontFamily: "Arial" }}>HISTORIA PRE-NATAL</span>
            </strong>
          </p>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
              marginBottom: 5,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "20.54%",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Resumen embarazo:&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.pregnancySummary}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "20.54%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Nacimiento:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "33.38%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.typeOfBirth}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "18.08%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Uso de incubadora:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "27.98%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.useOfIncubator === true ? "Si" : "No"}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "20.54%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Motivo uso incubadora:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.reasonForUseOfIncubator}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "20.54%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Enfermedades Congénitas:&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.congenitalDiseases}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "115%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                PRIMERA INFANCIA&nbsp;
              </span>
            </strong>
            <strong>
              <span
                style={{
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  fontSize: "10pt",
                }}
              >
                (Responder en término de meses aproximado)
              </span>
            </strong>
          </p>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: 5,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "16.38%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Control Cefálico:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "16.7%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.headControl}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Control dorsal:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "18.08%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.dorsalControl}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "15.32%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>Gateo:</span>
                  </p>
                </td>
                <td
                  style={{
                    width: "16.86%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.crawl}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "16.38%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Caminó:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "16.7%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.walk}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Balbuceo:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "18.08%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.babbling}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "15.32%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Primeras Palabras:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "16.86%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.firstWords}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "16.38%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Palabra-Frase:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "16.7%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.firstSentences}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Control esfínteres:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "18.08%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.sphincterControl}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "15.32%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Tipo de sueño:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "16.86%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.kindOfDream}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "16.38%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Horas de sueño:
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Día: {selectedInterview?.dayDreamDuration}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Noche: {selectedInterview?.nightDreamDuration}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "15.32%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Enuresis:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "16.86%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.enuresis === true ? "Si" : "No"}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "115%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                ASPECTOS RELEVANTES DEL DESARROLLO OBSERVADO POR LOS PADRES
              </span>
            </strong>
          </p>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
              marginBottom: 5,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "28.88%",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Desarrollo físico-motor:&nbsp;
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "71.12%",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "justify",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.psychoMotorDevelopment}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "28.88%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Adquisición del lenguaje:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "71.12%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "justify",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.languageAcquisition}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "28.88%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Sigue instrucciones o indicaciones:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "71.12%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "justify",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.followsInstructions}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "28.88%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Aspecto comportamental con personas (con padres y otros
                      adultos):
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "71.12%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "justify",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.behaviorWithAdults}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "28.88%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Aspecto comportamental con otros niños:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "71.12%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "justify",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.behaviorWithOtherChildren}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "28.88%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Aspecto comportamental en ambientes (casa- fuera de casa):
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "71.12%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "justify",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.behaviorAwayFromHome}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "28.88%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Reacción frente a la frustración o castigo:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "71.12%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "justify",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.reactionToPunishment}
                    </span>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "115%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>HISTORIA MEDICA</span>
            </strong>
          </p>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
              marginBottom: 5,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "129.3pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Enfermedades Sufridas:&nbsp;
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={3}
                  style={{
                    width: "358.55pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.illnessesSuffered}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "129.3pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Alergias:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "10.45pt",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.allergies}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "74.25pt",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Tipo alergia:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "252.25pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.allergiesDescription}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "129.3pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Accidentes:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "10.45pt",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.accidents}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "74.25pt",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Tipo Accidente:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "252.25pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.accidentsDescription}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "129.3pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Cirugías:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "10.45pt",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.surgery}
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "74.25pt",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Tipo de Cirugía:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "252.25pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.surgeryDescription}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "129.3pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Diagnóstico enfermedad o discapacidad:&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    width: "358.55pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.diseaseDiagnosis}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "129.3pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Especialidades tratantes:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    width: "358.55pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.treatmentSpecialties}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "129.3pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Tratamientos, medicación
                    </span>
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      &nbsp;&nbsp;
                    </span>
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      o terapias:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    width: "358.55pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.treatmentDescription}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "129.3pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Antecedentes de discapacidades familiares:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={3}
                  style={{
                    width: "358.55pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.familyHistoryOfDisabilities}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <div
          className="pag2"
          style={{
            height: "12in",
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
            <span
              style={{
                height: "0pt",
                textAlign: "left",
                display: "block",
                position: "absolute",
                zIndex: 1,
              }}
            >
              <img
                src={logo}
                width={64}
                height={63}
                alt=""
                style={{ margin: "0 0 0 auto", display: "block" }}
              />
            </span>
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
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              DANE 347001053213
            </span>
            <span style={{ fontFamily: '"Franklin Gothic Demi Cond"' }}>
              &nbsp;&nbsp;&nbsp;
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
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "center",
              fontSize: "11pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                HISTORIA GENERAL (ENTREVISTA A PADRES Y/O ACUDIENTES) PARA
                INGRESO - {lectiveYear}
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "10pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Este formato es diligenciado con la información suministrada por
              el padre/madre o acudiente dentro del proceso de valoración para
              el ingreso a la institución. Toda la información aquí contenida
              tiene como única fuente los datos dados por la persona que
              responde a la entrevista, que en todo caso corresponderá al padre
              o madre biológica, legal o acudiente responsable del menor.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              fontSize: "10pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "115%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>PSICO-AFECTIVIDAD</span>
            </strong>
          </p>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: 5,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "19.5%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Personas con quien convive:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.peopleStudentLivesWith}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "12.16%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Tutor legal:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.legalGuardian}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      En caso de no convivir con alguno de los dos padres, ¿Qué
                      relación mantiene con el niño(a)?
                    </span>
                  </p>
                </td>
                <td
                  colSpan={5}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.peopleStudentDontLivesWith}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "19.5%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Cuidador:&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.cuidador}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      No total de hermanos:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "19.64%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.numberOfSiblings}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "19.5%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Hermanos de padre:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "11.92%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.fathersBrothers}
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Hermanos de madre:&nbsp;
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "10.58%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.mothersBrothers}
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      De ambos:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "19.64%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.bothParents}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "19.5%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      ¿Convive o tiene relación con sus hermanos?&nbsp;
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.studentLivesWithBrothers}
                    </span>
                  </h2>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Posición que ocupa entre hermanos:
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "19.64%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.siblingsPosition}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "19.5%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Otros niños en casa:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={7}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.otherKidsInFamily}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "115%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                RELACIONES AFECTIVAS Y FAMILIARES
              </span>
            </strong>
          </p>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              border: "0.75pt solid #000000",
              borderCollapse: "collapse",
              marginBottom: 5,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "26.1%",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Con la madre
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "73.9%",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.emotionalRelationshipWithMother}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "26.1%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Con el padre
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "73.9%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.emotionalRelationshipWithFather}
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "26.1%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Con el cuidador permanente
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "73.9%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {
                        selectedInterview?.emotionalRelationshipWithPermanentGuardian
                      }
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "26.1%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Otras personas con las que convive
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "73.9%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {
                        selectedInterview?.emotionalRelationshipAnotherFamilyMember
                      }
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "26.1%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Con otros niños (no familiares)
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "73.9%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {
                        selectedInterview?.emotionalRelationshipWithotherChildren
                      }
                    </span>
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "26.1%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      Con terceros
                    </span>
                  </h2>
                </td>
                <td
                  style={{
                    width: "73.9%",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.75pt",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <h2
                    style={{
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      pageBreakInside: "avoid",
                      pageBreakAfter: "avoid",
                      fontSize: "11pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Arial Narrow"',
                        fontWeight: "normal",
                      }}
                    >
                      {selectedInterview?.emotionalRelationshipWithThirdParties}
                    </span>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "115%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                HISTORIAL PSICO-PEDAGOGICO
              </span>
            </strong>
          </p>
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: 5,
            }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Grado escolar
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Año&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Institución Educativa
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "center",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Motivo de Retiro
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.lastSchoolGrade1}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.lastSchoolYear1}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.educationalInstitutionApplied1}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.withdrawalReason1}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.lastSchoolGrade2}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.lastSchoolYear2}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.educationalInstitutionApplied2}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.withdrawalReason2}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Proceso de adaptación escolar:&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.schoolAdaptationProcess}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Relaciones con los docentes:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      textAlign: "justify",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.relationshipWithTeachers}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Mayores dificultades presentadas en su proceso escolar:
                    </span>
                  </p>
                </td>
                <td
                  colSpan={5}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.scholarDifficulties}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Mayores logros educativos: (reconocimientos, méritos)
                    </span>
                  </p>
                </td>
                <td
                  colSpan={5}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.scholarAchievements}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={7}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      ¿Participó o participa en actividades que requieren
                      integración grupal? (deportivos, religiosos
                    </span>
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      &nbsp;&nbsp;
                    </span>
                    <span style={{ fontFamily: '"Arial Narrow"' }}>o</span>
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      &nbsp;&nbsp;
                    </span>
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      sociales)
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "28.96%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.teamworkActivities === true
                        ? "Si"
                        : "No"}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "9.58%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      ¿Cuáles?&nbsp;
                    </span>
                  </p>
                </td>
                <td
                  colSpan={4}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.listTeamworkActivities}
                    </span>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      Desempeño:
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "28.96%",
                    borderStyle: "solid",
                    borderWidth: "0.75pt",
                    paddingRight: "5.03pt",
                    paddingLeft: "5.03pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0pt",
                      marginBottom: "0pt",
                      lineHeight: "115%",
                      fontSize: "11pt",
                    }}
                  >
                    <span style={{ fontFamily: '"Arial Narrow"' }}>
                      {selectedInterview?.performance}
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "0pt" }}>
                <td style={{ width: "49.5pt" }}>
                  <br />
                </td>
                <td style={{ width: "53pt" }}>
                  <br />
                </td>
                <td style={{ width: "112pt" }}>
                  <br />
                </td>
                <td style={{ width: "12.6pt" }}>
                  <br />
                </td>
                <td style={{ width: "62.75pt" }}>
                  <br />
                </td>
                <td style={{ width: "82.7pt" }}>
                  <br />
                </td>
                <td style={{ width: "21.5pt" }}>
                  <br />
                </td>
                <td style={{ width: "145.45pt" }}>
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: 3,
              textAlign: "justify",
              lineHeight: "115%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                OBSERVACIONES ADICIONALES
              </span>
            </strong>
            <span style={{ fontFamily: "Arial" }}>:</span>
          </p>
          <table
            style={{
              borderCollapse: "collapse",
              border: "none",
              minHeight: 80,
              marginBottom: 5,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: "539.5pt",
                    border: "1pt solid ",
                    padding: "0cm 5.4pt",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      margin: "0cm",
                      fontSize: "16px",
                      fontFamily: '"Times New Roman",serif',
                      textAlign: "justify",
                      lineHeight: "100%",
                      paddingTop: 10,
                    }}
                  >
                    <span style={{ fontFamily: '"Arial",sans-serif' }}>
                      {selectedInterview?.additionalComments}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "115%",
              fontSize: "11pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Nombre Entrevistador: {selectedInterview?.interviewerName}
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "6pt",
              textAlign: "justify",
              lineHeight: "115%",
              fontSize: "11pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Nombre Acudiente (quien suministra la información):{" "}
              {selectedInterview?.guardianName}
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "6pt",
              textAlign: "justify",
              lineHeight: "115%",
              fontSize: "11pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Firma Acudiente: _____________________________________
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "6pt",
              textAlign: "justify",
              lineHeight: "115%",
              fontSize: "11pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              CC. {selectedInterview?.guardiantId}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default InterviewDocument;
