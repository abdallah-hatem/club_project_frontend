import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function GET_BOOKED_TIMES(data) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `activity-reservation/booked`,
    data,
  }).catch((error) => console.log(error))
}
