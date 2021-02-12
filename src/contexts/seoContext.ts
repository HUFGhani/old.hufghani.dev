import { createContext, useContext } from 'react'

interface SEOContextType {
  data: {
    site: {
      siteMetadata: {
        author: string
        url: string
        twitter: string
        titleAlt: string
        siteUrl: string
        siteLanguage: string
        shortName: string
        pathPrefix: string
        description: string
      }
    }
  }
}

export const SEOContext = createContext<SEOContextType | undefined>(undefined)

export const useSEOContext = () => useContext<SEOContextType | undefined>(SEOContext)
