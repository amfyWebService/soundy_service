
export function generateJSON(code : string, message: string) : string
{
    let obj = 
    {
        "code" : code,
        "message" : message
    }

    return JSON.stringify(obj);
}

export function hashPassword(password : string)
{
    
}