"use client";

import React from "react";

type LogEntry = {
  timestamp: string;
  message: string;
};

type LoggingProps = {
  logs: LogEntry[];
};

const Logging: React.FC<LoggingProps> = ({ logs }) => {
  return (
    <div className="logging-container p-4 border border-gray-300 rounded-md mt-4">
      <h2 className="text-lg font-bold mb-2">Monitoring Logs</h2>
      <div className="log-entries">
        {logs.length === 0 ? (
          <p className="text-gray-500">No logs available</p>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="log-entry mb-1">
              <span className="text-sm font-mono text-gray-700">{`[${log.timestamp}]`}</span>{" "}
              <span className="text-sm">{log.message}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Logging;
