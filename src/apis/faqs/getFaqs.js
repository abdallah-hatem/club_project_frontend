import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function GET_FAQS() {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `faqs`,
  }).catch((error) => console.log(error))
}
