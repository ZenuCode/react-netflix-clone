import React from "react";

const PlanFormComp = (props) => {
    const { data } = props;
    const title = data[0];
    const info = data.slice(1);
    console.log(info);

    return (
        <div className="planform-container">
            <div>
                <div className="plan-top">
                    <p>{title.top}</p>
                    <p>{title.bot}</p>
                </div>
                {info.map((item, index) => (
                    <div key={index}>
                        { index !== 0 ? <hr /> : ""}
                        <p>{item.top}</p>
                        <p>{item.bot}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlanFormComp;