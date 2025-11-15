import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <span className="text-blue-600 font-medium">Email:</span>
          <span className="ml-2 text-gray-700">{email}</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-blue-600 font-medium">Phone:</span>
          <span className="ml-2 text-gray-700">{phone}</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-blue-600 font-medium">Website:</span>
          <span className="ml-2 text-gray-700">{website}</span>
        </div>
        
        <div className="border-t pt-3">
          <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600">
            {address.street}, {address.suite}<br/>
            {address.city}, {address.zipcode}
          </p>
        </div>
        
        <div className="border-t pt-3">
          <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
          <p className="text-gray-700 font-medium">{company.name}</p>
          <p className="text-gray-600 text-sm">{company.catchPhrase}</p>
          <p className="text-gray-500 text-xs italic">{company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;