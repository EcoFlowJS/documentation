import React from "react";
import OriginalDocSidebar from "@theme-original/DocSidebar";
import { Icon } from "@iconify/react";

function DocSidebar(props) {
  return (
    <OriginalDocSidebar
      {...props}
      sidebar={props.sidebar.map((item) => {
        return {
          ...item,
          label: (
            <>
              {item.customProps?.icon ? (
                <Icon
                  className="sidebar-item-icon"
                  icon={item.customProps.icon}
                  height="24"
                  style={{ verticalAlign: "-0.35em" }}
                ></Icon>
              ) : (
                <></>
              )}
              {item.label}
            </>
          ),
        };
      })}
    />
  );
}

export default DocSidebar;
