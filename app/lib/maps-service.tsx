import { Loader } from '@googlemaps/js-api-loader';
import { API_KEY } from '../../secrets/apiKey';

export const loader = new Loader ({
  apiKey: API_KEY,
  version: 'weekly',
});