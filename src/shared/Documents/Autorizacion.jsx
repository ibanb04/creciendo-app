import { useRef } from "react";
import { useAppSelector } from "../../store/useAppDispatch";
import { useReactToPrint } from "react-to-print";
import { CustomNavBar } from "../../helpers/CustomNavBar";
import moment from "moment";
import logo from "../../assets/img/EscudoCreciendo.png";
import { useLectiveYear } from "../../hooks/useLectiveYear";

const Autorizacion = () => {
  const { selectetStudent } = useAppSelector((state) => state.student);
  const lectiveYear = useLectiveYear();
  const date = moment();
  const currentDate = date.format("DD/MM/YYYY");
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <CustomNavBar
        title="Documento De Autorizaciones y Consentimientos"
        handlePrint={handlePrint}
      />

      <div
        id="autorizacion"
        ref={componentRef}
        style={{
          margin: "5%",
        }}
      >
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "0pt",
            textAlign: "center",
            lineHeight: "115%",
            fontSize: "18pt",
          }}
        >
          <span
            style={{
              lineHeight: "115%",
              fontFamily: '"Franklin Gothic Demi Cond"',
              fontSize: "12pt",
            }}
          >
            COLEGIO PARA LA ESTIMULACIÓN PARA EL DESARROLLO&nbsp;INTEGRAL&nbsp;
          </span>
          <strong>
            <span style={{ fontFamily: '"Curlz MT"' }}>
              CRECIENDO
              <img
                src={logo}
                width={60}
                height={59}
                alt=""
                style={{ float: "right" }}
              />
            </span>
          </strong>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "0pt",
            textAlign: "center",
            lineHeight: "115%",
            fontSize: "10pt",
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
            lineHeight: "normal",
            fontSize: "12pt",
          }}
        >
          <span style={{ fontFamily: "Mistral" }}>
            Villa Marbella Mz C Casa 48 Teléfono: 4371718
          </span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "center",
            lineHeight: "115%",
            borderBottom: "0.75pt solid #000000",
            fontSize: "4pt",
          }}
        >
          <span style={{ fontFamily: '"Mistral AV"' }}>&nbsp;</span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "0pt",
            textAlign: "center",
            lineHeight: "normal",
            fontSize: "14pt",
          }}
        >
          <strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
          </strong>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "center",
          }}
        >
          <strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              AUTORIZACIONES Y CONSENTIMIENTOS AL COLEGIO PARA LA ESTIMULACION
              DEL DESARROLLO INTEGRAL CRECIENDO&nbsp;
            </span>
          </strong>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "justify",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            En calidad de acudiente del menor&nbsp;
          </span>
          <strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              {selectetStudent.firstName +
                " " +
                selectetStudent.middleName +
                " " +
                selectetStudent.firstLastName +
                " " +
                selectetStudent.secondLastName}
            </span>
          </strong>
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            &nbsp;identificado con&nbsp;
          </span>
          <strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              {selectetStudent.idType}
            </span>
          </strong>
          <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;No.&nbsp;</span>
          <strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              {selectetStudent.idNumber}
            </span>
          </strong>
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            &nbsp;del grado&nbsp;
          </span>
          <strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              {selectetStudent?.grade},&nbsp;
            </span>
          </strong>
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            y consiente de mi responsabilidad como representante legal ante la
            institución, del menor nombrado, me permito dar las siguientes
            autorizaciones y consentimientos que hacen parte del proceso
            institucional educativo.
          </span>
        </p>
        <ol style={{ margin: "0pt", paddingLeft: "0pt" }} type="I">
          <li
            style={{
              marginLeft: "11.11pt",
              marginBottom: "10pt",
              textAlign: "justify",
              paddingLeft: "24.89pt",
              fontFamily: "Arial ",
              fontWeight: "bold",
            }}
          >
            Autorización para la tenencia, administración y uso de los útiles y
            textos escolares año {lectiveYear}.
          </li>
        </ol>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "justify",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            Acepto que he sido informado de los requerimientos de textos y
            útiles escolares necesarios para el desarrollo de las actividades
            pedagógicas y que se me ha orientado sobre el uso que se le dará a
            los mismos, durante el periodo escolar {lectiveYear}. En el caso de
            la primaria algunos materiales de la lista serán de uso
            completamente personal y su uso, cuidado, desinfección y transporte
            serán enteramente responsabilidad del estudiante y su acudiente y
            otros materiales deberán reposar en el colegio para la ejecución de
            las actividades en el aula. En el caso de preescolar aunque algunos
            materiales son de uso personal, todos los materiales de la lista
            reposarán en el aula.
          </span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "justify",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            Por lo tanto,&nbsp;
          </span>
          <strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>autorizo</span>
          </strong>
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            &nbsp;al Colegio para la Estimulación del Desarrollo Integral
            Creciendo para&nbsp;
          </span>
          <strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              la tenencia, administración y uso de los útiles escolares de mi
              propiedad,
            </span>
          </strong>
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            &nbsp;que deben reposar en el colegio, dando así mi consentimiento y
            aprobación para que los útiles sean administrados según las
            necesidades pedagógicas de mi acudido y bajo los protocolos de
            bioseguridad.
          </span>
        </p>
        <ol start={2} style={{ margin: "0pt", paddingLeft: "0pt" }} type="I">
          <li
            style={{
              marginLeft: "14.17pt",
              marginBottom: "10pt",
              textAlign: "justify",
              paddingLeft: "21.83pt",
              fontFamily: '"Arial Narrow"',
              fontWeight: "bold",
            }}
          >
            Consentimiento para la asistencia en la modalidad presencial.
          </li>
        </ol>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "justify",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            Comprendo que la modalidad educativa del colegio para el año{" "}
            {lectiveYear} es presencial por lo que
          </span>
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            &nbsp;&nbsp;&nbsp;
          </span>
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            Si me encuentro de acuerdo con que mi acudido(a) asista a las aulas
            de la institución para las clases{" "}
            <strong>EN MODALIDAD PRESENCIAL.</strong>
          </span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "justify",
          }}
        >
          <strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              Aceptación de los protocolos de salud y bioseguridad.
            </span>
          </strong>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "justify",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            Manifiesto que se me ha explicado la modalidad presencial que se
            adoptará en la institución y se me han dado a conocer los protocolos
            de bioseguridad que garantizan la integridad y salud de mi
            acudido(a) mientras permanezca en las instalaciones de la
            institución educativa.
          </span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "justify",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            De la misma manera, hago constar que motivaré a mi acudido(a) a
            conocer y a cumplir con los protocolos de bioseguridad y que me
            comprometo a cumplir con estos para el caso de mi asistencia o la de
            mi acudido(a) a la institución y con los que se determinen para el
            ingreso y salida del personal de la comunidad educativa a las
            instalaciones, así como para los desplazamientos desde y hacia mi
            vivienda.
          </span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "justify",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            Para constancia firmo en la ciudad de Santa Marta, a los{" "}
            {currentDate}
          </span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "10pt",
            textAlign: "justify",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "0pt",
            textAlign: "justify",
            lineHeight: "normal",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            ________________________________
          </span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "0pt",
            textAlign: "justify",
            lineHeight: "normal",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>Firma</span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "0pt",
            textAlign: "justify",
            lineHeight: "normal",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>&nbsp;</span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "0pt",
            textAlign: "justify",
            lineHeight: "normal",
          }}
        >
          <strong>
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              {selectetStudent.guardianName}
            </span>
          </strong>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "0pt",
            textAlign: "justify",
            lineHeight: "normal",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            Nombre del acudiente
          </span>
        </p>
        <p
          style={{
            marginTop: "0pt",
            marginBottom: "0pt",
            textAlign: "justify",
            lineHeight: "normal",
          }}
        >
          <span style={{ fontFamily: '"Arial Narrow"' }}>
            C.C {selectetStudent?.guardiantId} de{" "}
            {selectetStudent?.guardiantExpeditionPlace}
          </span>
        </p>
      </div>
    </>
  );
};

export default Autorizacion;
