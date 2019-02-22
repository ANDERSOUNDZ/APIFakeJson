export class apiDataPost {
    "userId": number;
    "id": number;
    "title": string;
    "body": string;
}

export class apiDataUser {
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "address": {
      "street": string;
      "suite": string;
      "city": string;
      "zipcode": string;
      "geo": {
        "lat": string;
        "lng": string;
      }
    }
}