"use client";

import {ThemeProvider as NextThemesProvider} from "next-themes"

export function ThemeProvider({ children, ...props}) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

//Actua como un contenedor para proporcionar temas a otros componentes en la aplicacion. Proporciona el contexto y las funciones necesarias para gestionar temas.