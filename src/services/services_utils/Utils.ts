
export function generateJSON(code : string, message: string|object) : string
{
    let obj = 
    {
        "code" : code,
        "message" : message
    }

    return JSON.stringify(obj);
}
