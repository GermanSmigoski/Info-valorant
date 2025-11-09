import React from "react";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { rem, Flex, Title, Image } from '@mantine/core';
import { motion } from 'framer-motion';
import './carousel.css';

export const AgentCarousel = ({ agents, setSelectedAgent }) => {
    return (
        <Carousel
            height="auto"
            slideSize="20%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={3}
            maw="90%"
            style={{ margin: '0 auto', marginBottom: "30px" }}
            nextControlIcon={<IconArrowRight style={{ width: rem(20), height: rem(20) }} />}
            previousControlIcon={<IconArrowLeft style={{ width: rem(20), height: rem(20) }} />}
            styles={{
                root: {
                    '& .mantine-Carousel-viewport': {
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                },
                control: {
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 70, 85, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 70, 85, 0.4)',
                    color: '#ff4655',
                    width: rem(48),
                    height: rem(48),
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 4px 12px rgba(255, 70, 85, 0.3)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 70, 85, 0.4)',
                        borderColor: 'rgba(255, 70, 85, 0.6)',
                        transform: 'scale(1.1)',
                        boxShadow: '0 6px 20px rgba(255, 70, 85, 0.5)',
                    },
                    '&:active': {
                        transform: 'scale(0.95)',
                    },
                    '&[data-inactive]': {
                        opacity: 0.3,
                        cursor: 'not-allowed',
                    },
                },
                indicators: {
                    bottom: rem(-40),
                },
                indicator: {
                    width: rem(8),
                    height: rem(8),
                    backgroundColor: 'rgba(255, 70, 85, 0.3)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&[data-active]': {
                        backgroundColor: '#ff4655',
                        width: rem(24),
                        borderRadius: rem(4),
                    },
                },
            }}
        >
            {agents?.map((agent, index) => (
                <Carousel.Slide key={index}>
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: index * 0.03,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        whileHover={{ y: -10, scale: 1.03 }}
                        className="agent-card"
                    >
                        <Flex
                            align="center"
                            justify="center"
                            direction="column"
                            className="agent-card-content"
                        >
                            {agent.agentImage && (
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="agent-image-wrapper"
                                >
                                    <Image
                                        h={90}
                                        w={90}
                                        src={agent.agentImage}
                                        alt={agent.name || 'Agent Image'}
                                        fit="cover"
                                        className="agent-image"
                                    />
                                </motion.div>
                            )}
                            <Title
                                order={4}
                                className="agent-name"
                            >
                                {agent.name}
                            </Title>
                            <motion.button
                                onClick={() => setSelectedAgent(agent)}
                                className="agent-select-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                Seleccionar
                            </motion.button>
                        </Flex>
                    </motion.div>
                </Carousel.Slide>
            ))}
        </Carousel>
    );
};
