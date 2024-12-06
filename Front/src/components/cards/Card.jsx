import React from "react";
import { Stack } from "@mantine/core";
import useAgentHook from "../../hooks/agent-hook";
import { Abilities } from "./abilities";
import { AgentCarousel } from "./carousel";
import { AgentBanner } from "./banner";

export const Card = () => {
  const { agents, selectedAgent, setSelectedAgent } = useAgentHook();
  const colors = selectedAgent ? selectedAgent.background : [];

  return (
    <Stack
      h="83vh"
      spacing="xl"
      justify="flex-end"
      pos="revert"
      sx={{
        height: '100vh',
      }}
    >
      <AgentBanner selectedAgent={selectedAgent} colors={colors} />
      {
        selectedAgent?.abilities && <Abilities abilities={selectedAgent.abilities} />
      }
      <AgentCarousel agents={agents} setSelectedAgent={setSelectedAgent} />

    </Stack >
  );
};
