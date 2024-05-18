import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function GET_EVENT_BY_ID(id) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `event/${id}`,
  }).catch((error) => console.log(error))
}
