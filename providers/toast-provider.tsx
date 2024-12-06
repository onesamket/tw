import { Toast, ToastProps } from '@/components/ui/toast'
import React, { createContext, useContext, useState, useCallback } from 'react'

type ToastContextType = {
    toast: (props: Omit<ToastProps, 'onClose'>) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toastState, setToastState] = useState<Omit<ToastProps, 'onClose'> | null>(null)

    const toast = useCallback((props: Omit<ToastProps, 'onClose'>) => {
        setToastState(props)
    }, [])

    const hideToast = useCallback(() => {
        setToastState(null)
    }, [])

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            {toastState && <Toast {...toastState} onClose={hideToast} />}
        </ToastContext.Provider>
    )
}

export function useToast() {
    const context = useContext(ToastContext)
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}