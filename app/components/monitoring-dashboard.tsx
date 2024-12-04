import React, { useState } from "react";
import {
  ChakraProvider,
  extendTheme,
  Button,
  Box,
  Card as ChakraCard,
  CardHeader,
  CardBody,
  Heading,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import type { DashboardProps, Log } from "../types/dashboard";

// Define the theme configuration
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Extend the theme
const theme = extendTheme({ config });

function MonitoringDashboard({ initialLogs = [] }: DashboardProps) {
  const cardBg = useColorModeValue('white', 'gray.700');
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [logs, setLogs] = useState<Log[]>(initialLogs);

  const startMonitoring = () => {
    setIsMonitoring(true);
    addLog("Monitoring started");
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
    addLog("Monitoring stopped");
  };

  const addLog = (message: string) => {
    const newLog: Log = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      message,
      type: "info",
    };
    setLogs((prevLogs) => [...prevLogs, newLog]);
  };

  return (
    <Box p={4} maxW="container.md" mx="auto">
      <Heading as="h2" size="lg" mb={4}>
        Monitoring Dashboard
      </Heading>

      <Box mb={4}>
        <Button colorScheme="green" onClick={startMonitoring} mr={2}>
          Start Monitoring
        </Button>
        <Button colorScheme="red" onClick={stopMonitoring}>
          Stop Monitoring
        </Button>
      </Box>

      <ChakraCard bg={cardBg}>
        <CardHeader>
          <Heading as="h4" size="md">
            Monitoring Logs
          </Heading>
        </CardHeader>
        <CardBody>
          <Box maxH="300px" overflowY="auto">
            {logs.map((log) => (
              <Box key={log.id} mb={2}>
                <Badge colorScheme="blue" mr={2}>
                  {new Date(log.timestamp).toLocaleTimeString()}
                </Badge>
                {log.message}
              </Box>
            ))}
          </Box>
        </CardBody>
      </ChakraCard>
    </Box>
  );
}

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <MonitoringDashboard initialLogs={[]} />
    </ChakraProvider>
  );
}
