import REQUEST from "../../services/request"
import { ApiBaseUrl } from "../../services/config"

export default async function GET_FIELDS_BY_ACTIVITY_ID(id) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `field/activity/${id}`,
  }).catch((error) => console.log(error))
}
