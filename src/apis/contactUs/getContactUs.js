import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function GET_CONTACTS() {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `contact-us`,
  }).catch((error) => console.log(error))
}
