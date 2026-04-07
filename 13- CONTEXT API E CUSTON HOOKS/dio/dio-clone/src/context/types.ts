import React from 'react';
import { IUser } from '../@types/user';

export interface IAuthContext { 
    user: IUser | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

export interface IAuthContextProviderProps {
    children: React.ReactNode;
}

export interface IloginData {
    email: string;
    password: string;
}