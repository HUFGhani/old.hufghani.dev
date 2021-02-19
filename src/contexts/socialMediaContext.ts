import { createContext, useContext } from 'react'
import SocialMediaInterface from '../interface/socialMediaInterface'

export const SocialMediaContext = createContext<SocialMediaInterface | undefined>(undefined)

export const useSocialMediaContext = () => useContext<SocialMediaInterface | undefined>(SocialMediaContext)
