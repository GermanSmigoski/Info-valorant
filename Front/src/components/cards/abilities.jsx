import { Box, Flex, Image, Title, Text } from "@mantine/core";
import React from "react";

export const Abilities = ({ abilities }) => {

    const setAbilities = (ability) => {
        switch (ability) {
            case 0:
                return "Q"
            case 1:
                return "E"
            case 2:
                return "C"
            case 3:
                return "X"
            default:
                break
        }
    }

    return (
        <Box
            mt={10}
            style={{
                position: "absolute",
                top: "70px",
                right: "20px",
                padding: "16px",
                maxWidth: "300px",
                backgroundColor: "#1f1f1f",
                border: "1px solid #333",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
        >
            <Title order={4} style={{ color: "white", marginBottom: "12px" }}>
                Habilidades
            </Title>
            {abilities?.map((ability, index) => (
                <Flex
                    key={index}
                    style={{
                        background: "#2b2b2b",
                        border: "1px solid #444",
                        borderRadius: "8px",
                        padding: "12px",
                        marginBottom: "8px",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <Box
                        style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: ability.slot === "Passive" ? "#fa6b76" : "#ff3342",
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "4px",
                            fontWeight: "bold",
                        }}
                    >
                        {ability.slot === "Passive" ? "P" : setAbilities(index)}
                    </Box>
                    {ability.displayIcon && (
                        <Image
                            src={ability.displayIcon}
                            alt={ability.displayName}
                            width={50}
                            height={50}
                            style={{
                                borderRadius: "50%",
                                border: "2px solid white",
                            }}
                        />
                    )}
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                        {ability.displayName}
                    </Text>
                </Flex>
            ))}
        </Box>
    );
};
