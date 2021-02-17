import { createContext, useContext } from 'react'
import SEOInterface from '../interface/seoInterface'

export const SEOContext = createContext<SEOInterface | undefined>(undefined)

export const useSEOContext = () => useContext<SEOInterface | undefined>(SEOContext)
