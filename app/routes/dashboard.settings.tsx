import { useState } from "react";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Input } from "../components/input";

const STORAGE_KEY = "dashboard.displayName";

export default function DashboardSettings() {
  const [name, setName] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) ?? "Ada Lovelace";
    } catch {
      return "Ada Lovelace";
    }
  });
  const [saved, setSaved] = useState(false);

  const save = () => {
    try {
      localStorage.setItem(STORAGE_KEY, name);
    } catch {
      // storage unavailable — nothing to persist
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Settings</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        This is /dashboard/settings — a nested child route with a working form:
        local state, an <code className="text-xs">&lt;Input /&gt;</code>{" "}
        component, and localStorage persistence.
      </p>
      <Card title="Profile" className="max-w-md">
        <div className="space-y-4">
          <Input
            label="Display name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <div className="flex items-center gap-3">
            <Button onClick={save} disabled={name.trim() === ""}>
              Save
            </Button>
            {saved && (
              <span
                role="status"
                className="text-sm text-green-600 dark:text-green-400"
              >
                Saved ✓
              </span>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
