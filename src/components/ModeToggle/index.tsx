"use client"

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {

    const { setTheme } = useTheme()
    const [darkMode, setDarkMode] = React.useState(false)
    
    function ChangeToDarkMode() {
        setTheme("dark")
        setDarkMode(true)
    }

    function ChangeToLightMode() {
        setTheme("light")
        setDarkMode(false)
        }

  return (

        <Button variant="ghost" size="icon">
          {!darkMode ? (
              <Sun
                onClick={ChangeToDarkMode}
                  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          ) : (
            <Moon
            onClick={ChangeToLightMode}
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          ) }
        </Button>
  )
}
