import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentLoading.css";

const PaymentLoading = () => {
    const [contentIndex, setContentIndex] = useState(0);
    const contentArray = ["One", "Two", "Three", "Four"];
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setContentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [contentArray.length]);

    useEffect(() => {
        if (contentIndex === contentArray.length - 1) {
            const timeoutId = setTimeout(() => {
                // navigate("/another-screen");
            }, 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [contentIndex, contentArray.length, navigate]);

    return (
        <div className="never-pay-for-fake">
            <p className="loading-info">Processing Payment</p>
            <CircularProgress />
            <div className="text-container">
                {contentArray.map((text, index) => (
                    <p
                        key={index}
                        className={`fade-text ${contentIndex === index ? "visible" : ""}`}
                    >
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default PaymentLoading;
