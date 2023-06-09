import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useDarkTheme (): { darkTheme: boolean, toggleDarkTheme: () => void } {
  // I use useLocalStorage hook to persist state through a page refresh.
  const [darkTheme, setDarkTheme] = useLocalStorage<boolean>('dark-theme', true)

  useEffect(() => {
    const className: string = 'dark'
    const element: HTMLElement = document.documentElement
    // if dark theme is enabled, add necessary class
    if (darkTheme) {
      element.classList.add(className)
    } else {
      element.classList.remove(className)
    }
  }, [darkTheme]) // Called if color theme was changed

  // @ts-expect-error
  return { darkTheme, toggleDarkTheme: () => { setDarkTheme((prev: boolean) => !prev) } }
}
