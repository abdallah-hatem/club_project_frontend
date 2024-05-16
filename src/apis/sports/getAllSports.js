import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function GET_ALL_SPORTS(data) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `sport`,
    data,
  }).catch((error) => console.log(error))
}
