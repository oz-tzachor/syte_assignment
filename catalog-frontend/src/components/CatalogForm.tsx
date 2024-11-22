import React, { useState, useEffect } from 'react';

type Catalog = {
  name: string;
  vertical: string;
  isPrimary: boolean;
  locales: string[];
};

type Props = {
  initialValues?: Catalog; // Values for editing
  onSubmit: (data: Catalog) => void; // Form submission handler
  onClose: () => void; // Form close handler
};

const CatalogForm: React.FC<Props> = ({ initialValues, onSubmit, onClose }) => {
  const [name, setName] = useState(initialValues?.name || '');
  const [vertical, setVertical] = useState(initialValues?.vertical || 'fashion');
  const [isPrimary, setIsPrimary] = useState(initialValues?.isPrimary || false);
  const [locales, setLocales] = useState(
    initialValues?.locales.join(', ') || ''
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name,
      vertical,
      isPrimary,
      locales: locales.split(',').map((locale) => locale.trim()),
    };
    onSubmit(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">
          {initialValues ? 'Edit Catalog' : 'Add New Catalog'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Vertical</label>
            <select
              className="mt-1 p-2 w-full border rounded-md"
              value={vertical}
              onChange={(e) => setVertical(e.target.value)}
              required
            >
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="general">General</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Is Primary
              <input
                type="checkbox"
                className="ml-2"
                checked={isPrimary}
                onChange={(e) => setIsPrimary(e.target.checked)}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Locales</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="e.g., en_US, fr_FR"
              value={locales}
              onChange={(e) => setLocales(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {initialValues ? 'Save Changes' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CatalogForm;
