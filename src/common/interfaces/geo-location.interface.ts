export interface ICoordinates {
  lat: number;
  lon: number;
}

export interface ILocationState {
  loaded: boolean;
  coordinates?: ICoordinates;
  error?: string;
}
