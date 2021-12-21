import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal = ({ children, delayTime, x, setEase, durationTime }) => {
    const divRef = useRef(null);
    useEffect(() => {
        if (divRef.current)
            scrollReveal().reveal(divRef.current, {
                delay: delayTime,
                distance: x,
                easing: setEase,
                duration: durationTime,
            });
    });

    return <div ref={divRef}>{children}</div>;
};

export default ScrollReveal;
