export interface User {
  $id: string;
  name: string;
  phone: string;
  email: string;
}

export interface Profile {
  $id: string;
  userId: string;
  name: string;
  phone: string;
  email: string;
  pincode: string;
  address?: string;
  pushToken?: string;
}

export interface BikeType {
  $id: string;
  name: 'kids' | 'regular' | 'professional';
  active: boolean;
}

export interface RepairService {
  $id: string;
  bikeType: string;
  name: string;
  description?: string;
  referencePrice: number;
  active: boolean;
}

export interface RentalBike {
  $id: string;
  name: string;
  photos?: string[];
  specs?: string;
  dailyRate: number;
  weeklyRate?: number;
  stock: number;
  active: boolean;
}

export interface Slot {
  $id: string;
  date: string;
  window: string;
  type: 'repair' | 'rental';
  capacityTotal: number;
  capacityReserved: number;
}

export type RequestStatus = 
  | 'pending_payment' 
  | 'paid' 
  | 'assigned' 
  | 'in_progress' 
  | 'completed' 
  | 'cancelled' 
  | 'refunded';

export interface Request {
  $id: string;
  userId: string;
  type: 'repair' | 'rental';
  items?: string[];
  slot: string;
  addressNote?: string;
  media?: string[];
  coupon?: string;
  estimatedReferenceTotal: number;
  serviceChargeAmount: number;
  paymentId?: string;
  invoiceId?: string;
  status: RequestStatus;
  timeline?: Array<{
    status: RequestStatus;
    note?: string;
    at: string;
  }>;
  createdAt: string;
}

export interface RequestItem {
  $id: string;
  requestId: string;
  serviceId?: string;
  rentalBikeId?: string;
  qty: number;
  notes?: string;
}

export type PaymentStatus = 
  | 'created' 
  | 'authorized' 
  | 'captured' 
  | 'failed' 
  | 'refunded';

export interface Payment {
  $id: string;
  requestId: string;
  gatewayPaymentId?: string;
  amount: number;
  status: PaymentStatus;
  capturedAt?: string;
  invoiceNumber?: string;
}

export interface Invoice {
  $id: string;
  invoiceNumber: string;
  requestId: string;
  paymentId: string;
  userId: string;
  fileId: string;
  amount: number;
  currency: string;
  emailTo: string;
  emailSentAt?: string;
  createdAt: string;
}

export interface Promotion {
  $id: string;
  image: string;
  title: string;
  link?: string;
  linkType?: 'internal' | 'external';
  activeFrom?: string;
  activeTo?: string;
  priority: number;
}