import React from "react";
import { Image } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";

export const AgentBanner = ({ selectedAgent, colors }) => {

    return (
        <>
            <AnimatePresence mode="wait">
                {selectedAgent && (
                    <motion.div
                        key={selectedAgent.name}
                        initial={{ opacity: 0, y: 90 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -90 }}
                        transition={{ duration: .3 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            position: "absolute",
                            right: '50%',
                        }}
                    >
                        <Image
                            pos="absolute"
                            h={500}
                            w={700}
                            src={selectedAgent.agentBanner}
                            style={{
                                borderRadius: '8px',
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                key={selectedAgent ? selectedAgent.name : 'no-agent'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    background: `linear-gradient(to right, #${colors[0]}, #${colors[1]}, #${colors[2]}, #${colors[3]})`,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            ></motion.div>
        </>
    )
}