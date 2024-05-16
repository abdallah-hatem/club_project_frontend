import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function BOOK_PRACTICE(data) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `book-practice`,
    data,
  }).catch((error) => console.log(error))
}
