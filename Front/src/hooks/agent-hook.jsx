import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgents } from "../Redux/Actions";

const useAgentHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllAgents());
    }, [dispatch]);

    const agents = useSelector((state) => state.agents);

    const [selectedAgent, setSelectedAgent] = useState(null);
    const [filteredAgents, setFilteredAgents] = useState([]);

    useEffect(() => {
        if (agents.length > 0) {
            const sortedAgents = agents.sort((a, b) => a.name.localeCompare(b.name))
            setSelectedAgent(sortedAgents[0]);
            setFilteredAgents(sortedAgents);
        }
    }, [agents]);

    const handleFilterRole = (role) => {
        let result;
        if (role === "all") {
            result = agents.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            result = agents.filter(agent => agent.role.displayName === role).sort((a, b) => a.name.localeCompare(b.name));
        }
        setFilteredAgents(result);
        setSelectedAgent(result[0] || null);
    };
    return {
        agents,
        filteredAgents,
        selectedAgent,
        setSelectedAgent,
        handleFilterRole
    };
};

export default useAgentHook;
