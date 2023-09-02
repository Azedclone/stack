"use client";

import { Plus } from "lucide-react";
import { ActionTooltip } from "@/components/shared/action-tooltip";

export const NavigationAction = () => {
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button className="group flex items-center">
          <div className="flex mx-3 h-12 w-12 rounded-3xl group-hover:rounded-2xl transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className="group-hover:text-white transition-all text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
