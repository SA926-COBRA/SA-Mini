import { SettingsForm } from "./SettingsForm";
import { toast } from "react-hot-toast";

export function SettingsButton() {
  const toastId = "settings-toast";

  return (
    <button
      style={{ fontSize: "small", marginRight: 0 }}
      onClick={(event) => {
        event.preventDefault();
        toast(
          <div>
            <SettingsForm />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "8px",
              }}
            >
              <button
                style={{ fontSize: "small" }}
                onClick={() => toast.dismiss(toastId)}
              >
                Done
              </button>
            </div>
          </div>,
          {
            id: toastId,
            duration: Infinity,
            position: "bottom-center",
            style: {
              borderRadius: "10px",
              background: "var(--background)",
              color: "var(--text-main)",
            },
          },
        );
      }}
    >
      Settings
    </button>
  );
}
