import { useEffect, useRef } from "react";

export default function Footer() {
    const myButtonRef = useRef(null);

    useEffect(() => {
        const mybutton = myButtonRef.current;

        if (!mybutton) return;

        const scrollFunction = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        };

        window.addEventListener("scroll", scrollFunction);
        mybutton.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        return () => {
            window.removeEventListener("scroll", scrollFunction);
            mybutton.removeEventListener("click", () => {});
        };
    }, []);

    return (
        <div>
            <div style={{ margin: "10px", padding: "1px", backgroundColor: "#175692", color: "white" }}>
                <p>Copyright © CSC COMPUTER EDUCATION Pvt.Ltd. All Rights Reserved</p>
            </div>
            <button ref={myButtonRef} id="scrollToTopBtn" title="Go to top">^</button>
            <div style={{ margin: "10px", backgroundColor: "#175692", color: "white" }}>
                <p>Created by Monika. S and Kaviya. P</p>
            </div>
        </div>
    );
}