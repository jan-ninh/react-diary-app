// src/components/AddEntryModal.jsx
import { useState } from "react";

// const getRandomImageUrl = () =>
//   `https://picsum.photos/seed/diary-${Date.now()}/1200/600`;

const getRandomImageUrl = () => {
  const index = Math.floor(Math.random() * IMAGE_POOL.length);
  return IMAGE_POOL[index];
};
const IMAGE_POOL = [
  "https://images.pexels.com/photos/5845255/pexels-photo-5845255.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/1718758/pexels-photo-1718758.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/5589598/pexels-photo-5589598.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/2338113/pexels-photo-2338113.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/10175091/pexels-photo-10175091.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",

  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/338711/pexels-photo-338711.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/220118/pexels-photo-220118.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",

  "https://images.pexels.com/photos/245535/pexels-photo-245535.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/756685/pexels-photo-756685.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/1403653/pexels-photo-1403653.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/2119632/pexels-photo-2119632.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/2610756/pexels-photo-2610756.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",

  "https://images.pexels.com/photos/1769356/pexels-photo-1769356.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/264502/pexels-photo-264502.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
  "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
];

// 👉 Funktion, kein Objekt
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
