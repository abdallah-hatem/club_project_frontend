import { ApiBaseUrl } from "../../services/config"
import REQUEST from "../../services/request"

export default async function DELETE_RESERVATION(id) {
  //   let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "DELETE",
    url: ApiBaseUrl + `activity-reservation/${id}`,
  }).catch((error) => console.log(error))
}
