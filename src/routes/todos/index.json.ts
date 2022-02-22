import type { RequestHandler } from "@sveltejs/kit";
import type { JSONObject, JSONValue } from "@sveltejs/kit/types/helper";
import { api } from "./_api";

// old
// export const get: RequestHandler = () => {
//     return {
//         status: 200,
//         body: "Hello from the API."
//     }
// }


//  this breaks
// export const post: RequestHandler<{}, FormData> = (request) => {
//     console.log(request.body.get("text"));    
// }


// get
export const get: RequestHandler = (request) => {
    return api(request);
}

// post
export const post: RequestHandler = async ( request ) => {
    const formData = await request.request.formData();

    return api(request, {
        created_at: new Date(),
        text: formData.get('text') as string,
        done: false,
    });
}


