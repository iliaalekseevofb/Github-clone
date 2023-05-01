import { useState, useEffect } from 'react'

export function useDebounce (value: string, delay: number = 500): string {
  // State and setters for debounced value
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    // Update debounced value after delay
    const debounceHandler = setTimeout(() => {
      setDebounced(value)
    }, delay)

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed
    // within the delay period. Timeout gets cleared and restarted.
    return () => { clearTimeout(debounceHandler) }
  }, [value, delay]) // Only re-call effect if value or delay changes

  return debounced
}
