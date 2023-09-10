"use client";

import { Switch } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";
import {useTheme} from "next-themes";

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOnChange = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme)
  }

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      <Switch
        defaultSelected
        size="sm"
        color="success"
        startContent={<HiSun />}
        endContent={<HiMoon />}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default ThemeSwitch;
