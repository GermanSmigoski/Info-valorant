import React from "react";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import { Flex, Title, Image } from "@mantine/core";

export const AgentCarousel = ({ agents, setSelectedAgent }) => {
    return (
        <Carousel
            mb={30}
            height="auto"
            slideSize="20%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={3}
            nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
            previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
            styles={{
                control: {
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    color: 'black',
                    width: rem(40),
                    height: rem(40),
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                    },
                },
            }}
        >
            {agents?.map((agent, index) => (
                <Carousel.Slide key={index}>
                    <Flex
                        align="center"
                        justify="center"
                        direction="column"
                        style={{
                            border: '1px solid black',
                            padding: '16px',
                            borderRadius: '8px',
                        }}
                        bg="#1f1f1f"
                    >
                        {agent.agentImage && (
                            <Image
                                h={80}
                                w={80}
                                src={agent.agentImage}
                                alt={agent.name || 'Agent Image'}
                                fit="cover"
                                style={{ borderRadius: '50%' }}
                            />
                        )}
                        <Title
                            order={4}
                            style={{
                                marginTop: '8px',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >
                            {agent.name}
                        </Title>
                        <button
                            onClick={() => setSelectedAgent(agent)}
                            style={{
                                marginTop: '8px',
                                padding: '8px 16px',
                                backgroundColor: '#ff3342',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px',
                            }}
                        >
                            Seleccionar
                        </button>
                    </Flex>
                </Carousel.Slide>
            ))}
        </Carousel>
    )
}
