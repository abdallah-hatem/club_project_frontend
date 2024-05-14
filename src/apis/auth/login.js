import REQUEST from "../../services/request"
import { ApiBaseUrl } from "../../services/config"

export default async function LOGIN(data) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `auth/login`,
    data,
  }).catch((error) => console.log(error))
}
