import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function GET_NEWS() {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `news`,
  }).catch((error) => console.log(error))
}
