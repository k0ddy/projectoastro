import {GITHUB_URL} from "../../consts";
import OlaComp from "../OlaComp/OlaComp";

const Footer = () => {
  return (
    <footer className="relative mx-auto  mt-10 flex w-full flex-col items-center justify-evenly rounded-t-xl bg-fondo py-8  pb-40 text-center  text-texto-str md:px-8 md:pb-24 md:text-lg ">
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:gap-3">
        <p className="my-1">
          © 2023 – Somos <span className="italic">EL FUTURO.</span>{" "}
        </p>
      </div>
      <OlaComp />
    </footer>
  );
};

export default Footer;
