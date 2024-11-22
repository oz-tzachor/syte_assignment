import React from 'react';

type Catalog = {
  _id: string;
  name: string;
  vertical: string;
  isPrimary: boolean;
  locales: string[];
  indexedAt: string;
};

type Props = {
  catalogs: Catalog[];
  onEdit: (catalog: Catalog) => void;
  onDelete: (id: string) => void; // Pass ID to confirmation modal
};

const CatalogTable: React.FC<Props> = ({ catalogs, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="table-auto w-full text-sm text-left text-gray-500 bg-white rounded-lg">
        <thead className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Vertical</th>
            <th className="px-6 py-4">Primary</th>
            <th className="px-6 py-4">Locales</th>
            <th className="px-6 py-4">Indexed At</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {catalogs.map((catalog, index) => (
            <tr
              key={catalog._id}
              className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            >
              <td className="px-6 py-4 font-medium text-gray-900">{catalog.name}</td>
              <td className="px-6 py-4 capitalize">{catalog.vertical}</td>
              <td className="px-6 py-4">{catalog.isPrimary ? 'Yes' : 'No'}</td>
              <td className="px-6 py-4">{catalog.locales.join(', ')}</td>
              <td className="px-6 py-4">{new Date(catalog.indexedAt).toLocaleString()}</td>
              <td className="px-6 py-4 flex space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow"
                  onClick={() => onEdit(catalog)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow"
                  onClick={() => onDelete(catalog._id)} // Pass catalog ID to the confirmation modal
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatalogTable;
