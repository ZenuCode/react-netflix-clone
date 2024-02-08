import React from "react";

const PlanFormComp = (props) => {
    const { data, planIndex, onClick, isSelected } = props;
    const title = data[0];
    const info = data.slice(1);

    const handleClick = () => {
        onClick(planIndex);
    };

    return (
        <button 
        className={`planform-container ${isSelected ? "clicked" : ""}`}
            onClick={handleClick}
        >
            <div>
                <div className="plan-top">
                    <p className="plan-title-top">{title.top}</p>
                    <p className="plan-title-bot">{title.bot}</p>
                </div>
                {info.map((item, index) => (
                    <div key={index} className="plan-bot">
                        { index !== 0 ? <hr className="plan-line"/> : ""}
                        <p className="plan-item-top">{item.top}</p>
                        <p className="plan-item-bot">{item.bot}</p>
                    </div>
                ))}
            </div>
        </button>
    )
}

export default PlanFormComp;