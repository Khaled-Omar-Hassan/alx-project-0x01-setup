import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
    return (

        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-700 mb-1">Username: {username}</p>
            <p className="text-gray-700 mb-1">Email: {email}</p>
            <p className="text-gray-700 mb-1">Phone: {phone}</p>
            <p className="text-gray-700 mb-1">Website: {website}</p>
            <div className="mt-2">
                <h3 className="font-semibold">Address:</h3>
                <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
            </div>
            <div className="mt-2">
                <h3 className="font-semibold">Company:</h3>
                <p>{company.name}</p>
                <p>{company.catchPhrase}</p>
                <p>{company.bs}</p>
            </div>
        </div>
    );
};

export default UserCard;