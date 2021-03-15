type coords = { lat:number, lng:number }

type address = {
    name: string,
    category: string,
    confidenceScore: number
}

type character = {
    name: string,
    category: string,
    confidenceScore: number,
    info?: string
}

type date = {
    name: string,
    category: string,
    subcategory: string,
    confidenceScore: number
}

type event = {
    name: string,
    category: string,
    subcategory?: string,
    confidenceScore: number
}

type location = {
    name: string,
    category: string,
    subcategory?: string,
    confidenceScore: number,
    coordinates?: [ number, number ]
}

type organization = {
    name: string,
    category: string,
    subcategory?: string,
    confidenceScore: number
}

type role = {
    name: string,
    category: string,
    confidenceScore: number
}

type jsonOpera = {
    addresses: address[],
    characters: character[],
    dates: date[],
    events: event[],
    images: string[],
    locations: location[],
    organizations: organization[],
    roles: role[],
    text: {
        tweetId: string,
        it: string,
        eng?: string
    }
}​​

export { jsonOpera, coords, location };