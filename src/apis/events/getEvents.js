import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function GET_EVENTS() {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `event`,
  }).catch((error) => console.log(error))
}
