import api from './api';
import { AxiosError } from 'axios';

import olimpicsApi from './useCases/olimpics';

export * from './models/list';

export { api, olimpicsApi };

export type { AxiosError };
