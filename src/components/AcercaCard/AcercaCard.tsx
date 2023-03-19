import {MugShot} from "../../assets/img";
import {MacWindow} from "../MacWindow";

interface AcercaCardProps {
  id: string;
  short?: boolean;
}

function AcercaCard({id, short = false}: AcercaCardProps) {
  return (
    <MacWindow id={id} title="Acerca de mí">
      <div className="mx-auto">
        <img
          src={MugShot}
          alt="Ilustración de Lasfito"
          className=" h-[150px] w-auto"
          height={150}
          width={150}
        />
      </div>
      <div className="py-5 text-center">
        <p className="mx-auto max-w-[50ch] ">
        La página de la Contraloría de un colegio es un recurso en línea que tiene como objetivo supervisar y controlar la gestión financiera y administrativa de la institución educativa. En esta página, los usuarios pueden encontrar información detallada sobre el presupuesto del colegio, los gastos y los ingresos, así como los informes de auditoría y los procedimientos de control interno.
          <br />
          <br />
            <a href="../../public/archivos/contraweb.apk" download className="fancy"><strong>DESCARGA LA APP</strong></a>
          <br />
          ¿Quieres saber un poco mas? Entonces puedes{" "}
          o leer mi{" "}
          <a href="/acerca" className="fancy">
            bio.
          </a>
          <br />
          <br />
        </p>
      </div>
    </MacWindow>
  );
}

export default AcercaCard;
