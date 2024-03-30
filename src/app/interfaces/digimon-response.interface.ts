export interface DigimonResponse {
    content:  Digimon[];
    pageable: ResponseDetails;
}

export interface  Digimon {
    id:    number;
    name:  string;
    href:  string;
    image: string;
}

export interface ResponseDetails {
    currentPage:    number;
    elementsOnPage: number;
    totalElements:  number;
    totalPages:     number;
    previousPage:   string;
    nextPage:       string;
}
