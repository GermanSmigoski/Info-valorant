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

    useEffect(() => {
        if (agents.length > 0) {
            setSelectedAgent(agents[0]);
        }
    }, [agents]);

    return {
        agents,
        selectedAgent,
        setSelectedAgent,
    };
};

export default useAgentHook;
