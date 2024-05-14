import REQUEST from "../../services/request"
import { ApiBaseUrl } from "../../services/config"

export default async function UPDATE_USER(id, data) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "PUT",
    url: ApiBaseUrl + `user/${id}`,
    data,
  }).catch((error) => console.log(error))
}
