import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function keys<T extends object>(obj: T) {
  return Object.keys(obj) as Array<keyof T>
}

export function values<T extends object>(obj: T) {
  return Object.values(obj) as Array<T[keyof T]>
}

export function entries<T extends object>(obj: T) {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>
}

export function flatten<T extends object>(obj: T): T {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "object" && !Array.isArray(value)) {
      return { ...acc, ...flatten(value) }
    }
    return { ...acc, [key]: value }
  }, {} as T)
}
