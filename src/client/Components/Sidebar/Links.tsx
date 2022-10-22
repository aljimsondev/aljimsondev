import React from "react";

import { FaGlobeAsia, FaCopy } from "react-icons/fa";
import ClickAwayListener from "../../Helpers/ClickOutsideHandler";

type Props = {
  icon: JSX.Element;
  label: string;
  type: string;
  value: string;
};

const Links: React.FC<Props> = ({ icon, label, type, value }) => {
  const linkRef = React.useRef<HTMLElement>(null);
  const mainRef = React.useRef<HTMLDivElement>(null);

  const onPressButton = React.useCallback(() => {}, []);
  const onOpenLink = React.useCallback(() => {
    linkRef.current?.classList.toggle("link-active");
  }, []);

  React.useEffect(() => {
    const listener = new ClickAwayListener(mainRef, () => {
      linkRef.current?.classList.remove("link-active");
    });

    return () => {
      //clean up
      listener.remove();
    };
  }, []);

  return (
    <div className="group sidebar-button-base" ref={mainRef}>
      <div className="sidebar-button" role="button" onClick={onOpenLink}>
        {icon}
      </div>
      <figure
        className="hidden group-hover:block absolute translate-x-[65px] select-none"
        ref={linkRef}
      >
        <div className="fig-content-base">
          <div className="fig-content">
            <figcaption className="app-text-color-dark font-semibold px-3">
              {value}
            </figcaption>
            <div
              role="button"
              onClick={onPressButton}
              className="fig-button-copy"
            >
              {type === "link" ? (
                <FaGlobeAsia size={22} />
              ) : (
                <FaCopy size={22} />
              )}
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default React.memo(Links);
