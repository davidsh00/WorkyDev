import * as FaIcons from "react-icons/fa";
import style from "@/styles/compnents/formControl.module.css";

export default function FormControl({
  type,
  FaIcon,
  placeHolder,
  value,
  name,
  ...props
}) {
  const IconComponent = FaIcons[FaIcon];

  return (
    <div className={style.formControl}>
      <input
        type={type || "text"}
        placeHolder={placeHolder}
        value={value}
        name={name}
      />
      {IconComponent && <IconComponent />}
    </div>
  );
}
