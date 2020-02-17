import React from "react";
import { useTabs } from "../../hooks/use-tabs";

import styles from "./tabs.module.css";

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useTabs("tabs", 1);

  const createTabs = () =>
    tabs.map(tab => (
      <button
        key={`${tab.id}-tab`}
        role="tab"
        aria-selected={tab.id === activeTab}
        id={`${tab.id}-panel`}
        aria-controls={`${tab.id}-content-panel`}
        onClick={() => setActiveTab(tab.id, "tabs")}
        className={tab.id === activeTab ? "tab tab--selected" : "tab"}
      >
        {tab.title}
      </button>
    ));

  const createTabPanels = () =>
    tabs.map(tab => (
      <div
        key={`${tab.id}-panel`}
        id={`${tab.id}-content-panel`}
        role="tabpanel"
        aria-labelledby={`${tab.id}-tab`}
        className={`tab__panel ${tab.id === activeTab ? "show" : "hide"}`}
      >
        <p style={{ margin: 0 }}>{tab.content}</p>
      </div>
    ));

  return (
    <article>
      <div role="tablist" aria-orientation="horizontal">
        {createTabs()}
      </div>
      {createTabPanels()}
    </article>
  );
};
