import React from "react";
import { Stack } from "@mantine/core";
import useAgentHook from "../../hooks/agent-hook";
import { Abilities } from "./abilities";
import { AgentCarousel } from "./carousel";
import { AgentBanner } from "./banner";
import { Roles } from "./roles";
import { AgentRole } from "./agent-role";

export const Agents = () => {
  const { selectedAgent, filteredAgents, setSelectedAgent, handleFilterRole } = useAgentHook();
  const colors = selectedAgent ? selectedAgent.background : [];


  return (
    <Stack
      h="83.1vh"
      spacing="xl"
      justify="flex-end"
      pos="revert"
      sx={{
        height: '100vh',
      }}
    >
      {
        selectedAgent &&
        <>
          <Roles handleFilterRole={handleFilterRole} />
          <AgentBanner selectedAgent={selectedAgent} colors={colors} />
          <AgentRole role={selectedAgent.role} />
          <Abilities abilities={selectedAgent.abilities} />
        </>
      }

      <AgentCarousel agents={filteredAgents} setSelectedAgent={setSelectedAgent} />

    </Stack >
  );
};
