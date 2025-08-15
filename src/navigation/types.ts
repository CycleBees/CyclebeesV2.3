export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  PhoneEntry: undefined;
  OTPVerification: {
    phoneNumber: string;
  };
  ProfileSetup: {
    userId: string;
    phoneNumber: string;
  };
};

export type MainTabParamList = {
  Home: undefined;
  MyRequests: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  RepairBooking: undefined;
  RepairServiceSelection: undefined;
  RepairDetails: {
    selectedServices: string[];
    bikeType: string;
  };
  RepairSummary: {
    selectedServices: string[];
    bikeType: string;
    slot: string;
    details: {
      addressNote?: string;
      media?: string[];
      coupon?: string;
    };
  };
  RentalBooking: undefined;
  RentalCatalog: undefined;
  RentalConfiguration: {
    selectedBike: string;
  };
  RentalSummary: {
    selectedBike: string;
    duration: number;
    durationType: 'days' | 'weeks';
    details: {
      address?: string;
      coupon?: string;
    };
  };
  Payment: {
    requestId: string;
    amount: number;
  };
};

export type RequestsStackParamList = {
  RequestsList: undefined;
  RequestDetails: {
    requestId: string;
  };
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  EditProfile: undefined;
};