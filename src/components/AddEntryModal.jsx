import { useState } from "react";

import cyberAgent from "../assets/cyber-agent.png";
import getRandomImageUrl from "../functions/getRandomImageUrl";

// !Funktion, kein Objekt
const createInitialFormData = () => ({
  //   title: "",
  //   date: "",
  //   imageUrl: "",
  //   content: "",

  title: "Test Entry",
  date: new Date().toISOString().slice(0, 10), //today
  imageUrl: getRandomImageUrl(),
  content: "Heute habe ich React getestet 🚀",
});

function AddEntryModal({ onClose, onSave }) {
  const [formData, setFormData] = useState(createInitialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();

    const success = onSave(formData);
    if (!success) return;

    // Formular leeren + schließen
    setFormData(createInitialFormData);
    onClose();
  };

  const handleCancel = () => {
    setFormData(createInitialFormData);
    onClose();
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h2 className="mb-4 text-xl font-semibold">New Entry</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
          />

          <input
            type="date"
            className="input input-bordered w-full"
            value={formData.date}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, date: e.target.value }))
            }
          />

          <input
            type="url"
            className="input input-bordered w-full"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
          />

          <textarea
            className="textarea textarea-bordered w-full"
            rows={4}
            placeholder="What happened today?"
            value={formData.content}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, content: e.target.value }))
            }
          />

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default AddEntryModal;
