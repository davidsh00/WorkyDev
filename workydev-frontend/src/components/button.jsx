import style from "@/styles/compnents/button.module.css";
export default function Button({ type, lable, classNamee, id, ...props }) {
  return (
    <div className={`${style.buttonContainer} `}>
      <button lable={lable} type={type || "submit"}>
        {lable}
      </button>
    </div>
  );
}
