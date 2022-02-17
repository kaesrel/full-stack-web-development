import type { RequestEvent, RequestHandler } from "@sveltejs/kit";
import type { JSONObject, JSONValue } from "@sveltejs/kit/types/helper";
// import { api } from "./_api";

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

// TODO: Persist in the database 
let todos: Todo[] = [];

// get
export const get: RequestHandler = async ({ request }) => {
    return {
      status: 200,
      body: todos
    }
}

// post
export const post: RequestHandler = async ({ request }) => {
    const formData = await request.formData();
    todos.push({
        created_at: new Date(),
        text: formData.get('text') as string,
        done: false
    });

    return {
        status: 303,
        // body: formData.get('text') as string
        headers: {
            location: "/"
        }
        // body: formData.get('text')
    }

}


