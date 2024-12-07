import { Box, Title, Text, Flex, Image } from "@mantine/core";

export const AgentRole = ({ role }) => {
    return (
        <>
            {role && (
                <Box
                    bg="rgba(31, 31, 31, 0.8)"
                    px="md"
                    py="sm"
                    maw={345}
                    style={{
                        position: "absolute",
                        top: "180px",
                        left: "20px",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(51, 51, 51, 0.5)",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <Flex
                        align="center"
                        gap="sm"
                        mb="sm"
                    >
                        <Image
                            src={role.displayIcon}
                            width={40}
                            height={40}
                            alt={`${role.displayName} icon`}
                            fit="contain"
                        />
                        <Title
                            order={3}
                            fw="bold"
                            c="white"
                            style={{
                                flex: 1,
                                textAlign: "left",
                                marginBottom: 0,
                            }}
                        >
                            {role.displayName}
                        </Title>
                    </Flex>
                    <Text
                        c="gray.4"
                        fz="xs"
                        ta="left"
                    >
                        {role.description}
                    </Text>
                </Box>
            )}
        </>
    );
};
