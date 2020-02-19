import { RefObject, useEffect } from "react";

export const useOutsideClick: (
    ref: RefObject<HTMLElement | null>,
    closeButtonRef: RefObject<HTMLElement | null>,
    handler: (event: any) => void,
) => void = (ref, closeButtonRef, handler) => {
    useEffect(() => {
        const listener = (event: any) => {
            // Do nothing if clicking ref's element or descendent elements
            if (
                !ref.current ||
                ref.current.contains(event.target) ||
                !closeButtonRef.current ||
                closeButtonRef.current.contains(event.target)
            ) {
                return;
            }

            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};
