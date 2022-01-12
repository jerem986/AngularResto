export interface Reservation{
    id : number
    idClient : number
    nbPers : number
    dateDeRes : Date
    horaire : number
    validationStatuts : number
}

export interface ReservationGestion{
    id : number
    idClient : number
    nbPers : number
    dateDeRes : Date
    horaire : number
    validationStatuts : number
    name : string
}