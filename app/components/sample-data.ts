import { Log } from './types/dashboard';

export const sampleLogs: Log[] = [
  {
    id: '1',
    timestamp: '2023-04-10T10:30:00Z',
    message: 'System check completed',
    type: 'info',
  },
  {
    id: '2',
    timestamp: '2023-04-10T10:35:00Z',
    message: 'High CPU usage detected',
    type: 'warning',
  },
  {
    id: '3',
    timestamp: '2023-04-10T10:40:00Z',
    message: 'Database connection failed',
    type: 'error',
  },
  {
    id: '4',
    timestamp: '2023-04-10T10:45:00Z',
    message: 'New user registered',
    type: 'info',
  },
  {
    id: '5',
    timestamp: '2023-04-10T10:50:00Z',
    message: 'Backup completed successfully',
    type: 'success',
  },
];
