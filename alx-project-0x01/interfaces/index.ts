export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
    name: string;
    username: string;
    email: string;
    address:{
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: number;
            lng: number;
        }
    };
    phone: number;
    website: string;
    company: {
        name: string;
        catchPhrase:string;
        bs: string;
    }
}