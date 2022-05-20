import { createContext, useState, useEffect } from "react";
import { getUser } from '../services/users';
import { getProfile } from "../services/profiles";

export const UserContext = createContext();