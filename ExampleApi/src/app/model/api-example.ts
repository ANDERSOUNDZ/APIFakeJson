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

export class apiDataComment {
    "postId": number;
    "id": number;
    "name": string;
    "email": string;
    "body": string;
}

export class apiDataAlbum {
    "userId": number;
    "id": number;
    "title": string;
  }

export class apiDataPhoto {
    "albumId": number;
    "id": number;
    "title": string;
    "url": string;
    "thumbnailUrl": string;
  }

export class apiDataToDo {
    "userId": number;
    "id": number
    "title": string;
    "completed": false
}