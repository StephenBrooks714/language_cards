import data from "../helper/data"
import "./Card.css"
import { useEffect } from "react";

export default function Card() {
    useEffect(() => {
        const cards = document.querySelectorAll(".show");
        cards.forEach((card) => {
            card.addEventListener("mouseenter", () => {
                card.classList.add("showContent");
            });
            card.addEventListener("mouseleave", () => {
                card.classList.remove("showContent");
            });
        });
    }, []);
    return (
        <>
            {data.map((categories) => {
                return (
                    <>
                        <div className={"col-6 mb-5"}>
                            <div className={"card max-card-height show hover-zoom p-3"}>
                                <a href="#!" className={"showContent"}>
                                    <img src={categories.img} alt={categories.name} style={{height: "90px", width: "110px"}}/>
                                </a>
                                <p className={"ch4"}>
                                {categories.name}
                                </p>
                                <div className={"content text-white"}>
                                    {categories.options}
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    )
}