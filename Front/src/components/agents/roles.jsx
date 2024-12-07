import { Flex, Image, Tooltip } from "@mantine/core";
import React from "react";

export const Roles = ({ handleFilterRole }) => {

    return (
        <Flex
            mt={10}
            gap={15}
            style={{
                position: "absolute",
                top: "70px",
                left: "20px",
                padding: "16px",
                maxWidth: "500px",
                backgroundColor: "rgba(31, 31, 31, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(51, 51, 51, 0.5)",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
        >
            <button
                style={{
                    borderRadius: "4px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    padding: "8px 12px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                }}
                onClick={() => handleFilterRole("all")}
                onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
            >
                Todos
            </button>
            <Tooltip label="Duelistas" position="bottom-start" offset={{ mainAxis: 15, crossAxis: 0 }}
            >
                <button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px",
                        transition: "all 0.3s ease",
                    }}
                    onClick={() => handleFilterRole("Duelista")}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <Image
                        w={30}
                        h={30}
                        style={{ background: "transparent" }}
                        src="./duelist.png"
                    />
                </button>
            </Tooltip>
            <Tooltip label="Iniciadores" position="bottom-start" offset={{ mainAxis: 15, crossAxis: 0 }}>
                <button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px",
                        transition: "all 0.3s ease",
                    }}
                    onClick={() => handleFilterRole("Iniciador")}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <Image
                        w={30}
                        h={30}
                        style={{ background: "transparent" }}
                        src="./initiator.png"
                    />
                </button>
            </Tooltip>
            <Tooltip label="Centinelas" position="bottom-start" offset={{ mainAxis: 15, crossAxis: 0 }}>
                <button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px",
                        transition: "all 0.3s ease",
                    }}
                    onClick={() => handleFilterRole("Centinela")}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <Image
                        w={30}
                        h={30}
                        style={{ background: "transparent" }}
                        src="./sentinel.png"
                    />
                </button>
            </Tooltip>
            <Tooltip label="Controladores" position="bottom-start" offset={{ mainAxis: 15, crossAxis: 0 }}>
                <button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px",
                        transition: "all 0.3s ease",
                    }}
                    onClick={() => handleFilterRole("Controlador")}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <Image
                        w={30}
                        h={30}
                        style={{ background: "transparent" }}
                        src="./controller.png"
                    />
                </button>
            </Tooltip>
        </Flex>
    );
};
