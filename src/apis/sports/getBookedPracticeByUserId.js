import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function GET_BOOKED_PRACTICE_BY_USER_ID(id) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `book-practice/${id}`,
  }).catch((error) => console.log(error))
}
