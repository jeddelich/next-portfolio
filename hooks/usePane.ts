"use client";

import { useState } from "react";

function usePane(initialPane = 0) {
  const [activePane, setActivePane] = useState(initialPane);

  const onPaneChange = (paneIndex: number) => {
    setActivePane(paneIndex);
  };

  return {
    activePane,
    onPaneChange,
  };
}

export default usePane;
