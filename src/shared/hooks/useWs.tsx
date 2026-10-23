import { useCallback, useEffect, useRef, useState } from "react";

export type connectionStatus = "connecting" | "connected" | "offline";

export function useWs(url: string) {
  const [status, setStatus] = useState<connectionStatus>("connecting");
  const wsRef = useRef<WebSocket>(null);
  const attemptRef = useRef(0);

  const connect = useCallback(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;
    ws.onopen = () => {
      setStatus("connected");
      attemptRef.current = 0;
    };

    ws.onclose = () => {
      setStatus("connecting");
      // scheduleReconnect();
    };
  }, [url]);

  useEffect(() => {
    connect();
    return () => wsRef.current?.close();
  }, []);

  return { status, ws: wsRef.current };
}
