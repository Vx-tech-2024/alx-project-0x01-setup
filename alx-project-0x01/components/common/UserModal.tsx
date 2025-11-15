import { UserData, UserModalProps, UserProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  // The rest of the component remains the same
  // We'll handle the type conversion inside the component
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle nested objects
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      if (parent === 'address' || parent === 'company') {
        setUser(prev => ({
          ...prev,
          [parent]: {
            ...prev[parent as keyof UserData],
            [child]: value
          }
        }));
      } else if (parent === 'geo') {
        setUser(prev => ({
          ...prev,
          address: {
            ...prev.address,
            geo: {
              ...prev.address.geo,
              [child]: value
            }
          }
        }));
      }
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Convert UserData to UserProps for the onSubmit callback
  const userPost: UserProps = {
    id: user.id || 0, // Provide a default ID
    name: user.name,
    username: user.username,
    email: user.email,
    address: user.address,
    phone: user.phone,
    website: user.website,
    company: user.company
  };
  
  onSubmit(userPost);
  onClose();
};

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter full name"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email address"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter website URL"
            />
          </div>

          {/* Address Section */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Address Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="street" className="block text-gray-700 font-medium mb-2">Street</label>
                <input
                  type="text"
                  id="street"
                  name="address.street"
                  value={user.address.street}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter street"
                />
              </div>
              <div>
                <label htmlFor="suite" className="block text-gray-700 font-medium mb-2">Suite/Apt</label>
                <input
                  type="text"
                  id="suite"
                  name="address.suite"
                  value={user.address.suite}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter suite or apartment"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  name="address.city"
                  value={user.address.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">Zipcode</label>
                <input
                  type="text"
                  id="zipcode"
                  name="address.zipcode"
                  value={user.address.zipcode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter zipcode"
                />
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Company Information</h3>
            <div>
              <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="company.name"
                value={user.company.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="catchPhrase" className="block text-gray-700 font-medium mb-2">Catch Phrase</label>
              <input
                type="text"
                id="catchPhrase"
                name="company.catchPhrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company catch phrase"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="bs" className="block text-gray-700 font-medium mb-2">Business</label>
              <input
                type="text"
                id="bs"
                name="company.bs"
                value={user.company.bs}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter business description"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 focus:outline-none font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;