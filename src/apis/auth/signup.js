import REQUEST from "../../services/request"
import { ApiBaseUrl } from "../../services/config"

export default async function SIGNUP(data) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `auth/signup`,
    data,
  }).catch((error) => console.log(error))
}
