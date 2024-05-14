import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function ADD_RESERVATION(data) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `activity-reservation`,
    data,
  }).catch((error) => console.log(error))
}
