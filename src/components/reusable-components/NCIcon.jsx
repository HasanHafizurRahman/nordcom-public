import React from "react";
import { Icon } from "@iconify/react";

const NCIcon = ({
  iconName,
  color,
  fontSize,
  position,
  top,
  right,
  transform,
}) => {
  //   console.log(iconName, color, fontSize);
  return (
    <div>
      <Icon
        icon={iconName}
        style={{
          color: color,
          fontSize: fontSize,
          position: position,
          top: top,
          right: right,
          transform: transform,
        }}
      />
    </div>
  );
};

export default NCIcon;
