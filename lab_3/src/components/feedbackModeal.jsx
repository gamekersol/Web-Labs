import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "../App.css";

const ENDPOINT = "https://formspree.io/f/xgaapnvk";
const DELAY_MS = 2000;

export default function FeedbackModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (sessionStorage.getItem("feedbackShown")) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("feedbackShown", "1");
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return createPortal(
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={() => setOpen(false)}>
          &times;
        </button>

        {status === "success" ? (
          <div className="modal-success">
            <h2>Дякуємо!</h2>
            <p>Ваше повідомлення надіслано.</p>
            <button className="modal-btn" onClick={() => setOpen(false)}>
              Закрити
            </button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <h2>Зворотний зв'язок</h2>

            <label className="modal-label">
              Ім'я
              <input className="modal-input" name="name" required minLength={2} />
            </label>

            <label className="modal-label">
              Email
              <input className="modal-input" type="email" name="email" required />
            </label>

            <label className="modal-label">
              Номер телефону
              <input
                className="modal-input"
                type="tel"
                name="phone"
                required
                pattern="^\+?[0-9\s\-()]{7,20}$"
                title="Наприклад: +380501234567"
              />
            </label>

            <label className="modal-label">
              Повідомлення
              <textarea
                className="modal-input modal-textarea"
                name="message"
                rows={4}
                required
              />
            </label>

            {status === "error" && (
              <p className="modal-error">Не вдалось надіслати. Спробуйте ще раз.</p>
            )}

            <button className="modal-btn" disabled={status === "sending"}>
              {status === "sending" ? "Надсилання..." : "Надіслати"}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}