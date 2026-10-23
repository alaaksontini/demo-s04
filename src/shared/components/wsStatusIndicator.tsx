import { useWs, type connectionStatus } from "../hooks/useWs";

function WsStatusIndicator() {
  const { status: wsStatus } = useWs("ws://localhost:3002");

  const variant: Record<connectionStatus, string> = {
    connecting: "bg-orange-500",
    connected: "bg-green-500",
    offline: "bg-red-500",
  };

  return <div className={`rounded-full w-4 h-4 ${variant[wsStatus]}`}></div>;
}

export default WsStatusIndicator;
