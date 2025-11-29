import React from 'react';

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  monthlyPrice: number;
  totalPrice: number;
  installments?: string;
  highlight?: boolean;
  tagline?: string;
  features: string[];
  savings?: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  timeframe: string;
}

export interface Client {
  name: string;
  category?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chatvolt-chatbox-standard': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}