export interface IState {
  loading: boolean;
  moreLoading: boolean;
  error: string;
  moreError: string;
  data: IDriver[];
  totalDrivers: number;
  isListEnd: boolean;
}

export interface IPaginations {
  offset: number;
  limit: number;
}

export interface IPaginationsProps {
  payload: IPaginations;
}

export interface IDriver {
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  url: string;
}

export interface IDataDrivers {
  DriverTable: {
    Drivers: IDriver[];
  };
  limit: string;
  offset: string;
  series: string;
  total: string;
  url: string;
  xmlns: string;
}

export interface IData {
  data: {
    MRData: IDataDrivers;
  };
}
