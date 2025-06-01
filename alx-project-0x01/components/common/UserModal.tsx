import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        id: 0,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
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
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name.startsWith("address.")) {
            const field = name.split(".")[1];
            setUser(prev => ({
                ...prev,
                address: { ...prev.address, [field]: value }
            }));
        } else if (name.startsWith("geo.")) {
            const field = name.split(".")[1];
            setUser(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    geo: { ...prev.address.geo, [field]: value }
                }
            }));
        } else if (name.startsWith("company.")) {
            const field = name.split(".")[1];
            setUser(prev => ({
                ...prev,
                company: { ...prev.company, [field]: value }
            }));
        } else {
            setUser(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg overflow-y-auto max-h-screen">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {["name", "username", "email", "phone", "website"].map((field) => (
                        <div key={field}>
                            <label htmlFor={field} className="block text-gray-700 font-medium mb-1 capitalize">{field}</label>
                            <input
                                type="text"
                                id={field}
                                name={field}
                                value={user[field as keyof UserData] as string}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    ))}

                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
                        {["street", "suite", "city", "zipcode"].map(field => (
                            <input
                                key={field}
                                type="text"
                                name={`address.${field}`}
                                placeholder={field}
                                value={typeof user.address[field as keyof typeof user.address] === "string" ? user.address[field as keyof typeof user.address] as string : ""}
                                onChange={handleChange}
                                className="w-full mb-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        ))}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="geo.lat"
                                placeholder="Latitude"
                                value={user.address.geo.lat}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                name="geo.lng"
                                placeholder="Longitude"
                                value={user.address.geo.lng}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
                        {["name", "catchPhrase", "bs"].map(field => (
                            <input
                                key={field}
                                type="text"
                                name={`company.${field}`}
                                placeholder={field}
                                value={user.company[field as keyof typeof user.company]}
                                onChange={handleChange}
                                className="w-full mb-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        ))}
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
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
