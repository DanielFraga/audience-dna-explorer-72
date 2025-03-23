
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Settings, Info } from "lucide-react";

const RightSideMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path, { state: { preserveSearch: true } });
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 p-0 rounded-full text-gray-400 hover:text-white"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64 bg-gray-900 border-gray-800 text-gray-100 px-4 py-6">
        <div className="flex flex-col space-y-1 pt-4">
          <h3 className="font-medium text-sm text-gray-400 pb-2 px-3">Navigation</h3>
          
          <button
            onClick={() => handleNavigation("/settings")}
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md text-sm transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
          
          <button
            onClick={() => handleNavigation("/survey-audience")}
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md text-sm transition-colors"
          >
            <Info className="w-4 h-4" />
            <span>About Us</span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default RightSideMenu;
