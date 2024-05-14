import REQUEST from "../../services/request"
import { ApiBaseUrl } from "../../services/config"

export default async function GET_USER_BY_ID(id) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `user/${id}`,
  }).catch((error) => console.log(error))
}
